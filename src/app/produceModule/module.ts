import {NgModule}           from '@angular/core';

import {ProduceRoutingModule} from './routing.module'
import {IndexComponent} from './index/index'
import {TestCom}    from './testB/test1';

@NgModule({
    imports: [ProduceRoutingModule],
    declarations: [IndexComponent, TestCom],
    providers: []
})
export class ProduceModule {
}
