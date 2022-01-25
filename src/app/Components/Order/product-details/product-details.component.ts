import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number=0;
  prd: IProduct | null=null;
  prdIDsArr: number[]=[];
  constructor(private activatedRoute: ActivatedRoute
            , private router: Router
            , private prdService: StaticProductsService
            , private location: Location) { }

  ngOnInit(): void {
    this.prdIDsArr=this.prdService.getPrdIDs();
    console.log("In onInit...")
    // When navigate to same component, WILL NOT reload component
    // even if there's chanes in the route parameters.

    // this.currPrdID= Number(this.activatedRoute.snapshot.paramMap.get('pid'))
    // console.log(this.currPrdID);
    // this.prd=this.prdService.getProductByID(this.currPrdID);


    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currPrdID=Number(paramMap.get('pid'));
      this.prd=this.prdService.getProductByID(this.currPrdID);
    });
  }

  goBack()
  {
    this.location.back();
  }

  prevPrd()
  {
    let currIndex=this.prdIDsArr.findIndex((elem)=>elem==this.currPrdID);
    //console.log(currIndex);
    let prevPrdID;
    if(currIndex>0)
    {
      prevPrdID=this.prdIDsArr[currIndex-1];
      this.router.navigate(['/Products', prevPrdID]);
    }
  }

  nextPrd()
  {
    let currIndex=this.prdIDsArr.findIndex((elem)=>elem==this.currPrdID);
    //console.log(currIndex);
    let nextPrdID;
    if(currIndex<this.prdIDsArr.length)
    {
      nextPrdID=this.prdIDsArr[currIndex+1];
      this.router.navigate(['/Products', nextPrdID]);
    }
  }

}
