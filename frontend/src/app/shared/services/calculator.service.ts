import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http:HttpClient) { }

  getsuma<T>(numero1, numero2): Observable <T>{
  return  this.http.get('http://localhost:8080/sumar?numero1='+numero1+'&numero2='+numero2).pipe(map((response)=>response as T));
  }

}
