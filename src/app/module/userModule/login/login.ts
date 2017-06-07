import {Component, OnInit, Inject} from '@angular/core';


var kk = require("../../../../assets/images/aa.png");

@Component({
    selector: 'index',
    template: require("./login.jade"),
    styles: [require("./login.less").toString()]
})

export class LoginComponent implements OnInit {

    kk1 = kk
    ngOnInit() {
        this;
        debugger
    }
}