$(document).ready(function(){ //當文件loading完的時候
    $(".change1").owlCarousel({
        autoplay:false, //自動輪播
        loop:true, //無限循環
        items:1, //只會出現一個物件
        mouseDrag:true, //滑鼠拖移
    })
    $(".left").click(function(){ //如果.left點下時 會觸發
        $('.change1').trigger('prev.owl.carousel') //切換上一個輪播
    })
    $(".right").click(function(){ //如果.right點下時 會觸發
        $('.change1').trigger('next.owl.carousel')//切換下一個輪播
    })
})

//  $() 是Jquery的選擇器 相當於 a = document.getElementBy??

