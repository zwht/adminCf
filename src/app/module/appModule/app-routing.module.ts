import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Component404}    from './404/404';


export const routes: Routes = [
    //{path: '', redirectTo: 'login', pathMatch: 'full'},
    //{path: 'menu', loadChildren: '../menuModule/module#MenuModule'},
    {path: '**', component: Component404}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
