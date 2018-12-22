import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // isActive: boolean = false;
  @ViewChild("mainVideo") mainVideo: any; // todo

  title = "church-website";

  ngOnInit() {
    const video: HTMLVideoElement = this.mainVideo.nativeElement;
    let headerHeight = document.querySelector("header").offsetHeight - 100;
    video.muted = true;
    let isStop = false;

    video.addEventListener("click", function() {
      video.muted = false;
      isStop = true;
    });

    window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      // console.log(headerHeight, scroll);

      if (scroll >= headerHeight && isStop !== true) {
        video.play();
      }
    });
  }
}
