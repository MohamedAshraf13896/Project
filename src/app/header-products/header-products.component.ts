import { Component, OnInit } from '@angular/core';
import { AddingService } from '../Services/adding.service';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.css']
})
export class HeaderProductsComponent implements OnInit {
  
  
  constructor(private myservice:AddingService) { 
    
  }

  ngOnInit(): void {
  }

  passParam(_type:any){

    this.myservice.passURL(_type);

  }

}
