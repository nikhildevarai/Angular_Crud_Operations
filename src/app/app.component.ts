import { Component } from '@angular/core';
import { User } from './_models';
import { AccountService } from './_services/account.services';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlertComponent } from './_components/alert.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, RouterOutlet,RouterLink,RouterLinkActive, AlertComponent]
})
export class AppComponent {
  title = 'user-management';
  user?: User | null;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}
