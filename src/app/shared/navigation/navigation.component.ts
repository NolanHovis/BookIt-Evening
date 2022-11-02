import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed = true;
  show = false;
  isAuthenticated = false;

  constructor(private httpService: HttpService, private authSerivce: AuthService) { }

  ngOnInit(): void {
    this.authSerivce.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  onSaveData() {
    this.httpService.saveDataToFirebase();
  }

  onFetchData() {
    this.httpService.fetchDataFromFirebase().subscribe();
  }

  onSignOut() {
    this.authSerivce.signOut();
  }

  ngOnDestroy(): void {
    this.authSerivce.currentUser.unsubscribe();
  }

}
