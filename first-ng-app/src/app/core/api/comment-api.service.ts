import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from "../../shared/model/post";

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  constructor(private readonly httpClient: HttpClient) {
  }
  addComment(comment: Comment): Observable<null>{
    return this.httpClient.post<null>(`/user/add-comment`, comment);
  }

  getCommentByPostId(postId: string): Observable<any>{
    return this.httpClient.get(`/user/dashboard/comment/${postId}`);
  }
}
