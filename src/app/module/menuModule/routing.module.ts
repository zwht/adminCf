import {NgModule}            from '@angular/core';
import {RouterModule}        from '@angular/router';

import {MenuComponent}    from './menu/menu';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'rrrr', component: MenuComponent}
    ])]
})
export class MenuRoutingModule {
}
