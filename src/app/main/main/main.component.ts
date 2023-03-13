import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/profil/profil/profil.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts:any;
  constructor(private profileService: ProfilService) { }

  ngOnInit(): void {
    this.profileService.getFollowedUserPosts(5).subscribe(
      res => {
        this.posts=res;
        console.log(this.posts);
        
      }
    );
  }

}
