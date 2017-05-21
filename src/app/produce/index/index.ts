import { Component } from '@angular/core';
var kk=require("../../../assets/images/aa.png")
@Component({
    selector: 'index',
    template: require("./index.jade"),
    styles:[require("./index.less").toString()]
    //template: `<div>index</div>`
})

export class IndexComponent {
    kk1=kk
}