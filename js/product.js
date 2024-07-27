//小圖換大圖
//確保DOM加載完畢後執行內部代碼
$(document).ready(function () {
    $('.thumbnail-images img').click(function () { //為.thumbnail-images img設定點擊事件
        let theThumbnail = $(this).attr('src') //當被點擊的圖片(this)的 src 屬性值會存儲在叫 theThumbnail 的變數中

        $('.main-image img').attr('src', theThumbnail)//將 .main-image 容器內的圖片的 src 屬性更新為 theThumbnail(被點擊的圖片)
    })
})


//Other selected desserts
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const arrowBtns = document.querySelectorAll('.arrow .fa-solid');
    const firstCardWidth = wrapper.querySelector('.card').offsetWidth; //滾動距離


    arrowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const scrollAmount = btn.id === "left" ? -firstCardWidth : firstCardWidth; //如果是left，滾動距離為負；反之為正
            wrapper.scrollLeft += scrollAmount;
        });
    });

});


//提醒登入會員
$(document).ready(function () {
    $('#addItem').click(loginMember);
    $('#buyItem').click(loginMember);

});


function loginMember() {
    alert('請先登入會員！');
    window.location.href = 'login.html';
}


$(document).ready(function(){
    // 設置分類按鈕的點擊事件
    $('.category-button').click(function(){
        let currentCategory = $(this).attr('data-category'); // 獲取當前點擊按鈕的 data-category 屬性值
        window.location.href = 'dessert.html?category=' + currentCategory; // 跳轉到對應的分類頁面
    });

    // 讀取URL參數並設置分類按鈕的 active 樣式
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // 先移除所有分類按鈕的 active 樣式
    $('.category-button').removeClass('active');

    // 如果有分類參數，根據參數設置相應的按鈕為 active 樣式
    if (category) {
        $(`.category-button[data-category="${category}"]`).addClass('active');
    } else {
        
        $('.category-button').removeClass('active');
    }
});

//button
$(function(){
    $('.add').click(function(){
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text());
        $counter.text(currentValue + 1);
    });

    $('.sub').click(function(){
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text());
        if (currentValue > 1) {
            $counter.text(currentValue - 1);
        }
    });
});