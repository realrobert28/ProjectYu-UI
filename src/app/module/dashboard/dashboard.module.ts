import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './pages/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
  ]
})
export class DashboardModule { }
