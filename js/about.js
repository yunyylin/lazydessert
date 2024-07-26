// $('.cardButton').click(function(){
// $(this).siblings('.card').toggleClass('flipped');
// });

//翻轉卡片
$('.card').click(function () {
    $(this).toggleClass('flipped');
});



$(document).ready(function () {
    let showHeight = 100;


    $(window).scroll(function () {
        //    console.log($(document).scrollTop()); //3951
        //    console.log($(window).height()); //630

        $('.ourpromise').each(function (index) {
            let setThis = $(this);
            let ourpromiseTop = setThis.offset().top; // 物件和視窗頂部的距離
            console.log('ourpromise ' + index + ' top position: ' + ourpromiseTop); // 輸出.ourpromise 元素的頂部距離
            //1735
            if ($(document).scrollTop() >= (ourpromiseTop + showHeight) - $(window).height()) {
                setThis.addClass('visible');
            } else {
                setThis.removeClass('visible');
            }
        })
    })


    let showCardHeight = 300;
    $(window).scroll(function () {
           console.log($(document).scrollTop()); //5853
           console.log($(window).height()); //543

        $('.card-detail').each(function (index) {
            let setThis = $(this);
            let cardTop = setThis.offset().top; // 物件和視窗頂部的距離
            console.log('card-detail ' + index + ' top position: ' + cardTop); // 輸出.card-detail 元素的頂部距離
           //3078 --> 3470 --> 3862 相差 392
            if ($(document).scrollTop() >= (cardTop + showHeight) - $(window).height()) {
                setThis.addClass('visible');
            } else {
                setThis.removeClass('visible');
            }
        })
    })















})