import { Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'app-result',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})

export class ResultComponent implements OnInit
{
    constructor() {}

    @Input() childResult:string;

    ngOnInit(){

    }
}