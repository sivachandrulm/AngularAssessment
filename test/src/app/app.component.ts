import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  black='green';
  item = ['Gina Williams','Jake Williams','Jamie John','John Doe','Jeff Stewart','Paula M.Keith'];
  onMentionSelect(selection:any): string {

    return selection.label;

  }
}
