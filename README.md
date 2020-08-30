# Capstone_project


I choose an e-commerce site for my project because I always wanted to have my online business. I added about, home , products and my cart pages. I added 6 products. Added images of smart phones cases. 

I included two featrues one for products and the other for the vendors.


created the new components by typing  this command to generate it using Angular
ng g c Home 
ng g c About 
ng g c Contact 
ng g c Products 

Added  routing for those components by open and edit `src/app/app-routing.module.ts` then add those components imports.

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

Added  the constant variable of routes array of component routes.

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

Wrapped Components routes  inside app.component.html by the line <router-outlet></router-outlet>. 

Dynamic views changes inside the router-outlet tag. So, we can use the rest of app.component.
html view for the navigation header. 

<routeroutlet></routeroutlet>


I used Angular Material Design to style for my nav bar UI,add Angular Material 10 to my E-commerce site.
 ng add @angular/material
choose Deep Purple/Amber.

We import the following Material components modules for building the  navigation UI:

MatToolbarModule which provides <mat-toolbar> and <mat-toolbar-row> components.
MatSidenavModule
MatListModule
MatButtonModule which provides mat-button and mat-icon-button.
MatIconModule which provides <mat-icon>.

I had an error when I installed Angular Material. I checked Angular resourses and i had to uninstall angular material and install angular material 7.10.0

