import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductsListComponent } from './components/bookstore-app/products-list/products-list.component';
import { ProductItemComponent } from './components/bookstore-app/products-list/product-item/product-item.component';
import { BookService } from './components/bookstore-app/products-list/products-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
