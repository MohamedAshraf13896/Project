import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
}

export class Products 
{
  "id":number;
  "name": string;
  "Price": string;
  "src":string;
  "type":string;
  "Description":string;
}