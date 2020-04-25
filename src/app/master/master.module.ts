import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from '../components/master/master.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ChildComponent } from '../components/child/child.component';
import { AppSpinnerComponent } from '../components/common/spinner/app-spinner/app-spinner.component';

// import angular-material modules
import { MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { UserEditComponent } from '../components/user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule
  ],
  declarations: [
    MasterComponent,
    HomeComponent,
    ProductsComponent,
    ChildComponent,
    AppSpinnerComponent,
    UserEditComponent
  ]
})
export class MasterModule { }
