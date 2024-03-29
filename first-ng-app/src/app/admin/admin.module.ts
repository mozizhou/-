import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {EditUserComponent} from '../page/homepage/edit-user/edit-user.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {UserListComponent} from './user-list/user-list.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from "primeng/table";
import {ViewUserComponent} from './view-user/view-user.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {UpdataUserComponent} from "./updata-user/updata-user.component";
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AdminComponent,
    EditUserComponent,
    UserListComponent,
    ViewUserComponent,
    UpdataUserComponent,
    SearchUserComponent,
  ],
  exports: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ConfirmPopupModule,
    FormsModule
  ]
})
export class AdminModule {
}
