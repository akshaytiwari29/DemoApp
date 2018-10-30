import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './Test/test.component';
import { Test1Component } from './Test/test1.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',component:ProductDetailComponent},
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:HomeComponent}
    ])    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
