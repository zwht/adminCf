import {NgModule}           from '@angular/core';

import {CommonRoutingModule} from './routing.module'
import {Component404} from './404/404'


@NgModule({
    imports: [CommonRoutingModule],
    declarations: [Component404],
    providers: []
})
export class CommonModule {
}
