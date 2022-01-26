import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, filter, map, retry, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // private subscription!: Subscription;
  private subscriptions: Subscription[] = [];

  storeInfo: StoreData;
  isImageShown: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('ITI Store',
      'https://picsum.photos/350/200',
      ['Cairo', 'Alex', 'Qena', 'Assiut']);

  }

  ngOnInit(): void {
    // let observer={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error: (err:string)=>{
    //     console.log(err);
    //   },
    //   complete:()=>{
    //     console.log("Ads Finsihed!")
    //   }
    // };
    // this.promoAds.getScheduledAds(3).subscribe(observer);

    //   this.promoAds.getScheduledAds(3).subscribe(
    //     (data)=>{},
    //     (err)=>{},
    //     ()=>{});
    // }

    // this.promoAds.getScheduledAds(3).subscribe(
    //   (data) => {
    //     console.log(data);
    //   });

    // let adsSubscription: Subscription= this.promoAds.getScheduledAds(3).subscribe({
    // this.subscription= this.promoAds.getScheduledAds(3).subscribe({
    //   let adsSubscription= this.promoAds.getScheduledAds(3).subscribe({
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log("Ads Finsihed!")
    //   }
    // });

    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Ads Finsihed!")
      }
    };

    // let filtersObservable = this.promoAds.getScheduledAds(3).pipe(
    //   retry(3),
    //   catchError()
    // );

    let filtersObservable = this.promoAds.getScheduledAds(3).pipe(
      filter(ad=>ad.includes("white Friday"))
      , map(ad=> "Ad: " + ad)
    );
    let adsSubscription=filtersObservable.subscribe(observer);
    this.subscriptions.push(adsSubscription);

    //adsSubscription.unsubscribe();

    // let sub=this.promoAds.getSerialAds().subscribe(ad=>{
    //   console.log(ad);
    // });
    // this.subscriptions.push(sub);

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }

}
