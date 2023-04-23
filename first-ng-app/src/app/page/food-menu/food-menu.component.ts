import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {FoodMenuApiService} from "../../core/api/food-menu-api.service";
import {FoodMenu} from "../../shared/model/food-menu";
import {FoodUserApiService} from "../../core/api/food-user-api.service";

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foodMenu: FoodMenu[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  constructor(private _foodMenuApiService: FoodMenuApiService,
              private _foodUserApiService: FoodUserApiService) { }

  ngOnInit() {
    this._foodMenuApiService.getProducts().then(data => this.foodMenu = data);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  concern(id: number): void {
    // @ts-ignore
    this._foodUserApiService.concern(localStorage.getItem('USERID'), id).subscribe();
  }
}
