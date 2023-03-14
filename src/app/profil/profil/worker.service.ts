import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private worker: Worker;
  private imageDataSubject = new Subject<Blob>();

  constructor() {
    this.worker = new Worker('./image.decompression.worker', { type: 'module' });
    this.worker.addEventListener('message', event => {
      this.imageDataSubject.next(event.data);
    });
  }

  decompressImageData(imageData: Blob): Observable<Blob> {
    this.worker.postMessage(imageData);
    return this.imageDataSubject.asObservable();
  }

}
