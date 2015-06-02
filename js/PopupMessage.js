var PopupMessage = {
	messageId : 0,	
	title : "확인",
	message: "이체파일이 등록되었습니다.<br>" + 
			 "자동이체관리에서 등록된 파일에 대해<br>" +
			 "자동이체요청을 하세요.",
	icon: "",
	buttons: "",
	messageContainerId: "messageContainer",
	settings: {
		opacity: 0.3
	},
	init: function(){
		document.body.innerHTML+='<div id="'+this.messageContainerId+'"></div>';
	},
	error: function(message, callback){
		this.message = message;
		this.icon = "1";
		this.popup();
		this.closePopup(callback);
	},
	success: function(message, callback){
		this.message = message;
		this.icon = "2";
		this.popup();
		this.closePopup(callback);
	},
	warning: function(message, callback){
		this.message = message;
		this.icon = "3"
		this.popup();
		this.closePopup(callback);
	},
	info: function(message, callback){
		this.message = message;
		this.icon = "4";
		this.popup();
		this.closePopup(callback);
	},
	popup: function(){
		var message = 
		'<div class="pop_wrap message" id="message'+(++this.messageId)+'" style="width:400px; display:none; background: white;">' +
		'	<!-- 팝업 헤더 -->' +
		'	<div class="pop_header">' +
        '		<h1>확인</h1>' +
		'	</div>' +
        '	<!-- //팝업 헤더 -->' +
		'	<!-- 팝업 컨텐츠 -->' +
		'	<div class="pop_container">' +
		'		<div style="min-height:85px;padding:10px 0 0 0;">' +
		'			<div class="caution_box icon'+this.icon+' t_left">' +
						this.message +
		'			</div>' +
		'		</div>' +
		'		<!-- 하단버튼 -->' +
		'		<div class="t_center t_line2">' +
		'			<a href="javascript:" id="btnConfirm" class="btn_style2_b"><span>확인</span></a>' +
		'		</div>' +
		'		<!-- //하단버튼 -->' +
		'	</div>' +
		'	<!-- //팝업 컨텐츠 -->' +
		'</div>';
		document.getElementById(this.messageContainerId).innerHTML+= message;
		if($(document.body).find(".message").length>1)
			this.settings.opacity = 0;
		else{
			this.settings.opacity = 0.3;
		}
		$('#message'+this.messageId).bPopup(this.settings);
	},
	closePopup: function(callback){
		$("#message"+this.messageId+" #btnConfirm").click(function(){
			if($(document.body).find(".message").length==1)
				$(this).parents(".message").bPopup().close();	
			$(this).parents(".message").remove();
			if(callback){
				callback();
			}
		});
	}
};
$(function(){
	$('head').append('<link rel="stylesheet" href="css/reset.css">');
	$('head').append('<link rel="stylesheet" href="css/content.css">');
	PopupMessage.init();
});