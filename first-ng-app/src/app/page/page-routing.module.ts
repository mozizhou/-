import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./homepage/homepage.component";
import {StickComponent} from "./stick/stick.component";
import {StickDetailComponent} from "./stick/stick-detail/stick-detail.component";
import {EditUserComponent} from "./homepage/edit-user/edit-user.component";
import {FoodMenuComponent} from "./food-menu/food-menu.component";

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  }, {
    path: 'stick',
    component: StickComponent
  }, {
    path: 'stick/detail/:id',
    component: StickDetailComponent
  }, {
    path: 'homepage/user/view',
    component: EditUserComponent
  }, {
    path: 'food/menu',
    component: FoodMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
