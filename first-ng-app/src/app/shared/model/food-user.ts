import {Data} from "@angular/router";

export interface FoodUser {
  id:string;
  userId:string;
  menuId:string;
  updateTime?:Data;
}
