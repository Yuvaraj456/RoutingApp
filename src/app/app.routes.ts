import { PreloadAllModules, provideRouter, Routes } from '@angular/router';
import { FirstComponent } from './Component/first/first.component';
import { SecondComponent } from './Component/second/second.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { FirstChildComponent } from './Component/first-child/first-child.component';
import { ThirdComponent } from './Component/third/third.component';
import { testGuard } from './guards/test.guard';
import { canLeaveGuard } from './guards/can-leave.guard';


export const routes: Routes = [
    {path:"", pathMatch:'full', redirectTo:'first'}, 
    {path:'first',component:FirstComponent, children:[
        {path:'child',component:FirstChildComponent},
        {path:'child/:empId',component:FirstComponent}

    ]},
    {path:'second',component:SecondComponent},
    {path:'third',component:ThirdComponent, canActivate:[testGuard], canDeactivate:[canLeaveGuard]},
    {path:'user',loadComponent:()=>import('./User/Component/user/user.component').then(x=>x.UserComponent)},
    {path:'admin',loadComponent:()=>import('./Admin/Component/admin/admin.component').then(x=>x.AdminComponent)},
    // {path:'user',component:UserComponent},
    // {path:'admin',component:AdminComponent},
    {path:"**",component:ErrorPageComponent}
];

