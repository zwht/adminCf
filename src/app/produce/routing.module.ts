import {NgModule}            from '@angular/core';
import {RouterModule}        from '@angular/router';

import {IndexComponent}    from './index/index';
import {TestCom}    from './testB/test1';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', redirectTo: 'produce/index', pathMatch: 'full'},
        {path: 'produce/index', component: IndexComponent},
        {path: 'produce/test', component: TestCom}
    ])],
    exports: [RouterModule]
})
export class ProduceRoutingModule {
}
