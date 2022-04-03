import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

export interface Objects {
  id?: string
  name: string
  population: number
  createdAt: Date
  // coordinates?: Coords
}
// export interface Coords extends Objects {
//
// }

@Injectable({providedIn: 'root'})
export class EntitiesServices {

  url = 'https://622f1dc93ff58f023c166599.mockapi.io/api/v1/object'
  constructor(private http: HttpClient) {}


  getAll(): Observable<Objects[]> {
    return this.http.get<Objects[]>(this.url)
      .pipe(delay(750))
  }
  getById(id: string): Observable<Objects> {
    return this.http.get<Objects>(`${this.url}/${id}`)
  }
  upDate(entity: Objects): Observable<Objects> {
    return this.http.put<Objects>(`${this.url}/${entity.id}`, entity)
  }

}
