import{ stringify } from 'querystring';

export interface IComic{
    title: string;
    writor: string;
    pubishYear: string;
    artists: string;
    imageURL: string;

}
export class Comic{
    title: string;
    writor: string;
    pubishYear: string;
    artists: string;
    imageURL: string;
    
    constructor(title:string, writor:string, pubishYear:string, artists:string, imageURL:string){
        this.title= title;
        this.writor= writor;
        this.pubishYear= pubishYear;
        this.artists = artists;
        this.imageURL = imageURL;
    }
}
