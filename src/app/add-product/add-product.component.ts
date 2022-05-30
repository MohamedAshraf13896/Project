import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddingService } from '../Services/adding.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  current:any

  constructor(private route: ActivatedRoute, private myserv: AddingService, private nav:Router) { }

  ngOnInit(): void {
    this.current = this.route.snapshot.paramMap.get('type')
  }
  BaseURl = "http://localhost:4200/addForm/Deserts"
  addNew(name: any, Price: any, src: any , Description:any) {
    var file = src.value.split("\\");
    var fileName = file[file.length-1];
    if (confirm("You Sure You Want To Add This Item ?!")){
      let item = { name, Price, src:"assets/"+"img/"+ this.current + "/"+fileName , type: this.current , Description};

      if(name && src && Price  && Description ){

        this.myserv.addnewItem(item).subscribe();
        this.nav.navigate(['/'+this.current]);
  
      }else {
        this.nav.navigate(['addForm/'+this.current]);
      }
    }
}
}
