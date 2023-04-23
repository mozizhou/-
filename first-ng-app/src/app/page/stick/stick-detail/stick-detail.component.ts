import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostApiService} from "../../../core/api/post-api.service";
import {Post} from "../../../shared/model/post";
import {MenuItem, MessageService} from "primeng/api";
import {Comment} from "../../../shared/model/comment";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommentApiService} from "../../../core/api/comment-api.service";

@Component({
  selector: 'app-stick-detail',
  templateUrl: './stick-detail.component.html',
  styleUrls: ['./stick-detail.component.css']
})
export class StickDetailComponent implements OnInit {

  postId: string = window.location.href.split('stick/detail/')[1];
  post!: Post;
  addCommentDisplay = false;
  public msg: string =this.postId;
  commentForm: FormGroup;
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
  commentList: Comment[] = [];

  constructor( private readonly _router: Router,
               private _postService: PostApiService,
               private messageService: MessageService,
               private readonly formBuilder: FormBuilder,
               private readonly _commentService: CommentApiService) {
    this.commentForm = this.formBuilder.group(
      {
        userId: [''],
        postId: [''],
        content: [''],
        commentTime: [''],
      },
    );
  }


  get f() {
    return this.commentForm.controls;
  }

  ngOnInit(): void {
    this.loginUser = localStorage.getItem("USER");
    this.post = new Post();
    this._postService.getPost(this.postId).subscribe(
      res => {
        this.post = res;
      }
    )
    this.initData();
  }

  initData() {
    this._postService.getCommentByPostId(this.msg).subscribe(res => {
      console.log(res);
      this.commentList = res;
    })
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }


  addComment() {
    this.commentForm.value.postId = this.msg;
    this.commentForm.value.userId = localStorage.getItem('USERID');
    console.log(this.commentForm.value)
    this._commentService.addComment(this.commentForm.value).subscribe();
    alert("申请成功，感谢支持")
    this._router.navigate(['/homepage'])
  }

  display() {
    this.addCommentDisplay = true;
  }

}
