import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/profil/profil/profil.service';

@Component({
  selector: 'app-stories-header',
  templateUrl: './stories-header.component.html',
  styleUrls: ['./stories-header.component.css']
})
export class StoriesHeaderComponent implements OnInit {
  profilePictures: string[] = [];
  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    /*this.profilService.getFollowedProfilePictures().subscribe(profilePictures => {
      this.profilePictures = profilePictures;
    });*/
  }

}
