import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1><i class="icon icon-add"></i>' +
    '<a routerLink="produce/index" routerLinkActive="active">ddddd</a>' +
    '<router-outlet></router-outlet>'
})

export class AppComponent {}