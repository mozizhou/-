import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserApiService} from "./core/api/user-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ng-app';
  menuItems: MenuItem[] = [
    {
      label:'主页',
      icon:'pi pi-fw pi-home',
      routerLink: 'homepage',
    },
    {
      label:'贴吧',
      icon:'pi pi-fw pi-whatsapp',
      routerLink: 'stick',
    }, {
      label:'饮食健康',
      icon:'pi pi-fw pi-box',
    },{
      label:'精选菜谱',
      icon:'pi pi-fw pi-user',
      routerLink: 'food/menu',
    },
    {
      label:'注銷',
      icon:'pi pi-fw pi-power-off',
      command: () => {
        localStorage.removeItem('USER');
        alert("Logout Sucessful");
        this._router.navigate(['/auth'])
      }
    }
  ];

  constructor(private readonly _userApiService: UserApiService,
              private readonly _router: Router) {
  }

}
