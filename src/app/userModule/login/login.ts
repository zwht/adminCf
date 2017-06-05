import {Component, OnInit, Inject} from '@angular/core';

import {AppService} from './../../app.service';

var kk = require("../../../assets/images/aa.png");

@Component({
    selector: 'index',
    template: require("./login.jade"),
    styles: [require("./login.less").toString()]
})

export class LoginComponent implements OnInit {
    constructor(@Inject(AppService) private appService: AppService) {
    }

    kk1 = kk
    ngOnInit() {
        this;
        debugger
    }
}