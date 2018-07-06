import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetpizzasService } from './services/getpizzas.service';
import { AppComponent } from './app.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [GetpizzasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
