import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-token',
  templateUrl: './admin-token.component.html',
  styleUrls: ['./admin-token.component.css']
})
export class AdminTokenComponent implements OnInit {
  public masterTokenForm: FormGroup;

  constructor(private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.masterTokenForm = new FormGroup({ 'masterSecret': new FormControl('') });
  }

  saveMasterToken(): void{
    localStorage.setItem('masterSecret', this.masterSecret.value);
    this.toastrService.success('Master secret entered successfuly!', 'Success')
    this.router.navigate(['/admin']);
  }

  get masterSecret(): AbstractControl {
    return this.masterTokenForm.get('masterSecret');
  }

}
