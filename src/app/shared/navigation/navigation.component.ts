import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  collapsed = true;
  show = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.httpService.saveDataToFirebase();
  }

  onFetchData() {
    this.httpService.fetchDataFromFirebase().subscribe();
  }
}
