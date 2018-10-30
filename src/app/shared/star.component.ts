import { Component, OnInit,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
@Input() rating:number
@Output()notify:EventEmitter<string>=new EventEmitter<string>()
starWidth:number
  constructor() { }

  ngOnInit() {
  }
ngOnChanges():void{
this.starWidth=this.rating*86/5
}
onClick(){
  
this.notify.emit(`the rating ${this.rating} was clicked`)

}
}
