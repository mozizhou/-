import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FullCalendarComponent} from "@fullcalendar/angular";
import {CalenderApiService} from "../../../core/api/calender-api.service";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  date = new Date();
  d = this.date.getDate();
  m = this.date.getMonth();
  y = this.date.getFullYear();
  task = [
    {
      title: "全天计划\r\n#####\r\n写代码",
      start: new Date(this.y, this.m, 1)
    },
    {
      title: "张家界四日游",
      start: new Date(this.y, this.m, this.d - 5),
      end: new Date(this.y, this.m, this.d - 2)
    },
    {
      id: 999,
      title: "电话回访客户",
      start: new Date(this.y, this.m, this.d - 6, 16, 0),
      allDay: false
    },
    {
      id: 999,
      title: "电话回访客户",
      start: new Date(this.y, this.m, this.d + 4, 16, 0),
      allDay: false
    },
    {
      title: "视频会议",
      start: new Date(this.y, this.m, this.d, 10, 30),
      allDay: false
    },
    {
      title: "中秋放假",
      start: "2013-09-19",
      end: "2013-09-21"
    },
    {
      title: "午饭",
      start: new Date(this.y, this.m, this.d, 12, 0),
      end: new Date(this.y, this.m, this.d, 14, 0),
      allDay: false
    }
  ];

  events: any[] = [];

  calendarOptions: any;

  userId = '';

  @Input()schedules: { date: string; title: string }[] = [];

  // @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(private readonly _calenderApiService: CalenderApiService) {}

  ngOnInit() {
    this.getCalendarOptions();
  }

  public getCalendarOptions() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
      initialDate: new Date(Date.parse(new Date().toString())),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: this.schedules,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
    };
  }

  handleDateClick(arg: { dateStr: string; }) {
    this._calenderApiService.signIn(arg.dateStr, localStorage.getItem('USERID')).subscribe(res => {
        alert('用户：' + localStorage.getItem('USERID') + " 签到成功")
      },
      error => {
        alert('签到失败或已经签到成功')
      })
  }

  // someMethod() {
  //   let calendarApi = this.calendarComponent.getApi();
  //   calendarApi.next();
  // }
}
