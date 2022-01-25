import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList: IProduct[];
  constructor() {
    this.prdList = [
      { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
      { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 }
    ];
  }

  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductsByCatID(cID: number): IProduct[] {
    if (cID == 0)
      return this.prdList;
    else
      return this.prdList.filter(prd => prd.categoryID == cID);
  }

  getProductByID(pID: number): IProduct | null
  {
      let foundProduct=this.prdList.find(prd=>prd.id==pID);
      return foundProduct? foundProduct: null;
  }

  addNewProduct(prd:IProduct)
  {
    this.prdList.push(prd);
  }

  getPrdIDs(): number[]
  {
    let prdIDs: number[]=this.prdList.map(prd=>prd.id);
    return prdIDs;
  }

}
