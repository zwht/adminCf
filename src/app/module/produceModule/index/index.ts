import {Component, OnInit, Inject} from '@angular/core';

var kk = require("../../../../assets/images/aa.png");

@Component({
    selector: 'index',
    template: require("./index.jade"),
    styles: [require("./index.less").toString()]
})


export class IndexComponent implements OnInit {

    kk1 = kk
    ngOnInit() {
        this;
        debugger
    }
}