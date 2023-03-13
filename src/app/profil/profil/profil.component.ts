import { Component, OnInit } from '@angular/core';
import { ProfilService } from './profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  username: string | undefined;
  followers: number[]=[];
  imageSrc="assets/arso.jpeg";
  posts$: any;
  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    
    this.profilService.getUser(5).subscribe(res => {
        this.username=res.username;  
        this.imageSrc = res.profile_picture;
    })
    
    
  }

}
