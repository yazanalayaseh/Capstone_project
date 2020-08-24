import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './about/about.component';
import {ContactComponent } from './contact/contact.component';
import {HomeComponent } from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'products', component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
