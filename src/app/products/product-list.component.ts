import { Component, OnInit } from '@angular/core';
import { Test1Component } from '../Test/test1.component';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title:string//='Product - Orders App'
listFilter:string=''
showImage:boolean=false

// width:number=50
// height:50
  constructor(private _productService:ProductService) { }
 // products=[]
  products:IProduct[]=[];

test():void{
alert("This is test for event binding");

}
toggleImage(x:number,y:string):void{
this.showImage=!this.showImage
}
  ngOnInit() {
    //console.log('The product component loaded')
    //alert('The product component loaded');
    //this.products= this._productService.getProducts()
    this._productService.getProducts().subscribe((products:IProduct[])=>{this.products=products})
  }
  onNotify(message:string){
    //console.log(`the rating was clicked`)
    this.title='product-order App'+ message
  }
}
