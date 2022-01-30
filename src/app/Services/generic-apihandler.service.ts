import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
   }

  private setHeaders(key: string, value: string)
  {
    this.httpOptions.headers.set(key, value);
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }

  getAll( APIRoute: string): Observable<APIResponseVM>
  {
    return this.httpClient.get <APIResponseVM>(`${environment}/${APIRoute}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  // search(searchItems: string[]) :Observable<APIResponseVM>
  // {

  // }

  // getByID(id:number):  Observable<APIResponseVM>
  // {

  // }

  // post (newObject: any):  Observable<APIResponseVM>
  // {

  // }

  // put(id:number, newObject: any):  Observable<APIResponseVM>
  // {

  // }

  // delete (id: any): Observable<APIResponseVM>
  // {

  // }
}
