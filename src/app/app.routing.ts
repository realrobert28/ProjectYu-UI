import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '@core/_layout/default/default.component';
import { AuthGuard, RoleGuard} from './core/_guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'login',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'app',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [RoleGuard],
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: 'Dashboard',
          allowedRoles: ['super_admin', 'admin', 'reseller', 'user'],
        }
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy'
});
