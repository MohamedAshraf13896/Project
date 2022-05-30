import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesersService } from '../Services/desers.service';
import { Products } from 'src/app/app.component';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  productId:any
  product:Products = new Products();
  constructor(
    myRoute:ActivatedRoute,
    private myservices:DesersService,
    
    ){
    this.productId =  myRoute.snapshot.params["id"];
    }
    


  ngOnInit(): void {
      this.myservices.GetAllDesertsByID(this.productId).subscribe(
        (data:any)=>{this.product = data},
        (err:any)=> {console.log(err)}
      )
  }

  
}
