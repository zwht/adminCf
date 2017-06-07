import 'zone.js/dist/zone';
import 'reflect-metadata';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

/* 路由模块 */
import {AppRoutingModule} from './routing.module';
/* 大类模块 */
import  {CommonModule} from '../commonModule/module'
import {UserModule} from '../userModule/module'
import {MenuModule} from '../menuModule/module'
/* 应用最上层组件 */
import {MainComponent} from './components/main/c';
/* 加载全局样式 */
require('../../../assets/style/style.less');

import {Component404}    from './components/404/c';
import {AppService} from './services/test';


@NgModule({
    imports: [
        BrowserModule,//这个和每个在浏览器中运行应用都需要它

        MenuModule,
        UserModule,
        CommonModule,

        AppRoutingModule
    ],
    declarations: [MainComponent, Component404],//当前组件使用到的(组件，指令，管道)列表
    bootstrap: [MainComponent],//根组件，Angular 创建它并插入index.html宿主页面,可以插入多个
    providers: [AppService]
})

export class ZwAppModule {
}