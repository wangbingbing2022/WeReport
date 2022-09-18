module.exports = { //renthouse 租房小程序
	PROJECT_COLOR: '#47CEC6',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#47CEC6',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
		{ title: '服务流程', key: 'SETUP_CONTENT_INTRO' }
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
		{ mark: 'area', title: '所在地区', type: 'area' },
	],

	PRODUCT_NAME: '房源',
	PRODUCT_CATE: [
		{ id: 1, title: '房源' }
	],
	PRODUCT_AREA: ['福田', '南山', '罗湖', '龙岗', '龙华', '光明', '坪山', '大鹏', '宝安'],
	PRODUCT_TYPE: ['单房', '1房1厅', '2房1厅', '3房1厅', '3房2厅', '4房', '5房', '别墅', '其他'],
	PRODUCT_FIELDS: [
		{ mark: 'price', title: '房租', type: 'int', must: true },
		{ mark: 'area', title: '区域', type: 'radio', must: true, selectOptions: ['福田', '南山', '罗湖', '龙岗', '龙华', '光明', '坪山', '大鹏', '宝安'], ext: { show: 'row' } },
		{ mark: 'jiedao', title: '所在街道', type: 'text', must: true },
		{ mark: 'type', title: '户型', type: 'radio', must: true, selectOptions: ['单房', '1房1厅', '2房1厅', '3房1厅', '3房2厅', '4房', '5房', '别墅', '其他'], ext: { show: 'row' } },
		{ mark: 'mianji', title: '面积(㎡)', type: 'digit', must: true },
		{ mark: 'curfloor', title: '楼层', type: 'digit', must: true },
		{ mark: 'allfloor', title: '总楼层', type: 'digit', must: true }, 
		{ mark: 'dianfee', title: '电费(每月)', type: 'digit', must: true },
		{ mark: 'shuifee', title: '水费(每吨)', type: 'digit', must: true },
		{ mark: 'guanlifee', title: '管理费(每月)', type: 'digit', must: true },
		{ mark: 'wangfee', title: '网费(每月)', type: 'digit', must: true },
		{ mark: 'qifee', title: '燃气费(m³)', type: 'digit', must: true },
		{ mark: 'spec', title: '特点', type: 'checkbox', must: true, selectOptions: ['精装修', '随时看', '已认证', '近公交', '近地铁', '近商场', '近公园', '房龄新'], ext: { show: 'row' } },
		{ mark: 'sheshi', title: '房屋设施', type: 'checkbox', must: true, selectOptions: ['冰箱', '床', '电脑', '电视机', '空调', '宽带', '热水器', '沙发', '微波炉', '洗衣机', '衣柜', '桌椅'], ext: { show: 'row' } },
		{ mark: 'tel', title: '联系电话', type: 'text', max: 30, must: true },
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'album', title: '房内照片', type: 'image', must: true },
		{ mark: 'intro', title: '详细介绍', type: 'textarea', must: true,max:1000 },
	],

}