import {Component} from "@angular/core";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '慕课网Angular入门实战';

  constructor() {
    console.log("微信号是"+environment.weixinNumber);
  }
}
