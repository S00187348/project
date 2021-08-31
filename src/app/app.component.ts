import { Component } from '@angular/core';
// import { Console } from 'node:console';
// import { runInThisContext } from 'node:vm';
import {MarvelService} from './services/marvel.service';
import {IOMDBResponse} from './services/omdbresponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarvelService]
})

export class AppComponent {
//  public listComicData = [];
//   public offset = '0';
//   public limit = '100';
//   public results= {};
  comicData:IOMDBResponse;
  errorMessage:any;
  Title: any;

  constructor( private _ComicData: MarvelService ) {}

getComicDetails( ComicData:string) :  boolean{
    this._ComicData.GetMovieData(ComicData).subscribe(
      comicData => {
        this.comicData=comicData;
        console.log('name:' + this.comicData.Name);
      },
      error => this.errorMessage =<any>error
    );
    return false;
  }
 


// getComicDetails(comicName:string): void {
    
//     this.ComicData.consultarPersonajesMarvel(this.offset, this.limit).subscribe(
    
//       comicData => {
//       this.ComicData=comicData;
//       console.log('writor name:' + this.comicData.Writor);
//       console.log('year:' + this.comicData.Year);
//     },
//     error => this.errorMessage =<any>error
//   );
//   }
  
  }

  
 
  


