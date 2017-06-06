import {NgModule}            from '@angular/core';
import {RouterModule}        from '@angular/router';

import {Component404}    from './404/404';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '**', component: Component404}
    ])]
})
export class CommonRoutingModule {
}
