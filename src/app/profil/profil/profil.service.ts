import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/operators';
import { Post } from 'src/models/post';
import {User} from 'src/models/user'

interface PostsResponse {
  posts: Post[];
}

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient, ) { }
  getUser(id: number): Observable<any>{
      return this.http.get('http://localhost:3000/users/'+id);
  } 
  getFollowedUserPosts(id: number): Observable<any> {
    return this.http.get<User>('http://localhost:3000/users/'+id).pipe(
      switchMap((user: User) =>
        this.http
          .get<PostsResponse>('http://localhost:3000/posts?userId=' + user.followers.join('&userId='))
          
      )
    );
  }
  getUserPicture(id: number): Observable<any>{
    return this.http.get('http://localhost:3000/users/'+id);
} 
    
  
}
