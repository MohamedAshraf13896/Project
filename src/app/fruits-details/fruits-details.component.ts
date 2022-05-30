import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesersService } from '../Services/desers.service';
import { Products } from 'src/app/app.component';
import { FoodsService } from '../Services/foods.service';
import { FruitsService } from '../Services/fruits.service';

@Component({
  selector: 'app-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.css']
})
export class FruitsDetailsComponent implements OnInit {
  productId:any
  product:Products = new Products();
  constructor(myRoute:ActivatedRoute,
    private myservices:FruitsService) { 
      this.productId =  myRoute.snapshot.params["id"];
    }

  ngOnInit(): void {
    
    this.myservices.GetAllFruitssByID(this.productId).subscribe(
      
      (data:any)=>{this.product = data},
      (err:any)=> {console.log(err)})
  }

}