import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../services/service-demo.service'
@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  id: String;
  testString: String;

  constructor(private demoService: ServiceDemoService) {
  
   }

   ngOnInit() {
    this.demoService.postData('123').subscribe(data => {
      this.id = data.id;
      this.testString = data.testString
    });
  }

  click = () => {
    console.log("Click");
    this.demoService.postData('456').subscribe(data => {
      debugger;
      this.id = data.id;
      this.testString = data.testString
    });
  }

 
}
