import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './client/app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
