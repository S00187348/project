import { Component } from '@angular/core';
//import { Console } from 'node:console';
//import { runInThisContext } from 'node:vm';
import {MarvelService} from './services/marvel.service';
import {IOMDBResponse} from './services/omdbresponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarvelService]
})

export class AppComponent {
 public listComicData = [];
  public offset = '0';
  public limit = '100';
  //result;
  comicData:IOMDBResponse;
  errorMessage:any;
  Title: any;

  constructor(
    private ComicData: MarvelService
) {}

getComicDetails( comicData:string) : boolean {
    
  this.ComicData.consultarPersonajesMarvel().subscribe(
    ComicData => {
    this.comicData;
      
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

  
 
  


