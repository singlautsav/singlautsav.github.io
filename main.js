$(document).ready(function(){
    $('.menuToggle').on('click', function(){
        $(this).toggleClass('open');
        $('.topNav').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.aboutHeading').mouseover(function(){
        // $('.aboutHeadingH1').css('text-align',"left");
        $(this).find('h1').css('font-size',"5rem");
        $(this).find('h1').css('opacity',".1");
        $(this).find('h6').css('text-align',"center");
        $(this).find('h6').css('opacity',"0.9");
        $(this).find('h6').css('font-size',"13rem");
    })
    $('.aboutHeading').mouseout(function(){
        $(this).find('h1').css('text-align',"center");
        $(this).find('h1').css('font-size',"8rem");
        $(this).find('h6').css('text-align',"center");
        $(this).find('h6').css('font-size',"5rem");
    })
})

$(document).ready(function(){
    $('.landingText').mouseover(function(){
        $('.bar').css('background','linear-gradient(to top, black,white)');

        $(this).find('h1').css('background','linear-gradient(to top, black,white)');
        $(this).find('h1').css("-webkit-background-clip","text");
        $(this).find('h1').css('-webkit-text-fill-color', 'transparent');

        $(this).find('h6').css('background','linear-gradient(to top,  #7053b4,#080106)');
        $(this).find('h6').css("-webkit-background-clip","text");
        $(this).find('h6').css('-webkit-text-fill-color', 'transparent');
    })
    $('.landingText').mouseout(function(){
        $('.bar').css('background','linear-gradient(to top,  #7053b4,#080106)');

        $(this).find('h1').css('background','linear-gradient(to top,  #7053b4,#080106)');
        $(this).find('h1').css("-webkit-background-clip","text");
        $(this).find('h1').css('-webkit-text-fill-color', 'transparent');

        $(this).find('h6').css('background','linear-gradient(to top, black,white)');
        $(this).find('h6').css("-webkit-background-clip","text");
        $(this).find('h6').css('-webkit-text-fill-color', 'transparent');
    })
})