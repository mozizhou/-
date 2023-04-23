import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Calender} from "../../shared/model/calender";
import {FoodUser} from "../../shared/model/food-user";

@Injectable()
export class FoodUserApiService {

  constructor(private readonly httpClient: HttpClient) {}

  concern(userId: string, menuId: number): Observable<boolean> {
    return this.httpClient.post<boolean>(`/user/concern/${userId}/${menuId}`, {});
  }

  getConcern(userId: string): Observable<FoodUser[]> {
    return this.httpClient.get<FoodUser[]>(`/user/concern/${userId}`, {});
  }

}
