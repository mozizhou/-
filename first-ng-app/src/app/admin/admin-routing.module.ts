import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {EditUserComponent} from "../page/homepage/edit-user/edit-user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ViewUserComponent} from "./view-user/view-user.component";
import {UpdataUserComponent} from "./updata-user/updata-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";

const routes: Routes = [
  {
    path: 'user/:id',
    component: EditUserComponent
  },
  {
    path: 'user/:id/view',
    component: ViewUserComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/updata/:id',
    component: UpdataUserComponent
  },
  {
    path: 'users/search/:name',
    component: SearchUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
