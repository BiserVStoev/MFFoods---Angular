import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminTokenComponent } from './admin-token/admin-token.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AdminComponent, AdminTokenComponent, AdminUsersComponent, AdminRecipesComponent, AdminHomeComponent]
})
export class AdminModule { }
