import { Restaurant } from './models/restaurant';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Menu } from './models/menu';
import { Review } from './models/review';
import { Order } from './models/order';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/v1/products';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  restaurants: any = [
    {
      id: 'bread-bakery',
      name: 'Bread & Bakery',
      category: 'Bakery',
      deliveryEstimate: '25m',
      rating: 4.9,
      imagePath: 'assets/img/restaurants/breadbakery.png',
      about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
      hours: 'Funciona de segunda à sexta, de 8h às 23h'
    },
    {
      id: 'burger-house',
      name: 'Burger House',
      category: 'Hamburgers',
      deliveryEstimate: '100m',
      rating: 3.5,
      imagePath: 'assets/img/restaurants/burgerhouse.png',
      about: '40 anos se especializando em trash food.',
      hours: 'Funciona todos os dias, de 10h às 22h'
    },
    {
      id: 'coffee-corner',
      name: 'Coffee Corner',
      category: 'Coffee Shop',
      deliveryEstimate: '30-40m',
      rating: 4.8,
      imagePath: 'assets/img/restaurants/coffeecorner.png',
      about: 'A Coffe Corner foi eleita a melhor cafeteria da cidade.',
      hours: 'Funciona de segunda à sábado, de 6h às 22h'
    }
  ];

  constructor(private http: HttpClient) { }

  listRestaurants() {
    return this.restaurants;
  }

  /**
   * Tratamento de erros
   * @param operation CRUD
   * @param result collections
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      // tslint:disable-next-line: deprecation
      return of (result as T);
    };
  }

  //////////////////// CRUD RESTAURANT /////////////
  getRestaurant(id): Observable<Restaurant> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      tap(_ => console.log(`fetched Restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`))
    );
  }

  addRestaurant(restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(apiUrl, restaurant, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((restaurant: Restaurant) => console.log(`added restaurant w/ id=${restaurant.id}`)),
      catchError(this.handleError<Restaurant>('addRestaurant'))
    );
  }

  updateRestaurant(id, restaurant): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, restaurant, httpOptions).pipe(
      tap(_ => console.log(`updated restaurant id=${id}`)),
      catchError(this.handleError<any>('updateRestaurant'))
    );
  }

  deleteRestaurant(id): Observable<Restaurant> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Restaurant>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>('deleteRestaurant'))
    );
  }

  //////////////////// CRUD MENU /////////////
  getMenu(id): Observable<Menu> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Menu>(url).pipe(
      tap(_ => console.log(`fetched menu id=${id}`)),
      catchError(this.handleError<Menu>(`getMenu id=${id}`))
    );
  }

  addMenu(menu): Observable<Menu> {
    return this.http.post<Menu>(apiUrl, menu, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((menu: Menu) => console.log(`added menu w/ id=${menu.id}`)),
      catchError(this.handleError<Menu>('addMenu'))
    );
  }

  updateMenu(id, menu): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, menu, httpOptions).pipe(
      tap(_ => console.log(`updated menu id=${id}`)),
      catchError(this.handleError<any>('updateMenu'))
    );
  }

  deleteMenu(id): Observable<Menu> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Menu>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted menu id=${id}`)),
      catchError(this.handleError<Menu>('deleteMenu'))
    );
  }

  //////////////////// CRUD REVIEW /////////////
  getReview(id): Observable<Review> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Review>(url).pipe(
      tap(_ => console.log(`fetched review id=${id}`)),
      catchError(this.handleError<Review>(`getReview id=${id}`))
    );
  }

  addReview(review): Observable<Review> {
    return this.http.post<Review>(apiUrl, review, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((review: Review) => console.log(`added review=${review}`)),
      catchError(this.handleError<Review>('addReview'))
    );
  }

  updateReview(id, review): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, review, httpOptions).pipe(
      tap(_ => console.log(`updated review id=${id}`)),
      catchError(this.handleError<any>('updateReview'))
    );
  }

  deleteReview(id): Observable<Review> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Review>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted review id=${id}`)),
      catchError(this.handleError<Review>('deleteReview'))
    );
  }
  //////////////////// CRUD ORDER /////////////
  getOrder(id): Observable<Order> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap(_ => console.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }

  addOrder(order): Observable<Order> {
    return this.http.post<Order>(apiUrl, order, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((order: Order) => console.log(`added order=${order}`)),
      catchError(this.handleError<Order>('addOrder'))
    );
  }

  updateOrder(id, order): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, order, httpOptions).pipe(
      tap(_ => console.log(`updated order id=${id}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }

  deleteOrder(id): Observable<Order> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Order>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted order id=${id}`)),
      catchError(this.handleError<Order>('deleteOrder'))
    );
  }

}
