import {Component, OnInit, Inject} from '@angular/core';
import {AppService} from './app.service';


@Component({
    selector: 'my-app',
    template: require('./app.jade'),
    styles: [require('./app.less').toString()],
})

export class AppComponent implements OnInit {

    constructor(@Inject(AppService) private appService: AppService) {
    }

    userName = '';

    ngOnInit() {
        this.appService.name='999999';
        this.appService.getHeroes();
    }
}