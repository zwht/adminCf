import {Component, OnInit, Inject} from '@angular/core';

import {AppService} from '../../appModule/app.service';

var kk = require("../../../../assets/images/aa.png");

@Component({
    selector: 'index',
    template: require("./index.jade"),
    styles: [require("./index.less").toString()]
})

export class IndexComponent implements OnInit {
    constructor(@Inject(AppService) private appService: AppService) {
    }

    kk1 = kk
    ngOnInit() {
        this;
        debugger
    }
}