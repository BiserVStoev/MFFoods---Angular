import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeAllComponent } from './recipe/recipe-all/recipe-all.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { AdminRecipesComponent } from './admin/admin-recipes/admin-recipes.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGuard } from './admin/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recipe/create', component: RecipeCreateComponent, canActivate: [AuthGuard] },
  { path: 'recipe/all', component: RecipeAllComponent, canActivate: [AuthGuard] },
  { path: 'recipe/:id', component: RecipeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard,AdminGuard], children: [
      { path: '', component: AdminHomeComponent },
      { path: 'token', component: AdminTokenComponent },
      { path: 'recipes', component: AdminRecipesComponent }, 
      { path: 'users', component: AdminUsersComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }