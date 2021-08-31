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
// public _url = 'https://gateway.marvel.com/v1/public/comics?'
//   public _key ='4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73'
  // private _Key ='b7e44c6ec44f5bc9b3b180c6be8d0cf0bf19ce44'
  constructor(public _http: HttpClient) { }
  

  // GetMovieData(ComicData): Observable<IOMDBResponse>{
  //   return this._http.get<IOMDBResponse>(this._url + this._key + ComicData)
  //   .pipe(
  //     tap(data => console.log('Comicdata/error' + JSON.stringify(data))
  //     ),
  //     catchError(this.handleError)
  //   );
    

  public consultarPersonajesMarvel(): Observable<IOMDBResponse> {
    
   let url = 'https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';
          
    
    return this._http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5));
    };
   
    public obtenerPersonajesMarvel(url: string) {

      console.log(url);
  
      return this._http.get(url).pipe(
        map((res: any) => {
          return res;
        }),
        retry(5));
     } 
    }    
    // private handleError(err:HttpErrorResponse){
    //   console.log('OmdbApiService:' + err.message);
    //   return Observable.throw(err.message);
    // }

