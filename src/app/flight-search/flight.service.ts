import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../entities/flight";

@Injectable({ providedIn: 'root' })
export class FlightService {

constructor(private http: HttpClient) {
}

  find(from: string, to: string): Observable<Flight[]> {
  let url = 'http://www.angular.at/api/flight';

  let headers = new HttpHeaders()
        .set('Accept', 'application/json');

  let params = new HttpParams()
        .set('from', from)
        .set('to', to);

  return this.http.get<Flight[]>(url, {headers, params});
  }

}