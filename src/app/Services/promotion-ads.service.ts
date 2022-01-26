import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
 private adsList: string[];
  constructor() {
    this.adsList=["Big Discounts"
                 , "Sale up to 50%"
                 , "Check our white Friday offers"
                 //, ""
                 , "Special white Friday offers up to 70%"];
   }

   getScheduledAds(intervalInSeconds: number):Observable<string>
   {
      return new Observable <string>((observer)=>{
        // observer.next();
        // observer.error();
        // observer.complete();
        let counter=0;
        let adsTimer= setInterval(()=>{
          console.log('in Interval');
          if (counter==this.adsList.length)
          {
            observer.complete();
          }
          if(this.adsList[counter] =="")
          {
            observer.error("Error: Empty Ad.");// Will stop Observable
          }

          observer.next(this.adsList[counter]);
          counter++;
        },intervalInSeconds*1000);

        return {
          unsubscribe(){
            //Will be called:
              // 1- Error
              // 2- Complete
              // 3- unsubscribe()
            clearInterval(adsTimer);
            console.log("In Obs Unsubscribe...")
          }
        }
      });
   }

   getSerialAds(): Observable<string>
   {
    //  return of("ad1", "ad2", "ad3");
     return from(this.adsList)
   }
}
