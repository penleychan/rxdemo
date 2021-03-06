import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { NgxsModule } from '@ngxs/store';
import { CustomerListState } from './ngxs/CustomerListState';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomersHubService } from './customers/customers-hub.service';
import { CustomerEditState } from './ngxs/CustomerEditState';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CustomersComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
      { path: 'customer/edit/:id', component: EditCustomerComponent }
    ]),
    NgxsModule.forRoot([
      CustomerListState,
      CustomerEditState
    ])
  ],
  providers: [CustomersHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
