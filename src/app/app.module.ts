import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main/main.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { StoriesHeaderComponent } from './main/stories-header/stories-header.component';
import { PostComponent } from './shared/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProfilComponent,
    AvatarComponent,
    
    StoriesHeaderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
