import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'nayan',
    loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule)
  }

];

export const AppRouteModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
