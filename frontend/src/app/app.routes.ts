import { Routes } from '@angular/router';

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
},
{
  path: 'slot-availability',
  loadComponent: () =>
    import('./feature/slot-availability/slot-availability')
      .then(m => m.SlotAvailabilityComponent)
}


//   {
//     path: 'dashboard',
//     canActivate: [authGuard],
//     loadComponent: () =>
//       import('./dashboard/dashboard').then(m => m.Dashboard)
//   }
];
