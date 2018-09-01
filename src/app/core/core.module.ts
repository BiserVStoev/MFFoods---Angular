import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EFFECTS} from './effects';
import { reducers } from './state/app.state';

import { RecipeService } from './services';
import { RecipeStoreService } from './services/recipe-store.service';
import { UserStoreService } from './services/user-store.service';
import { AdminService } from './services/admin.service';
import { AdminStoreService } from './services/admin-store.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'MF Foods'
    })
  ],
  declarations: [],
  providers: [
    RecipeService,
    RecipeStoreService,
    UserStoreService,
    AdminService,
    AdminStoreService
  ]
})
export class CoreModule { }
