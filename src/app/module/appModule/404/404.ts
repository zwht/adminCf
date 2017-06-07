import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'index',
    template: require("./404.jade"),
    styles: [require("./404.less").toString()]
})

export class Component404 implements OnInit {
    name = 404
    ngOnInit() {
    }
}