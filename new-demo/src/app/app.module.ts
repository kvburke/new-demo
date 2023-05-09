import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { ServiceDemoService } from './services/service-demo.service'
import { ComponentDemoComponent } from './component-demo/component-demo.component'
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ComponentDemoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule 
  ],
  providers: [ServiceDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
