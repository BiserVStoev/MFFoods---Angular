import { Injectable } from "@angular/core";
import * as fromRoot from '../state';
import { Store } from "@ngrx/store";
import * as UserActions from "../actions/user.actions";
import * as userSelectors from '../selectors/user.selectors'
import { Observable } from "rxjs";

@Injectable()
export class UserStoreService {
    constructor(private store: Store<fromRoot.AppState>) { }
    
    public changeUserContext(isInAdminContext: boolean): void {
        this.store.dispatch(new UserActions.ChangeUserContextAction(isInAdminContext));
    }

    public getIsInAdminContext(): Observable<boolean>{
        return this.store.select(userSelectors.isInAdminContext);
    }
}
