import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: '', component: NavbarComponent },
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: "" , component: LoginComponent},
  {path: "regiter" , component: RegisterComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
