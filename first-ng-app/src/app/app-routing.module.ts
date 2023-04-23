import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component"

const routes: Routes = [{
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
