$(document).ready(function () {
    let showHeight = 280;

    $(window).scroll(function () {
        // console.log($(document).scrollTop()); //3380
        // console.log($(window).height()); //564
        
        $('.product').each(function (index) {
            let setThis = $(this);
            let productTop = setThis.offset().top; // 物件和視窗頂部的距離
            console.log('Product ' + index + ' top position: ' + productTop); // 輸出每個 .product 元素的頂部距離
            // 1951 > 2219 > 2487 > 2755 > 3023 差距268

            if($(document).scrollTop() >= (productTop + showHeight) - $(window).height()){
                setThis.addClass('visible');
            }else{
                setThis.removeClass('visible');
            }

        });

    })
})