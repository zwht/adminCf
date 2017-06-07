import {NgModule}            from '@angular/core';
import {RouterModule}        from '@angular/router';

import {routes} from '../produceModule/routing.module'

import {MenuComponent}    from './menu/menu';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'menu',
            component: MenuComponent,
            data: {
                fuck: 9999
            },
            children:routes
        }
    ])],
    exports: [RouterModule]
})
export class MenuRoutingModule {
}
