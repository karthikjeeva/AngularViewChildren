import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  {
  @Input() type: string = "success";

  alert(type) {
    console.log('type of alert ' + type );
  }
}
