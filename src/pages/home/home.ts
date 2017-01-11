import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Array<any>;

  constructor(public navCtrl: NavController) {
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

  openPost(event, post) {
    this.navCtrl.push(DetailPage, {
      post: post
    });
  }
}
