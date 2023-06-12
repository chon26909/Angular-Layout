import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AUTH_ROUTES } from './routes/auth-layout-routes';

const routes: Routes = [
  {
    path: 'auth', component: DefaultLayoutComponent, children: AUTH_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
