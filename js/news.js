$(document).ready(function () {
    let newsHeight = 250; //觸發動畫滾動的高度

    $(window).scroll(function () {

        // console.log(parseInt($(document).scrollTop())); //最底1432
        // console.log($(window).height()); //631

        $('.news_container').each(function () {
            let setNews = $(this) //被選到的那一個存在 setNews 裡
            let newsTop = setNews.offset().top; //計算被選到的那一個距離頂部有多遠
            console.log(parseInt(newsTop)); // 257 558 860 1162 差距302

            // 分步解釋
            // $(document).scrollTop() 這會返回當前頁面已經滾動的垂直距離（從頁面頂部開始計算）

            // newsTop 這是當前元素的頂部相對於整個文檔頂部的距離

            // newsHeight 這是我們設定的，用來調整觸發動畫的滾動高度

            // $(window).height() 這會返回當前窗口的高度，也就是視口的高度

            /*
            假設：
            元素 newsTop 是 800px
            視口高度 $(window).height() 是 600px
            newsHeight 是 100px
            
            計算如下：  
            newsTop + newsHeight = 800 + 100 = 900
            (newsTop + newsHeight) - $(window).height() = 900 - 600 = 300
            所以，條件判斷為：
        
            $(document).scrollTop() >= 300
            當用戶滾動超過 300px 時，條件為真，元素開始顯示。
            */

            if ($(document).scrollTop() >= (newsTop + newsHeight) - $(window).height()) {
            setNews.addClass('visible');
            } else {
                setNews.removeClass('visible');
            }
        })

    })

})