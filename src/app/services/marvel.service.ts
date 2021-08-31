import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { IOMDBResponse } from './omdbresponse';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  constructor(public _http: HttpClient) { }
  // public url = 'https://gateway.marvel.com/'
  // public _key ='c248a342d826c2b54cd6bbd996bfd235'
  // private _Key ='b7e44c6ec44f5bc9b3b180c6be8d0cf0bf19ce44'

  public consultarPersonajesMarvel(): Observable<IOMDBResponse> {
    
   let url = 'https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';
          
    
    return this._http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5));
    };
    // return this._http.get<IOMDBResponse>(this.url + this._key + ComicData.title)
    // .pipe(
    //   tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    //   ),
    //   catchError(this.handleError)
    // );
    
    // }
    // private handleError(err:HttpErrorResponse){
    //   console.log('MarvelService:' + err.message);
    //   return Observable.throw(err.message);

    // }
    public obtenerPersonajesMarvel(url: string) {

      console.log(url);
  
      return this._http.get(url).pipe(
        map((res: any) => {
          return res;
        }),
        retry(5));
  }
}
