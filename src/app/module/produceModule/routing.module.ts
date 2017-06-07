import {NgModule}            from '@angular/core';
import {RouterModule, Routes}        from '@angular/router';

import {IndexComponent}    from './index/index';
import {TestCom}    from './testB/test1';

export const routes: Routes = [
    {path: 'produce', component: IndexComponent},
    {path: 'produce/test', component: TestCom}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProduceRoutingModule {
}
