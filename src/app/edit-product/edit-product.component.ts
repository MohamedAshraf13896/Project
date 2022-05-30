import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditingService } from '../Services/editing.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 productid:any
 type : any
 item : any
   constructor(private route: ActivatedRoute, private myserv: EditingService, private nav:Router) {
    this.productid = route.snapshot.params["id"];
    this.type = route.snapshot.params["type"];
  }

  ngOnInit(): void {

    this.myserv.GetProductsInCatagoryByID(this.productid,this.type).subscribe(
      (data)=> this.item = data,
      (err)=>console.log(err)
    )

  }
  update(){

    this.myserv.UpdateProductByID(this.productid,this.item ,this.type).subscribe()
    this.nav.navigate(['/'+this.type]);
  }

}
