import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeModule } from '@theme/theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    ThemeModule,
    PerfectScrollbarModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class LayoutModule { }
