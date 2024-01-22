import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';



export const routes: Routes = [
    { path: '', component: HomeComponent ,title: "Home"},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'product-details/:id',component: ProductDetailsComponent},
    { path: 'cart',component: CartComponent},
    { path: 'not-found', component: NotfoundComponent},
    { path: '**', redirectTo: '/not-found' }
];
