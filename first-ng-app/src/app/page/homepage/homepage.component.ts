import {Component, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuItem, Message} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserApiService} from "../../core/api/user-api.service";
import {CalenderApiService} from "../../core/api/calender-api.service";
import {FoodMenuApiService} from "../../core/api/food-menu-api.service";
import {Calender} from "../../shared/model/calender";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

  loginForm: FormGroup;
  msgs: Message[] = [];
  items: MenuItem[] = [];
  visibleSidebar = false;
  visibleViewUser = false;
  displayConcern = false;
  @Output()schedules: { date: string; title: string; color: string }[] = [];
  display = false;
  userId: string = '';

  constructor(private readonly formBuilder: FormBuilder,
              private readonly userService: UserApiService,
              private readonly _router: Router,
              private readonly userApiClient: UserApiService,
              private readonly _calenderService: CalenderApiService,
              private readonly httpClient: HttpClient,
              private readonly _foodMenuApiService: FoodMenuApiService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: '收藏菜单',
        icon:'pi pi-fw pi-file',
        command: () => {this.visibleViewUser = false;
          this.displayConcern = true;
          this.display = false;}
      },
      {
        label: 'Edit',
        icon:'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon:'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon:'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon:'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon:'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: '用户中心',
        icon:'pi pi-fw pi-user',
        command: () => {this.visibleViewUser = true;
                        this.displayConcern = false;
                        this.display = false;}
      },
      {
        label: '日程安排',
        icon:'pi pi-fw pi-calendar',
        command: () => {this.displaySchedule();
                        this.visibleViewUser = false;
                        this.displayConcern = false;}
      }
    ]
    let userName = '';
    // @ts-ignore
    userName = localStorage.getItem('USERNAME');
    this.userApiClient.getUserByName(userName).subscribe(res => {
      res.forEach(user => {
        this.userId = user.id;
        localStorage.setItem('USERID', this.userId);
      })
    })
    setTimeout(() => {
      this.getSchedules();
    }, 500)
  }

  private async getSchedules() {
    await this._calenderService.getSchedules(this.userId).subscribe(async res => {
      for (const schedule of res) {
        let name = '';
        if (schedule.signMorning === 1) {
          await this.getFoodName(schedule).then(res => name = res);
          this.schedules.push({title: '早餐:' + name, date: schedule.date.toString(), color: 'green'});
        } else if (schedule.signMorning === 0) {
          await this.getFoodName(schedule).then(res => name = res);
          this.schedules.push({title: '早餐:' + name, date: schedule.date.toString(), color: 'blue'});
        }
        name = '';
        if (schedule.signNoon === 1) {
          await this.getFoodNoonName(schedule).then(res => name = res);
            this.schedules.push({title: '午餐:' + name, date: schedule.date.toString(), color: 'green'});
        } else if (schedule.signNoon === 0) {
          await this.getFoodNoonName(schedule).then(res => name = res);
            this.schedules.push({title: '午餐:' + name, date: schedule.date.toString(), color: 'blue'});
        }
        name = '';
        if (schedule.signAfternoon === 1) {
          await this.getFoodAfternoonName(schedule).then(res => name = res);
            this.schedules.push({title: '晚餐:' + name, date: schedule.date.toString(), color: 'green'});
        } else if (schedule.signAfternoon === 0) {
          await this.getFoodAfternoonName(schedule).then(res => name = res);
            this.schedules.push({title: '晚餐:' + name, date: schedule.date.toString(), color: 'blue'});
        }
        if (schedule.signFix === 1) {
          this.schedules.push({title: '维修人员:' + schedule.fix, date: schedule.date.toString(), color: 'green'});
        } else if (schedule.signFix === 0) {
          this.schedules.push({title: '维修人员:' + schedule.fix, date: schedule.date.toString(), color: 'blue'});
        }
      }
    })
  }

  private async getFoodName(schedule: Calender): Promise<string> {
    let name = ''
    await this._foodMenuApiService.getProducts().then(data => {
      data.forEach(foodMenu => {
        if (schedule.foodMorning.toString() === foodMenu.id) {
          // @ts-ignore
          name = foodMenu.name;
        }
      })
    });
    return name;
  }

  private async getFoodNoonName(schedule: Calender): Promise<string> {
    let name = ''
    await this._foodMenuApiService.getProducts().then(data => {
      data.forEach(foodMenu => {
        if (schedule.foodNoon.toString() === foodMenu.id) {
          // @ts-ignore
          name = foodMenu.name;
        }
      })
    });
    return name;
  }

  private async getFoodAfternoonName(schedule: Calender): Promise<string> {
    let name = ''
    await this._foodMenuApiService.getProducts().then(data => {
      data.forEach(foodMenu => {
        if (schedule.foodAfternoon.toString() === foodMenu.id) {
          // @ts-ignore
          name = foodMenu.name;
        }
      })
    });
    return name;
  }

  public displaySchedule(): void {
    this.display = true;
  }
}
