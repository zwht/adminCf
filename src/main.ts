import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { zwAppModule } from './app/app.module'


const platform = platformBrowserDynamic();
platform.bootstrapModule(zwAppModule);