import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';
import { UserStoreService } from '../core/services/user-store.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isInAdminContext$: Observable<boolean>;
  dropdownLi : string = "nav-item dropdown";
  dropdownMenu : string = "dropdown-menu";

  constructor(
    public authService : AuthService,
    private router : Router,
    private userStoreService: UserStoreService
  ) {  }

  ngOnInit() {
    this.isInAdminContext$ = this.userStoreService.getIsInAdminContext();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  expand() {
    this.dropdownLi.endsWith('show') 
    ? this.dropdownLi = "nav-item dropdown" 
    : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
    ? this.dropdownMenu = "dropdown-menu"
    : this.dropdownMenu = "dropdown-menu show";
  }
}
