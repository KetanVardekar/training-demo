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
import { authGuard } from './guard/auth.guard';
import { auth1Guard } from './guard/auth1.guard';
import { childAuthGuardGuard } from './guard/child-auth-guard.guard';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent,canActivate: [authGuard]},
    {
        path: 'about', component: AboutComponent,canActivateChild: [childAuthGuardGuard],

        children: [
            { path: 'team', component: TeamComponent },
            { path: 'company', component: CompanyComponent }
        ]
    },
    { path: 'parent', component: ParentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'sites', component: SiteComponent },
    { path: 'elementRef', component: ElementRefComponent },
    { path: 'template', component: TemplateOutletComponent },
    { path: 'parent1', component: Parent1Component },
    { path: 'parent2', component: Parent2Component },
    { path: 'example', component: ExampleComponent },
    { path: 'example2', component: Example2Component },
    { path: 'example3', component: Example3Component },
    { path: 'users/:id', component: UsersComponent },
    {
        path:'admin',
        loadChildren:()=>import('./admin/admin.module').then(m =>m.AdminModule)
    },
    {
        path:'add-user',
        loadComponent:()=>import('./admin/add-user/add-user.component').then(c => c.AddUserComponent)
    },
    {
        path:'dashboard',
        loadChildren:()=>import('./dashboard-1/dashboard-1.module').then(m => m.Dashboard1Module)
    },
    {
        path:'overview',
        loadChildren:()=>import('./overview/overview.module').then(m =>m.OverviewModule)
    },
    
];
