import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  catList: ICategory[];
  newPrd: IProduct= {} as IProduct;

  constructor(private prdService: ProductsService
    , private router: Router) {
      this.catList=[
        {id:1, name:'Laptops'},
        {id:2, name:'Tablets'},
        {id:3, name:'Mobiles'}
      ];
     }

  ngOnInit(): void {
  }

  addProduct() {
    // const prd: IProduct = {
    //   id: 100,
    //   name: 'New Tablet',
    //   price: 100,
    //   quantity: 10,
    //   categoryID: 2,
    //   imgURL: ''
    // }

    // this.prdService.addProduct(prd).subscribe((prd) => {
    //   alert("Product added Successfuly"); // not recommended
    //   // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
    //   this.router.navigateByUrl('/Products');
    // })

    const observer={
      next: (prd:IProduct) => {
        alert("Product added Successfuly"); // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
        this.router.navigateByUrl('/Products');
      },
      error: (err:Error)=>{alert(err.message)}
    }

    this.prdService.addProduct(this.newPrd).subscribe(observer);
  }

}
