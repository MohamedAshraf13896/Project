import { Component, OnDestroy, OnInit } from '@angular/core';
import { FruitsService } from '../Services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit,OnDestroy {

  constructor(private myservices:FruitsService) { }
 
  Fruit:any;
  mySub :any;
  searchText:string=""

  ngOnInit(): void {
    this.mySub = this.myservices.GetAllFruits().subscribe(
      (data)=>{this.Fruit = data},
      (err)=> {console.log(err)}
    )
    
  }
  ngOnDestroy(): void {
    this.Fruit=[];
    this.mySub.unsubscribe();
  }
}
