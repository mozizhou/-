import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {AppRoutingModule} from "./app-routing.module";
import {AuthComponent} from "./auth/auth.component";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PageComponent } from './page/page.component';
import {PageRoutingModule} from "./page/page-routing.module";
import {PageModule} from "./page/page.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PageComponent,
  ],
  imports: [
    PageModule,
    BrowserModule,
    RouterModule,
    MenubarModule,
    AppRoutingModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    PageRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
