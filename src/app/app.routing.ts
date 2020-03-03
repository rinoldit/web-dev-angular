import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

export const AppRouteModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
