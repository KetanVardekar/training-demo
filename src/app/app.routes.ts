import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { TeamComponent } from './about/team/team.component';
import { CompanyComponent } from './about/company/company.component';

import { SiteComponent } from './site/site.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'about', component: AboutComponent,

        children: [
            { path: 'team', component: TeamComponent },
            { path: 'company', component: CompanyComponent }
        ]
    },
    { path: 'parent', component: ParentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'sites', component: SiteComponent },
    { path: 'users/:id', component: UsersComponent },
    {
        path:'pipes',component:PipesComponent
    }
];
