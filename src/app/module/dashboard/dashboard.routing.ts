
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v1',
    pathMatch: 'full'
  },
  {
    path: 'v1',
    component: DashboardComponent,
    data: {
      breadcrumb: 'v1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
