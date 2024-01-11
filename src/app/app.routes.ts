import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'header', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    // { path: '**', redirectTo:  }
];
