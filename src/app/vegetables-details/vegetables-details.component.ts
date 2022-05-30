import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DesersService } from '../Services/desers.service';
import { Products } from 'src/app/app.component';
import { FoodsService } from '../Services/foods.service';
import { VegetablesService } from '../Services/vegetables.service';

@Component({
  selector: 'app-vegetables-details',
  templateUrl: './vegetables-details.component.html',
  styleUrls: ['./vegetables-details.component.css']
})
export class VegetablesDetailsComponent implements OnInit {
  productId:any
  product:Products = new Products();
  constructor(myRoute:ActivatedRoute,
    private myservices:VegetablesService) { 
      this.productId =  myRoute.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.myservices.GetAllvegetablessByID(this.productId).subscribe(
      (data:any)=>{this.product = data},
      (err:any)=> {console.log(err)})
  }

}

