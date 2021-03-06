CONFIG_DATA = new Object({
	pages:["index","sponsor",'report','help/gp','help/new'],
	handleSelect: function(eve){
		page = this.pageId[Number(eve)]
		window.location.href=`http://${document.domain}/index/html/${page}.html`
	}
})

function init(id) {
	$('#anvbar').html(`
	
	<div class="anvbar" id="anvbar">
				
	<img class="iconImg" src="http://${document.domain}/index/assets/hub/favicon.png">
	<el-menu 
		default-active="${id}"
		mode="horizontal" 
		@select="handleSelect"
		show-timeout="0"
		style="border-bottom:none"
	>
	<!-- style="border-bottom:#FFA600" -->
		<el-menu-item index="0">首頁</el-menu-item>
		<el-submenu show-timeout=0 hide-timeout=0 index="2"> <!--  show-timeout=0 hide-timeout=0 -->
			<template slot="title">遊戲指南</template>
			<el-menu-item index="4">新手必看</el-menu-item>
			<el-menu-item index="3">同樂圈&小遊戲</el-menu-item>
			<el-menu-item index="2-2">選項awa</el-menu-item>
		</el-submenu>
		<el-submenu show-timeout=0 hide-timeout=0 index="3"> <!--  show-timeout=0 hide-timeout=0 -->
			<template slot="title">最新資訊</template>
			<el-menu-item index="2-4-1">伺服器公告</el-menu-item>
			<el-menu-item index="2-4-2">活動資訊</el-menu-item>
		</el-submenu>
		<el-menu-item index="9">合作申請</el-menu-item>
		<el-tooltip class="item" effect="dark" content="論壇尚未開放" placement="bottom">
			<el-menu-item index="3" disabled>玩家論壇</el-menu-item>
			</el-tooltip>
		<el-menu-item index="1">贊助我們</el-menu-item>
		<el-menu-item index="5">製作團隊</el-menu-item>
		<el-menu-item index="2">錯誤回報</el-menu-item>
		<el-menu-item index="6">懲處名單</el-menu-item>
		<el-menu-item index="6">登入帳號</el-menu-item>
	</el-menu>
</div>`);
}

