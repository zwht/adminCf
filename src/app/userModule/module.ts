import {NgModule}           from '@angular/core';

import {UserRoutingModule} from './routing.module'
import {LoginComponent} from './login/login'


@NgModule({
    imports: [UserRoutingModule],
    declarations: [LoginComponent],
    providers: []
})
export class UserModule {
}
