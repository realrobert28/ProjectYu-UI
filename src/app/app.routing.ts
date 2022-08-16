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
      },
      {
        path: 'users',
        canActivate: [RoleGuard],
        loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule),
        data: {
          breadcrumb: 'Users',
          allowedRoles: ['super_admin', 'admin'],
        }
      },
      {
        path: 'products',
        canActivate: [RoleGuard],
        loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule),
        data: {
          breadcrumb: 'Products',
          allowedRoles: ['super_admin', 'admin'],
        }
      },
      {
        path: 'packages',
        canActivate: [RoleGuard],
        loadChildren: () => import('./module/packages/packages.module').then(m => m.PackagesModule),
        data: {
          breadcrumb: 'Packages',
          allowedRoles: ['super_admin', 'admin'],
        }
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy'
});
