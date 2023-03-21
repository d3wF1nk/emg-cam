import { Component } from '@angular/core';
import {RecorderService} from "../services/recorder.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public recorderService: RecorderService) {}

  addPhotoToGallery() {
    this.recorderService.addNewToGallery();
  }

}
