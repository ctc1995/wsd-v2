import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/data-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fenlei: Array<any> = [];
  shenghuo: Array<any> = [];
  xinwen: Array<any> = [];
  //图片轮播速度
  myInterval : number = 1500;
	noWrapSlides : boolean = false;
  //初始值显示第一张
	activeSlideIndex : number=0;
  slides=['../../assets/image/jianzhengongyuan.jpg','../../assets/image/longguifeipu.jpg','../../assets/image/zhonghualong.jpg',]
  //轮播图片集合
  constructor(
    private dataService: DataService
  ) {
    this.fenlei = dataService.fenlei;
    this.shenghuo = dataService.shenghuo;
    for(var i=0; i<15;i++){
			this.xinwen.push('2017年3月8日丰顺新闻')
		}
   }

  ngOnInit() {
  }

}
