import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-wheat',
  templateUrl: './preview-wheat.page.html',
  styleUrls: ['./preview-wheat.page.scss'],
})
export class PreviewWheatPage implements OnInit {
  @ViewChild('slides', { static: true}) slides: any;

  sliderConfig = {
    slidesPerView: 1.3,
    spaceBetween: 0,
    centeredSlides: true,
    };
  pageName: string;

  constructor(private router : Router,public route : ActivatedRoute) { 
    this.pageName = this.route.snapshot.paramMap.get('page')
  }

  ngOnInit() {
  }
  goto(value) {
   this.router.navigate(['preview-delight',{"page": value}]);
}

openChat() {
  this.router.navigateByUrl('/home');
}

}
