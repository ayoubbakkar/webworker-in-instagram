import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-no-worker',
  templateUrl: './post-no-worker.component.html',
  styleUrls: ['./post-no-worker.component.css']
})
export class PostNoWorkerComponent implements OnInit {
  @Input() post: any;
  constructor() { }

  ngOnInit(): void {
    console.log('post no worker',this.post);
  }

}
