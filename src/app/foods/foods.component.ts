import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../Services/foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor(private myservices:FoodsService) { }
  Food:any
  searchText:string=""

  ngOnInit(): void {
    this.myservices.GetAllFoods().subscribe(
      (data)=>{this.Food = data},
      (err)=> {console.log(err)}
    )
  }

}
