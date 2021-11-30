import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';
import { TitlefullComponent } from './titlefull/titlefull.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    CarouselComponent,
    TitleComponent,
    HomeComponent,
    ButtonComponent,
    TitlefullComponent,
    ProductsComponent,
    CardsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
