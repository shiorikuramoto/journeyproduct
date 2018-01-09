

// LAP-TOP  出てくるMENU

$(function(){
    $('#lt-moving-menu li a').hover(
    function(){
        $(this).find('span').stop().animate({'marginLeft':'520px'},400);
    },function(){
        $(this).find('span').stop().animate({'marginLeft':'0px'},400);
    }
    );
});

$(function(){
    $(document).snowfall({
        maxSize: 5,
        flakeColor: "white",
    });
})