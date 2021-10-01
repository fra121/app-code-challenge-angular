import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  /**
   * @param count Number of people to return
   * @returns Array of people fetched from database as a observable
   */
  get(count: number = 1000) {
    const request = new HttpRequest(
      'GET',
      `${environment.apiBaseUrl}?inc=name,picture,dob,location,email,phone&&results=${count}`,
      null,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'json'
      });

    return this.http.request(request).pipe(
      filter(event => event instanceof HttpResponse
    ));
  }
}
