import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesersService } from '../Services/desers.service';
import { Products } from 'src/app/app.component';
import { FoodsService } from '../Services/foods.service';


@Component({
  selector: 'app-foods-details',
  templateUrl: './foods-details.component.html',
  styleUrls: ['./foods-details.component.css']
})
export class FoodsDetailsComponent implements OnInit {
  productId:any
  product:Products = new Products();
  constructor(myRoute:ActivatedRoute,
    private myservices:FoodsService) { 
      this.productId =  myRoute.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.myservices.GetAllFoodsByID(this.productId).subscribe(
      (data:any)=>{this.product = data},
      (err:any)=> {console.log(err)})
  }
  

}

