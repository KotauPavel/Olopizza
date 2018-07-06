import { Component, OnInit } from '@angular/core';
import { GetpizzasService } from '../../services/getpizzas.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  private pizzas: any[] = [];

  constructor(private getPizzasService: GetpizzasService) { }

  ngOnInit() {
    this.getPizzasService.getPizzas().subscribe((data) => { this.pizzas = this.getToppings(data); });
  }

  getToppings(pizzas) {
    return _.chain(pizzas)
    .map(function(pizza) { return pizza.toppings; })
    .countBy(function(toppings) { return toppings; })
    .map(function(value, key) {return {toppings: key.split(', '), OrdersCount: value};  } )
    .sortBy('OrdersCount')
    .value().reverse().slice(0, 20);
  }
}
