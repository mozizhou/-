import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Post} from "../../shared/model/post";
import {PostApiService} from "../../core/api/post-api.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.css']
})
export class StickComponent implements OnInit {
  displayModal!: boolean;

  displayBasic!: boolean;

  displayBasic2!: boolean;

  displayMaximizable!: boolean;

  displayPosition!: boolean;

  position!: string;
  title = 'untitled2905';
  timer: any;
  imgList = [
    {
      icon: 'https://cp1.douguo.com/upload/caiku/1/5/4/690x390_153f81559df4204d33293dac0c1f27d4.jpeg',
      text: '主食1',
    },
    {
      icon: 'https://img.zcool.cn/community/0135a85e216cfda80120a89530a4d1.jpg@1280w_1l_2o_100sh.jpg',
      text: '主食2',
    }, {
      icon: 'https://img.zcool.cn/community/0114ec5e216cfaa80121651800d86b.jpg@1280w_1l_2o_100sh.jpg',
      text: '零食1',
    }
  ]; // 图片数组

  loginUser: any;

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.update();
        }
      },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.delete();
          }
        }
      ]},
    {
      label: 'Navigate',
      items: [{
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
        }
      ]}
  ];

  formDisabled: boolean = true;
  post: FormGroup;
  submitted = false;

  postList: Post[] = [];
  img = ''; // 图片路径
  text = ''; // 图片路径
  id = 0; // 默认id 从零开始

  constructor(private messageService: MessageService,
              private readonly _router: Router,
              private _postService: PostApiService,
              private formBuilder: FormBuilder) {
    this.post = this.formBuilder.group(
      {
        userId: [''],
        title: [''],
        content: [''],
        type: [''],
        createTime: [''],
        commentCount: ['']
      },
      {disable: this.formDisabled}
    );
  }

  get f() {
    return this.post.controls;
  }

  ngOnInit() {
    this.loginUser = localStorage.getItem("USER");
    this.initData();
    this.gif();
  }

  initData() {
    this._postService.getAllPost().subscribe(res => {
      this.postList = res;
    })
  }

  gif() {
    // 页面显示 加载默认图片
    this.img = this.imgList[this.id].icon;
    // 设置一个定时器，达到动画切换效果
    this.timer = setInterval(() => {
      // 如果当前图片是最后一张就把id清零 从第一张开始
      if (this.id === this.imgList.length - 1) {
        this.id = 0;
        this.img = this.imgList[this.id].icon;
        this.text = this.imgList[this.id].text;
      } else {
        // 如果当前不是最后一张 就切换下一张
        this.id += 1;
        this.img = this.imgList[this.id].icon;
        this.text = this.imgList[this.id].text;
      }
    }, 1500)
  }

  getData(url:string){
    console.log(url);
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  viewDetail(postId?: number) {
    this._router.navigate(['stick/detail', postId])
  }

  addPost() {
    this.post.value.userId=localStorage.getItem('USERID');
    this._postService.addPost(this.post.value).subscribe();
    this.displayModal = false;
    alert("已编辑")
    this._router.navigate(['/homepage'])
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

}
