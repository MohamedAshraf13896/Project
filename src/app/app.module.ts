import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FruitsComponent } from './fruits/fruits.component';
import { FoodsComponent } from './foods/foods.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { DesertsComponent } from './deserts/deserts.component';
import { SearchingComponent } from './searching/searching.component';
import { HeaderProductsComponent } from './header-products/header-products.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { DetailsComponent } from './details/details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InfoComponent } from './item-details/info/info.component';
import { FoodsDetailsComponent } from './foods-details/foods-details.component';
import { FruitsDetailsComponent } from './fruits-details/fruits-details.component';
import { VegetablesDetailsComponent } from './vegetables-details/vegetables-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FruitsComponent,
    FoodsComponent,
    VegetablesComponent,
    DesertsComponent,
    SearchingComponent,
    HeaderProductsComponent,
    ProductSliderComponent,
    DetailsComponent,
    ItemDetailsComponent,
    InfoComponent,
    FoodsDetailsComponent,
    FruitsDetailsComponent,
    VegetablesDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    SearchPipe,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
