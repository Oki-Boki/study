$(function(){
    tabActive('.brand_tab');
});

var tabActive = function(pram){
    var idx = 0;
    var tabName = $(pram);
    var tabLIstItem = tabName.find('.js_tab_list > li');
    var tabLIstCont = tabName.find('.js_tab_cont > div');

    tabLIstItem.on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        idx = $(this).index();
        tabLIstCont.eq(idx).show().siblings().hide();
    });
};