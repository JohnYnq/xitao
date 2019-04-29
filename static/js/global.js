/**
 * @Author ：sean
 * @Date ：2019/4/15
 */


//返回顶部
function goScroll(objname='index'){

    if (objname === 'index' || objname === ''||!objname){
        $("html,body").animate({scrollTop:0},500);
    }else{
        $("html,body").animate({scrollTop:$('#'+objname).offset().top},500);
    }


}