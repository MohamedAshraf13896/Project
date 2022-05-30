import { Component, OnInit } from '@angular/core';
import { VegetablesService } from '../Services/vegetables.service';
import { Pipe } from '@angular/core';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  constructor(private myservices:VegetablesService) {
   }
  Vegetables:any
  searchText:string = "";
  ngOnInit(): void {
    this.myservices.GetAllVegetables().subscribe(
      (data)=>{this.Vegetables = data},
      (err)=> {console.log(err)}
    )
  }

}
