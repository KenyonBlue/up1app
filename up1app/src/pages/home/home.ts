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

//      searchQuery: string = '';
//  items: string[];
//
//  
//  initializeItems() {
//    this.items = [
//      'Chapter 1',
//      'Chapter 2',
//      
//    ];
//  }
//
//  getItems(ev: any) {
//    // Reset items back to all of the items
//    this.initializeItems();
//
//    // set val to the value of the searchbar
//    let val = ev.target.value;
//
//    // if the value is an empty string don't filter the items
//    if (val && val.trim() != '') {
//      this.items = this.items.filter((item) => {
//        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//      })
//    }
//  };
     
  constructor(public navCtrl: NavController) {}
     onOpenChapter1(){
     this.navCtrl.push(Chapter1Page);
//     this.initializeItems();
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
