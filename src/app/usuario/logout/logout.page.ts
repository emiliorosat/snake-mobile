import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  providers: [StorageService]
})
export class LogoutPage implements OnInit {

  constructor(
    private storage: StorageService,
    private route: Router
  ) { }

  ngOnInit() {
    this.storage.clearAll()
    this.route.navigate([''])
  }

}
