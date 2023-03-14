import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/profil/profil/profil.service';
import { WorkerService } from 'src/app/profil/profil/worker.service';
import * as pako from 'pako';

declare var performance: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: any;
  useWorker = false; // set to true or false depending on whether you want to use the web worker

  constructor(private profileService: ProfilService, private workerService: WorkerService) {}

  ngOnInit(): void {
    console.time('All Time');
    this.fetchPosts();
    console.timeEnd('All Time');
  }

  fetchPosts() {
    this.profileService.getFollowedUserPosts(2).subscribe((res: any) => {
      this.posts = res;
      this.decompressImages();
    });
  }

  decompressImages() {
    const start = performance.now();

    if (this.useWorker) {
      // Use the web worker to decompress the image data
      this.posts.forEach((post: any) => {
        const imageData = new Blob([post.image], { type: 'image/jpeg' });
        this.workerService.decompressImageData(imageData).subscribe((decompressedData: Blob) => {
          if (decompressedData) {
            post.image = URL.createObjectURL(decompressedData);
          }
        });
      });
      console.log(` using web worker to decompress images. Time taken to execute code was ${performance.now() - start} ms.`);
    } else {
      // Decompress the image data without the web worker
      this.posts.forEach((post: any) => {
        const imageData = new Blob([post.image], { type: 'image/jpeg' });
        const reader = new FileReader();
        reader.onload = () => {
          const buffer = new Uint8Array(reader.result as ArrayBuffer);
          const decompressedData = pako.inflate(buffer, { to: 'string' });
          post.image = URL.createObjectURL(new Blob([decompressedData]));
        };
        reader.readAsArrayBuffer(imageData);
      });
      console.log(`Not using web worker to decompress images. Time taken to execute code was ${performance.now() - start} ms.`);
    }

    const end = performance.now();
    console.log(`Time taken to execute code was ${end - start} ms`);
  }

  toggleWorker() {
    this.useWorker = !this.useWorker;
    this.decompressImages();
  }
}
