import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { BodyComponent } from './body/body.component';
import { UserService } from './user.service';
import { AssetsService } from './assets.service'; 
import { AuthguardGuard } from './authguard.guard';
import { DropdownDirective } from './dropdown.directive';
import { TotalassetsComponent } from './totalassets/totalassets.component';
import { AvailableComponent } from './available/available.component';
import { AssignedComponent } from './assigned/assigned.component';
import { DamagedComponent } from './damaged/damaged.component';
import { DetailsComponent } from './details/details.component';
import { AssetsComponent } from './assets/assets.component';
import { VendorsandassetsComponent } from './vendorsandassets/vendorsandassets.component';
import { UnderrepairComponent } from './underrepair/underrepair.component';
import { PurchasedetailsComponent } from './purchasedetails/purchasedetails.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { AddassetsComponent } from './addassets/addassets.component';
import { DeleteassetsComponent } from './deleteassets/deleteassets.component';
import { AssignassetsComponent } from './assignassets/assignassets.component';
import { AddtorepairComponent } from './addtorepair/addtorepair.component';


const appRoutes:Routes= [
{
  path:'',
  component: LoginformComponent
},
{
  path: 'dashboard',
  //canActivate: [AuthguardGuard],
  component: DashboardComponent
},
{
  path: 'taskbar',
  component: DropdownDirective
},
{
 path: 'addassets',
 component: AddassetsComponent
},
{
  path: 'deleteassets',
  component:DeleteassetsComponent
},
{
  path: 'totalassets',
  component:TotalassetsComponent
},
{
  path:'addtorepair',
  component:AddtorepairComponent
},
{
  path:'assignassets',
  component:AssignassetsComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    TaskbarComponent,
    BodyComponent,
    DropdownDirective,
    TotalassetsComponent,
    AvailableComponent,
    AssignedComponent,
    DamagedComponent,
    DetailsComponent,
    AssetsComponent,
    VendorsandassetsComponent,
    UnderrepairComponent,
    PurchasedetailsComponent,
    ManageAssetsComponent,
    AddassetsComponent,
    DeleteassetsComponent,
    AssignassetsComponent,
    AddtorepairComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    CommonModule,
    
  ],
  providers: [UserService, AuthguardGuard, AssetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
