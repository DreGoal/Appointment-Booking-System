import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth-guard';

const routes: Routes = [
  {
  path: 'availability',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./availability/availability')
      .then(m => m.Availability)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
