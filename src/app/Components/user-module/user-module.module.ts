import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';

const routes: Routes =[
  {path:'', redirectTo: '/User/UserProfile', pathMatch:'full'},
  {path:'UserProfile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'EditProfile', component:EditUserProfileComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }

