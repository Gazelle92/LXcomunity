function mouseOut() {
  this.style.color = "black";
}
$(document).ready(function(){
    $('.iga').mouseover(function(){
        $(this).addClass('igaHover');
    });
    $('.iga').mouseout(function(){
        $(this).removeClass('igaHover');
    });
    $('.ttt').click(function(){
        $('html, body').animate({
            scrollTop: $('html').offset().top
          }, 500, function() {
        });
    });
    
    $('.btnIcon .likeIcon img').click(function(){
        $(this).toggleClass('likeIt');
        $(this).css({'transform': 'scale(1.5)'});
        setTimeout(function(){
            $('.btnIcon .likeIcon img').css({'transform': 'scale(1.0)'});
        }, 200);  
    });

    /* 22.05.13 팝업기능 추가 */
    function delay(){
        $('.popUpexit').css('display','block');
        $('.popUp').addClass('popUpOn');
        $('body').css('position','unset');
    };
    $('.puw .aLink').click(function(){
        if( $('iframe').hasClass('popUp') === false ){
            $('body').append('<iframe class="popUp"></iframe>');
        }
        console.log($(this).next().attr('href'));
        $('.popUp').attr('src',$(this).next().attr('href'));
        setTimeout(delay, 50);
    });
    $('.popUpexit').click(function(){
        $('.popUp').removeClass('popUpOn');
        $('.popUpexit').css('display','none')
        $('body').css('position','unset');
    });
    
    /* 22.06.21 스크롤시 헤더 숨김 */
    $(window).bind('mousewheel', function(event) {
        if($(document).scrollTop() > 0){
            if (event.originalEvent.wheelDelta >= 0) {
                $('header').removeClass('sd');
            } else {
                $('header').addClass('sd');
            }
        }
    });

    /* 22.06.29 gnb */
    $('.mobGnb').click(function(){
        $('header').addClass('openGnb');
    });
    $('header .closeBtn').click(function(){
        $('header').removeClass('openGnb');
    });

    
    $('.header-search').click(function(){
        $('header').toggleClass('sc');
    })
    $('.search-back').click(function(){
        $('header').removeClass('sc');
    })
    $(window).scroll(function(){
        $('header').removeClass('sc');
    });
});