import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cart } from '../Model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private api = "http://localhost:8080/cart";
  private baseUrl ='http://localhost:3000/cart';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(cart:Cart): Observable<any>{
    return this.httpClient.post(this.api + '/post', JSON.stringify(cart), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  createCart(cart : Cart){
    return this.httpClient.post<Cart>(this.baseUrl, cart);
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.api + '/getall')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id:number): Observable<any> {
    return this.httpClient.get(this.api + '/get/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.api + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}