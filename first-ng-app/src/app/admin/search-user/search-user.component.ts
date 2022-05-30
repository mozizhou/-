import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {User} from "../../shared/model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserApiService} from "../../core/api/user-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [ConfirmationService]
})
export class SearchUserComponent implements OnInit {

  msgs: Message[] = [{summary: "users", severity: "info"}]
  users: User[] = [];
  searchForm: FormGroup;


  constructor(private readonly _userApiService: UserApiService,
              private readonly _router: Router,
              private readonly _confirmationService: ConfirmationService,
              private readonly formBuilder: FormBuilder) {


    this.searchForm = this.formBuilder.group(
      {
        name: ['', Validators.required]
      }
    )


  }
  get s(){
    return this.searchForm.controls;
  }

  ngOnInit(): void {
    const url = window.location.href;
    const name = url.split('users/search/')[1];
    this._userApiService.getUserByName(name).subscribe((users) => {
      this.users = users;
    })
  }
  onSearch(name: string){
    this._router.navigateByUrl('', {skipLocationChange:true}).then(() => {
      this._router.navigate(['/admin/users/search', name])
    });
  }
  viewUser(id: number) {
    this._router.navigate(['/admin/user', id])
  }

  deleteUser(id: number, event: any) {
    this._confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete user?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this._userApiService.delete(id).subscribe({
          next: () => {
            // reload user list
            this.ngOnInit();
          },
          error: (message) => {
            alert(JSON.stringify(message));
          }
        })
      },
      reject: () => {
        //reject action
        console.log("master branch")
      }
    });
  }

}
