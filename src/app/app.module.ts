import 'zone.js/dist/zone';
import 'reflect-metadata';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

/* 路由模块 */
import {AppRoutingModule} from './app-routing.module';
/* 大类模块 */
import {ProduceModule} from './produce/module'
/* 应用最上层组件 */
import {AppComponent} from './app.component';
/* 加载全局样式 */
require('../assets/style/entery.less');

@NgModule({
    imports: [
        BrowserModule,
        ProduceModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}