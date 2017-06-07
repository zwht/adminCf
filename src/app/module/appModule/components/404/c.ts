import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'index',
    template: require("./v.jade"),
    styles: [require("./s.less").toString()]
})

export class Component404 implements OnInit {
    name = 404
    ngOnInit() {
    }
}