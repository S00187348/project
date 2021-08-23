import { Component } from '@angular/core';
import {MarvelService} from './services/marvel.service';
import {IOMDBResponse} from './services/omdbresponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarvelService]
})

export class AppComponent {
  title = 'marvelApp';

  // public listHeroes = [];
  // public offset = '0';
  // public limit = '100';
  //result;
  comicData:IOMDBResponse;
  errorMessage:any;

  constructor(
    private ComicData: MarvelService
) {}

// ngOnInit(): void {
    
//   this.heroeS.consultarPersonajesMarvel(this.offset, this.limit).subscribe(res => {
//     console.log('Request heroes', res);
//     this.listHeroes = res.data.results;
//   })
// }

getComicDetails(comicName:string): void {
    
    this.ComicData.consultarPersonajesMarvel(this.offset, this.limit).subscribe(
    
      comicData => {
      this.comicData=comicData;
      console.log('writor name:' + this.comicData.Writor);
      console.log('year:' + this.comicData.Year);
    },
    error => this.errorMessage =<any>error
  );
  }
  offset(offset: any, limit: any) {
    throw new Error('Method not implemented.');
  }
  limit(offset: any, limit: any) {
    throw new Error('Method not implemented.');
  }
 
  
}
