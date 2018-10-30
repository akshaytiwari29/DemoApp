import { Injectable } from '@angular/core';
import {IProduct} from './product';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ProductService {
//products:IProduct[]=[]
productUrl:string='assets/api/products/products.json'
// getProducts():IProduct[]{
// return this.products  
// }
  constructor(private _httpClient:HttpClient) { }
  getProducts():Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(this.productUrl)
  }
}
