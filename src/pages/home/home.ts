import {Component, ViewChild, NgZone, style, animate, transition, trigger} from '@angular/core';

import { Content, NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(1000, style({ opacity:1 }))
      ]),
      transition(':leave', [ // :leave is alias to '* => void'
        animate(1000, style({ opacity:0 }))
      ])
    ])
  ]
})
export class HomePage {
  zone: NgZone;
  posts: Array<any>;
  showScrollButton: boolean = false;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {
    this.zone = new NgZone({enableLongStackTrace: false});

    this.posts = [
      {
        image: '1.jpeg'
      },
      {
        image: '2.jpeg'
      },
      {
        image: '3.jpeg'
      },
      {
        image: '4.jpeg'
      },
      {
        image: '5.jpeg'
      },
      {
        image: '6.jpeg'
      },
      {
        image: '7.jpeg'
      },
      {
        image: '8.jpeg'
      }
    ];
  }

  ionViewDidLoad() {
    this.content.ionScroll.subscribe(($event) => {
      this.zone.run(() => {
        this.showScrollButton = this.content.scrollTop > (window.innerHeight / 2);
      });
    });
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  openPost(event, post) {
    this.navCtrl.push(DetailPage, {
      post: post
    });
  }
}
