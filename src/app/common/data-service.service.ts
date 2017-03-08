import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  //热搜
  public resou:Array<any> = ['休闲娱乐','美食餐饮','便民服务'];
  //导航菜单
  public navbar:Array<any> = ['网站首页','丰顺新闻','丰顺生活','分类信息','焦点论坛','公益传递','风光美景','关于我们'];
  //分类栏目字段和icon
	public fenlei:Array<any> = [
		{
			icon:'design1',
			text:'Logo设计'
		},{
			icon:'design',
			text:'广告设计'
		},{
			icon:'baozhuang',
			text:'产品包装'
		},{
			icon:'tuiguangpingtailine',
			text:'平台推广'
		},{
			icon:'designzcool',
			text:'网站建设'
		},{
			icon:'xiangce-copy',
			text:'画册设计'
		},{
			icon:'shangdian',
			text:'网店装修'
		},{
			icon:'xiangji',
			text:'拍摄写真'
		}
	]
  //生活栏目字段和icon
	public shenghuo:Array<any> = [
		{
			icon:'yinle',
			text:'K歌酒吧'
		},{
			icon:'kafei',
			text:'休闲甜点'
		},{
			icon:'lvyou',
			text:'旅游景点'
		},{
			icon:'jiaotong',
			text:'交通路线'
		},{
			icon:'dianying',
			text:'电影院线'
		},{
			icon:'jianshen',
			text:'健身运动'
		},{
			icon:'baojifuben2',
			text:'家电维修'
		},{
			icon:'jiazhengfuwu01',
			text:'家政服务'
		},
	]
  //底部字段
	public footerList:Array<any>=[
		{
			title:'新手指南',
			listItem:['新手流程','支付方式','常见问题']
		},
		{
			title:'售后服务',
			listItem:['退货政策','退货流程','退款说明']
		},
		{
			title:'物流配送',
			listItem:['配送方式','配送服务','相关政策']
		},
		{
			title:'关于我们',
			listItem:['联系我们','加入我们']
		}
	]
  constructor() {
    
  }

}
