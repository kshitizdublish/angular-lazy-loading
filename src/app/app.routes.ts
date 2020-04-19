import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CustomPreloadingStrategy } from './shared/preloading-modules/preloading-strategy';

export const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,
      { preloadingStrategy: CustomPreloadingStrategy }
  )],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutes { }
