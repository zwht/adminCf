import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ZwAppModule } from './app/module/appModule/module'


const platform = platformBrowserDynamic();
platform.bootstrapModule(ZwAppModule);