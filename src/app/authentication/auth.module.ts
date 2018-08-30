import { NgModule } from '@angular/core';

import { authComponents } from './index';
import { AuthService } from '../core/services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
