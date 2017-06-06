import {NgModule}           from '@angular/core';

import {MenuRoutingModule} from './routing.module'
import {MenuComponent}    from './menu/menu';

import {ProduceModule} from '../produceModule/module'

@NgModule({
    imports: [MenuRoutingModule,ProduceModule],
    declarations: [MenuComponent],
    providers: []
})
export class MenuModule {
}
