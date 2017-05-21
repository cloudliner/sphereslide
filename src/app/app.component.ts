import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit(): void {
    // var img1 = new ThView({id:'sphere_sample', file:'assets/images/R0011035.JPG'});
    var currentTag = document.currentScript;
    var scriptTag = document.createElement('script');
    var textNode = document.createTextNode("var img1 = new ThView({id:'sphere_sample', file:'assets/images/R0011035.JPG'});");
    scriptTag.appendChild(textNode);
    currentTag.parentNode.insertBefore(scriptTag, currentTag);
  }
}
