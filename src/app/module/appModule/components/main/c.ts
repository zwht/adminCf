import {Component, OnInit, Inject} from '@angular/core';
import {AppService} from '../../services/test';


@Component({
    selector: 'my-app',
    template: require('./v.jade'),
    styles: [require('./s.less').toString()],
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