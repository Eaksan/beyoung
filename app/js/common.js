$(function() {
	$("select").styler();
	if( jQuery(window).width() > 1200 ) {
   //  jQuery(".fullpage-wrapper").fullpage({
   //    verticalCentered: false,
   //    menu: "navbar",
   //    navigation: false,//вертикальная пагинация
   //    css: true, //перемещение по блокам с анимацией(по умолчанию true)
   //    scrollingSpeed: 1000,//скорость прокрутки
   //    normalScrollElements: '.e-scroll, .modal',
   //    afterLoad: function(anchorLink, index){
			// 	var loadedSection = $(this);

			// 	//using index
			// 	if(index == 5){
			// 		$(".e-top").addClass("show");
			// 	}
			// }
   //  });
  };
  $(".e-top").click(function() {
  	$.fn.fullpage.moveTo(1);
  });

});
