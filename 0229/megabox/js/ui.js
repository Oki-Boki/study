$(function(){
    // $('.category_icon').click(function(){
    //     console.log('d');
    // });

    // $('.category_icon').on('click', function(){
    //     console.log('dd');
    // });
});


var toggleClass = function(obj, target){
    $(obj).toggleClass('active');
    $(target).toggleClass('active');
}

var activeTab = function(obj){
    var $this = $(obj);
    var $parent = $this.parent();
    var $tabCont = $('.js-cont');
    var idx = $parent.index();

    $parent.siblings().removeClass('on');
    $parent.addClass('on');

    $tabCont.hide().eq(idx).show();
}

var playBenefitSwiper = function(obj){
    var $this = $(obj);

    if( $this.hasClass('btn_pause') ){
        $this.removeClass('btn_pause').addClass('btn_play');
        benefitSwiper.autoplay.stop();
    } else {
        $this.removeClass('btn_play').addClass('btn_pause');
        benefitSwiper.autoplay.start();
    }
}
