import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetpizzasService {

  constructor(private http: HttpClient) { }

  getPizzas() {
    return this.http.get('http://files.olo.com/pizzas.json');
  }
}
