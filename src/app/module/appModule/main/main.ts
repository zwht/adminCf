import {Component, OnInit, Inject} from '@angular/core';
import {AppService} from './../app.service';


@Component({
    selector: 'my-app',
    template: require('./main.jade'),
    styles: [require('./main.less').toString()],
})

export class MainComponent implements OnInit {

    constructor(@Inject(AppService) private appService: AppService) {
    }

    userName = '';
    fuck;

    ngOnInit() {
        //this.appService.name='999999';
        this.fuck=this.appService.getHeroes();
    }
}