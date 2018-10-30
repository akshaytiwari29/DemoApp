import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string='Product-Details'
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const param=this._activatedRoute.snapshot.paramMap.get('id')
    if(param){
      const id=+param
      this.getProduct(id)
    }
  }
getProduct(id:number){

}

}
