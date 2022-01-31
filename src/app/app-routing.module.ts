import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { AuthGuard } from './Gaurds/auth.guard';

const routes: Routes = [ // First-match wins strategy
  {path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: '/Home', pathMatch: 'full'}, //Default path
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: ProductListComponent},
    {path: 'Products/:pid', component: ProductDetailsComponent},
    {path: 'Product/Add', component: AddProductComponent},
    {path: 'Order', component: OrderMasterComponent, canActivate:[AuthGuard]},
    {
      path: 'User',
      loadChildren: () => import('src/app/Components/user-module/user-module.module')
                            .then(m=>m.UserModuleModule)
    },
  ]},
  {path:'Login', component:UserLoginComponent},
  {path:'Register', component:UserRegisterComponent},
  {path:'Logout', component:UserLoginComponent},
  {path: '**', component:NotFoundComponent}// Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
