import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {PageRoutingModule} from "./page-routing.module";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomepageComponent } from './homepage/homepage.component';
import { StickComponent } from './stick/stick.component';
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {ConfirmationService, MessageService} from "primeng/api";
import { StickDetailComponent } from './stick/stick-detail/stick-detail.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {SidebarModule} from "primeng/sidebar";
import {PanelMenuModule} from "primeng/panelmenu";
import {AdminModule} from "../admin/admin.module";
import { CalenderComponent } from './homepage/calender/calender.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {CalenderApiService} from "../core/api/calender-api.service";
import { FoodProjectComponent } from './food-project/food-project.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {FoodMenuApiService} from "../core/api/food-menu-api.service";
import {FoodUserApiService} from "../core/api/food-user-api.service";
import { ConcernComponent } from './homepage/concern/concern.component';
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";

@NgModule({
  declarations: [
    HomepageComponent,
    StickComponent,
    StickDetailComponent,
    CalenderComponent,
    FoodProjectComponent,
    FoodMenuComponent,
    ConcernComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        MenubarModule,
        PageRoutingModule,
        CardModule,
        MessageModule,
        MessagesModule,
        ReactiveFormsModule,
        HttpClientModule,
        ButtonModule,
        InputTextModule,
        BrowserAnimationsModule,
        FieldsetModule,
        PanelModule,
        MenuModule,
        ScrollPanelModule,
        SidebarModule,
        PanelMenuModule,
        AdminModule,
        FullCalendarModule,
        DataViewModule,
        DropdownModule,
        RatingModule,
        FormsModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        FileUploadModule,
        DialogModule,
        ConfirmDialogModule,
        InputNumberModule,
        RadioButtonModule,
        CalendarModule,
    ],
  providers: [MessageService, CalenderApiService, FoodMenuApiService, FoodUserApiService, ConfirmationService],
})
export class PageModule {
}
