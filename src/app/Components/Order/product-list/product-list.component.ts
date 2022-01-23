import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  catList:ICategory[];
  prdList:IProduct[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  orderDate: Date;
  constructor() {
    this.catList=[
      {id:1, name:'Laptops'},
      {id:2, name:'Tablets'},
      {id:3, name:'Mobiles'}
    ];
    this.prdList=[
      {id:100, name:'LenovoThinkpad laptop', price:100000000, quantity:1, imgURL:'https://fakeimg.pl/200x100', categoryID:1},
      {id:200, name:'Apple MacBook laptop', price:2007780, quantity:0, imgURL:'https://fakeimg.pl/200x100', categoryID:1},
      {id:300, name:'Lenovo Tab 2', price:3000, quantity:10, imgURL:'https://fakeimg.pl/200x100', categoryID:2},
      {id:400, name:'Samsung Tab', price:40.5, quantity:2, imgURL:'https://fakeimg.pl/200x100', categoryID:2},
      {id:500, name:'Smasung Note 10', price:50000, quantity:0, imgURL:'https://fakeimg.pl/200x100', categoryID:3},
      {id:600, name:'Samsung S22 Utlra', price:600, quantity:1, imgURL:'https://fakeimg.pl/200x100', categoryID:3}
    ];

    this.orderDate=new Date();
   }

  ngOnInit(): void {
  }

  prdTrackByFn(index: number, prd:IProduct):number
  {
    return prd.id;
  }

  buy(prdPrice:number, count:string)
  {
    // let itemsCount:number= count;

    // this.orderTotalPrice= parseInt(count)*prdPrice;
    // this.orderTotalPrice= Number(count)* prdPrice;
    // // this.orderTotalPrice= (count as number) *prdPrice;
    this.orderTotalPrice= +count * prdPrice;
  }

  changeCat()
  {
    this.selectedCatID=1;
  }

}
