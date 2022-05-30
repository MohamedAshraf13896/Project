import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class AddingService {



  BaseURl:any

  constructor(private ItemService: HttpClient) { }

  passURL(_type: string) {

    this.BaseURl = "http://localhost:5400";

    this.BaseURl = `${this.BaseURl}/${_type}`;

    return this.BaseURl;

  }

  addnewItem(item: any) {

    return this.ItemService.post(this.BaseURl, item);

  }
}