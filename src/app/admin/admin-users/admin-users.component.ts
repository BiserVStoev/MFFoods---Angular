import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AdminStoreService } from '../../core/services/admin-store.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  public users$: Observable<UserModel[]>;
  public pageSize = 10;
  public currentPage = 1;
  private subscriptions: Subscription[] = [];

  constructor(private adminStoreService: AdminStoreService) { }

  ngOnInit() {
    this.subscriptions.push(this.adminStoreService.getAreUsersLoaded().subscribe(areLoaded => {
      if (areLoaded) {
        this.users$ = this.adminStoreService.getUsers();
      } else {
        this.adminStoreService.loadUsers();
      }
    }));
  }

  public lockUser(user: UserModel){
    this.adminStoreService.lockUser(user);
  }

  public unlockUser(user: UserModel){
    this.adminStoreService.unlockUser(user);
  }

  public pageChanged(newPage: number): void{
    this.currentPage = newPage;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
