import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { DesertsComponent } from './deserts/deserts.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FoodsDetailsComponent } from './foods-details/foods-details.component';
import { FoodsComponent } from './foods/foods.component';
import { FruitsDetailsComponent } from './fruits-details/fruits-details.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { VegetablesDetailsComponent } from './vegetables-details/vegetables-details.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {path:"Fruits",component:FruitsComponent},
  {path:"Foods",component:FoodsComponent},
  {path:"Vegetables",component:VegetablesComponent},
  {path:"Deserts",component:DesertsComponent},
  {path:"ItemDetails/:id", component:ItemDetailsComponent},
  {path:"FoodsDetails/:id", component:FoodsDetailsComponent},
  {path:"FruitsDetails/:id", component:FruitsDetailsComponent},
  {path:"VegetablesDetails/:id", component:VegetablesDetailsComponent},
  {path:"addForm/:type",component:AddProductComponent},
  {path:"editform/:type/:id",component:EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
