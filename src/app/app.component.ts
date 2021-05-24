import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  alertMsg: string = "";

  @ViewChildren(AlertComponent) alerts:QueryList<AlertComponent>;
  @ViewChildren(AlertComponent, { read: ElementRef }) alerts1: QueryList<ElementRef>

  @ViewChildren("div") divs: QueryList<any>;

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));

    this.alerts1.forEach(alertInstance => console.log(alertInstance));

    this.divs.forEach(div => console.log(div));
  }
}
