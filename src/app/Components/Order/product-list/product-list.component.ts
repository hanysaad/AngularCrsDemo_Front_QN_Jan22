import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
 // , providers: [StaticProductsService]
})
export class ProductListComponent implements OnInit, OnChanges {
  //prdList: IProduct[];
  prdListOfCat: IProduct[] = [];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  orderTotalPrice: number = 0;
  orderDate: Date;

  constructor(private prdService:ProductsService
            // , private staticPrdService: StaticProductsService
            , private router:Router) {
    this.totalPriceChanged=new EventEmitter<number>();
    // this.prdList = [
    //   { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
    //   { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 }
    // ];

    // this.prdListOfCat = this.prdList;

    this.orderDate = new Date();
  }

  ngOnChanges(): void {
    // this.filterProductsByCatID();
    // this.prdListOfCat=this.staticPrdService.getProductsByCatID(this.sentCatID);
    this.prdService.getProductsByCatID(this.sentCatID)
      .subscribe(products=>{
        this.prdListOfCat=products;
      });
  }

  ngOnInit(): void {
    this.prdService.getAllProducts()
      .subscribe(products=>{
        this.prdListOfCat=products;
      });
  }

  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }

  buy(prdPrice: number, count: string) {
    // let itemsCount:number= count;

    // this.orderTotalPrice= parseInt(count)*prdPrice;
    // this.orderTotalPrice= Number(count)* prdPrice;
    // // this.orderTotalPrice= (count as number) *prdPrice;
    this.orderTotalPrice += +count * prdPrice;
    //Execute Event
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  openPrdDetails(prdID:number)
  {
    // this.router.navigateByUrl('/Products/' + prdID)
    this.router.navigate(['/Products',prdID]);
  }

  // private filterProductsByCatID() {
  //   if (this.sentCatID == 0)
  //     this.prdListOfCat = this.prdList;
  //   else
  //     this.prdListOfCat = this.prdList.filter(prd => prd.categoryID == this.sentCatID);
  // }

  // changeCat()
  // {
  //   this.selectedCatID=1;
  // }

}
