import { Component } from '@angular/core';
import {OmdbApiService} from './services/omdb-api.service';
import {IOMDBResponse} from './omdbresponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  Title(Title: any) {
    throw new Error('Method not implemented.');
  }
  comicData:IOMDBResponse;
  errorMessage:any;

  constructor(private _omdbSerice:OmdbApiService){
}
 getComicDetails(comicName:string) : boolean{
   this._omdbSerice.GetComicData(comicName).subscribe(
     comicData => {
       this.comicData=comicData;
       console.log('writor name:' + this.comicData.Writor);
     },
     error => this.errorMessage =<any>error
   );
   return false;
 }


}
