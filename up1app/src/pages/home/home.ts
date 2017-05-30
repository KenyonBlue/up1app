import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter4Page } from '../chapter4/chapter4';
import { Chapter5Page } from '../chapter5/chapter5';
import { Chapter6Page } from '../chapter6/chapter6';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
     onOpenChapter1(){
     this.navCtrl.push(Chapter1Page);
  };
     
     onOpenChapter2(){
     this.navCtrl.push(Chapter2Page);
  };
     
     onOpenChapter3(){
     this.navCtrl.push(Chapter3Page);
  };
     
     onOpenChapter4(){
     this.navCtrl.push(Chapter4Page);
  };
     
     onOpenChapter5(){
     this.navCtrl.push(Chapter5Page);
  };
     
     onOpenChapter6(){
     this.navCtrl.push(Chapter6Page);
  };
}
