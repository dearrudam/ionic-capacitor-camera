import { Component, ViewChild , ElementRef } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  photo: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
  }

  async takePicture() {
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    }).then((image) => {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    }).catch(err => {
      this.photo = null;
      console.log(err);
    });
  }
}
