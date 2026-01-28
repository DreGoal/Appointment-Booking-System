import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module')
        .then(m => m.AuthModule)
  },
  {
  path: 'provider',
  loadChildren: () =>
    import('./provider/provider-routing-module')
      .then(m => m.ProviderRoutingModule)
}

//   {
//     path: 'dashboard',
//     canActivate: [authGuard],
//     loadComponent: () =>
//       import('./dashboard/dashboard').then(m => m.Dashboard)
//   }
];
