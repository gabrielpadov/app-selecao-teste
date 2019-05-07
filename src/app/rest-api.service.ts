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
const apiUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  /**
   * Tratamento de erros
   * @param operation CRUD
   * @param result collections
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // tslint:disable-next-line: deprecation
      return of(result as T);
    };
  }

  //////////////////// CRUD RESTAURANT /////////////
  getRestaurants(): Observable<any> {
    return this.http.get(apiUrl + 'restaurants').pipe(
      map(this.extractData));
  }

  getRestaurant(id): Observable<any> {
    return this.http.get(apiUrl + 'restaurants/' + id).pipe(
      map(this.extractData));
  }

  addRestaurant(restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(apiUrl + 'restaurants', restaurant, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((restaurant) => console.log(`added restaurant w/ id=${restaurant.id}`)),
      catchError(this.handleError<Restaurant>('addRestaurant'))
    );
  }

  updateRestaurant(id, restaurant): Observable<any> {
    return this.http.put(apiUrl + 'restaurants/' + id, restaurant, httpOptions).pipe(
      tap(_ => console.log(`updated restaurant id=${id}`)),
      catchError(this.handleError<any>('updateRestaurant'))
    );
  }

  deleteRestaurant(id): Observable<any> {
    return this.http.delete<any>(apiUrl + 'restaurants/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted restaurant id=${id}`)),
      catchError(this.handleError<any>('deleteRestaurant'))
    );
  }

  //////////////////// CRUD MENU /////////////
getMenus(): Observable<any> {
  return this.http.get(apiUrl + 'menus').pipe(
    map(this.extractData));
}

getMenu(id): Observable<any> {
  return this.http.get(apiUrl + 'menus/' + id).pipe(
    map(this.extractData));
}

getMenuRestaurant(restaurantId): Observable<any> {
  return this.http.get(apiUrl + 'menusRestaurantId/' + restaurantId).pipe(
    map(this.extractData));
}

addMenu(menu): Observable<any> {
  console.log(menu);
  return this.http.post<any>(apiUrl + 'menus', JSON.stringify(menu), httpOptions).pipe(
    // tslint:disable-next-line:no-shadowed-variable
    tap((menu) => console.log(`added menu w/ id=${menu.id}`)),
    catchError(this.handleError<any>('addMenu'))
  );
}

updateMenu(id, menu): Observable<any> {
  return this.http.put(apiUrl + 'menus/' + id, JSON.stringify(menu), httpOptions).pipe(
    tap(_ => console.log(`updated menu id=${id}`)),
    catchError(this.handleError<any>('updateMenu'))
  );
}

deleteMenu(id): Observable<any> {
  return this.http.delete<any>(apiUrl + 'menus/' + id, httpOptions).pipe(
    tap(_ => console.log(`deleted menu id=${id}`)),
    catchError(this.handleError<any>('deleteMenu'))
  );
}

  //////////////////// CRUD REVIEW /////////////
  getReviews(): Observable<any> {
    return this.http.get(apiUrl + 'reviews').pipe(
      map(this.extractData));
  }

  getReview(id): Observable<any> {
    return this.http.get(apiUrl + 'reviews/' + id).pipe(
      map(this.extractData));
  }


  getReviewRestaurant(restaurantId): Observable<any> {
    return this.http.get(apiUrl + 'reviewsRestaurantId/' + restaurantId).pipe(
      map(this.extractData));
  }

  addReview(review): Observable<any> {
    console.log(review);
    return this.http.post<any>(apiUrl + 'reviews', JSON.stringify(review), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((review) => console.log(`added review w/ id=${review.id}`)),
      catchError(this.handleError<any>('addReview'))
    );
  }

  updateReview(id, review): Observable<any> {
    return this.http.put(apiUrl + 'reviews/' + id, JSON.stringify(review), httpOptions).pipe(
      tap(_ => console.log(`updated review id=${id}`)),
      catchError(this.handleError<any>('updateReview'))
    );
  }

  deleteReview(id): Observable<any> {
    return this.http.delete<any>(apiUrl + 'reviews/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted review id=${id}`)),
      catchError(this.handleError<any>('deleteReview'))
    );
  }
  //////////////////// CRUD ORDER /////////////
  getOrders(): Observable<any> {
    return this.http.get(apiUrl + 'orders').pipe(
      map(this.extractData));
  }

  getOrder(id): Observable<any> {
    return this.http.get(apiUrl + 'orders/' + id).pipe(
      map(this.extractData));
  }

  addOrder(order): Observable<any> {
    console.log(order);
    return this.http.post<any>(apiUrl + 'orders', JSON.stringify(order), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((order) => console.log(`added order w/ id=${order.id}`)),
      catchError(this.handleError<any>('addOrder'))
    );
  }

  updateOrder(id, order): Observable<any> {
    return this.http.put(apiUrl + 'orders/' + id, JSON.stringify(order), httpOptions).pipe(
      tap(_ => console.log(`updated order id=${id}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }

  deleteOrder(id): Observable<any> {
    return this.http.delete<any>(apiUrl + 'orders/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted order id=${id}`)),
      catchError(this.handleError<any>('deleteOrder'))
    );
  }
}
