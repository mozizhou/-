import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Calender} from "../../shared/model/calender";
import {Data} from "@angular/router";
import {da, e} from "@fullcalendar/core/internal-common";

@Injectable()
export class CalenderApiService {

  constructor(private readonly httpClient: HttpClient) {}

  getEvents(): any {
    return this.httpClient.get('showcase/resources/data/calendarevents.json')
      .toPromise()
      .then(data => { return data; });
  }

  getSchedules(id: string): Observable<Calender[]> {
    return this.httpClient.get<Calender[]>(`/user/schedule/${id}`);
  }

  signIn(date: string, userId: any): Observable<any> {
    return this.httpClient.post(`/user/sign`, [date, userId]);
  }

  addToCalender(userId: string, id: string, data: Date, timeName: string): Observable<number> {
    let month;
    if (data.getMonth() + 1<10) {
      month = '0' + (data.getMonth() + 1);
    } else {
      month = data.getMonth() + 1;
    }
    let day;
    if (data.getDate() < 10) {
      day = '0' + data.getDate();
    } else {
      day = data.getDate();
    }
    let date = data.getFullYear() + '-' + month + '-' + day;
    return this.httpClient.post<number>(`/user/addCalender`, {userId: userId, menuId: id, date: date, timeName: timeName});
  }
}
