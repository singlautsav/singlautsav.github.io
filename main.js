$(document).ready(function(){
    $('.menuToggle').on('click', function(){
        $(this).toggleClass('open');
        $('.topNav').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.aboutHeading').mouseover(function(){
        // $('.aboutHeadingH1').css('text-align',"left");
        $('.aboutHeadingH1').css('font-size',"5rem");
        $('.aboutHeadingH1').css('opacity',".1");
        $('.aboutHeadingH6').css('text-align',"center");
        $('.aboutHeadingH6').css('opacity',"0.9");
        $('.aboutHeadingH6').css('font-size',"13rem");
    })
    $('.aboutHeading').mouseout(function(){
        $('.aboutHeadingH1').css('text-align',"center");
        $('.aboutHeadingH1').css('font-size',"8rem");
        $('.aboutHeadingH6').css('text-align',"center");
        $('.aboutHeadingH6').css('font-size',"5rem");
    })
})

$(document).ready(function(){
    $('.landingText').mouseover(function(){
        $('.bar').css('background','linear-gradient(to top, black,white)');

        $('h1').css('background','linear-gradient(to top, black,white)');
        $('h1').css("-webkit-background-clip","text");
        $('h1').css('-webkit-text-fill-color', 'transparent');

        $('h6').css('background','linear-gradient(to top,  #7053b4,#080106)');
        $('h6').css("-webkit-background-clip","text");
        $('h6').css('-webkit-text-fill-color', 'transparent');
    })
    $('.landingText').mouseout(function(){
        $('.bar').css('background','linear-gradient(to top,  #7053b4,#080106)');

        $('h1').css('background','linear-gradient(to top,  #7053b4,#080106)');
        $('h1').css("-webkit-background-clip","text");
        $('h1').css('-webkit-text-fill-color', 'transparent');

        $('h6').css('background','linear-gradient(to top, black,white)');
        $('h6').css("-webkit-background-clip","text");
        $('h6').css('-webkit-text-fill-color', 'transparent');
    })
})