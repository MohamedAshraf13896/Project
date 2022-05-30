import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DesersService } from '../Services/desers.service';

@Component({
  selector: 'app-deserts',
  templateUrl: './deserts.component.html',
  styleUrls: ['./deserts.component.css']
})
export class DesertsComponent implements OnInit {

  constructor(private myservices:DesersService) { }
  Deserts: any
  searchText:string=""
  @Output() event= new EventEmitter()

  ngOnInit(): void {
    this.myservices.GetAllDeserts().subscribe(
      (data)=>{this.Deserts = data},
      (err)=> {console.log(err)}
    )
  }
}
