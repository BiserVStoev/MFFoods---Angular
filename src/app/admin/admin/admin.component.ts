import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStoreService } from '../../core/services/user-store.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(private userStoreService: UserStoreService) { }

  ngOnInit() {
    localStorage.removeItem('masterSecret');
    this.userStoreService.changeUserContext(true);
  }

  ngOnDestroy() {
    localStorage.removeItem('masterSecret');
    this.userStoreService.changeUserContext(false);
  }
}
