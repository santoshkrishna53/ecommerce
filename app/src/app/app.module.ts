import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';


// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {UserService} from './user.service';
import { HeaderComponent } from './header/header.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const appRoutes: Routes = [
  { path: 'userauth', component: RegisterComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'cart',      component: CartComponent },
  { path: 'dashboard',      component: UserDashboardComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ProductsComponent,
    CartComponent,
    UserDashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SidebarModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
    
    

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
