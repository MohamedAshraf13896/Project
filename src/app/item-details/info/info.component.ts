import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/app.component';
import { DesersService } from 'src/app/Services/desers.service';
import { FoodsService } from 'src/app/Services/foods.service';
import { FruitsService } from 'src/app/Services/fruits.service';
import { VegetablesService } from 'src/app/Services/vegetables.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  productId:any
  constructor(myRoute:ActivatedRoute,
    private myservices:DesersService,
    private myservices2:FoodsService,
    private myservices3:FruitsService,
    private myservices5:VegetablesService,private nav:Router) {this.productId =  myRoute.snapshot.params["id"]; }
@Input() productinfo:Products = new Products();
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.productinfo = changes['productinfo'].currentValue[0]
}
deleteItem(_type:any)
  {
   if(confirm("Are you sure to delete this item?")){
     switch (_type) {
       case "Deserts":
         this.myservices.DeleteDesertByID(this.productId).subscribe(
           ()=> console.log(`fruit with id = ${this.productId} deleted`) ,
           (err) => console.log(err)
         )
         break;
         case "Fruits":
           this.myservices3.DeleteFruitsByID(this.productId).subscribe(
             ()=> console.log(`fruit with id = ${this.productId} deleted`) ,
             (err) => console.log(err)
           )
           break;
           case "Vegetables":
           this.myservices5.DeleteVegetablesByID(this.productId).subscribe(
             ()=> console.log(`fruit with id = ${this.productId} deleted`) ,
             (err) => console.log(err)
           )
           break;
           break;
           case "Foods":
           this.myservices2.DeleteFoodsByID(this.productId).subscribe(
             ()=> console.log(`fruit with id = ${this.productId} deleted`) ,
             (err) => console.log(err)
           )
           break;
       default:
         break;
     }
     this.nav.navigate(['/'+_type]);
   }
  }
}
