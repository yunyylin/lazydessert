// 當HTML文檔完全加載並解析完成後，觸發此事件。確保在操作DOM元素之前，所有DOM元素都已經加載完畢。
document.addEventListener('DOMContentLoaded', function () {
    const pointer = document.querySelector('.fa-arrow-pointer');   // 選取滑鼠圖標元素
    const cart = document.querySelector('.fa-cart-shopping'); // 選取購物車圖標元素


    function resetPointerAnimation() { //定義一個函數來「重新設定」滑鼠的動畫
        pointer.style.animation = 'none';// 重設滑鼠動畫，這一步是將動畫屬性設置為'none'來移除當前動畫
        pointer.offsetHeight;
        // 讀取滑鼠元素的offsetHeight屬性，這會強制瀏覽器執行一次重排，以應用前面設置的動畫停止操作。這裡不需要將offsetHeight賦值給任何變量，只是通過訪問它來觸發重排。
        pointer.style.animation = ''; //清除動畫屬性，準備重新開始動畫
    }

    function resetCartAnimation() {  //定義一個函數來「重新設定」購物車的動畫
        cart.style.animation = 'none';
        cart.offsetHeight;
        cart.style.animation = '';
    }

    function starPointerAnimation() { //定義一個函數來「啟動」滑鼠的動畫
        pointer.style.animation = 'arrow .9s linear';
        pointer.style.animationPlayState = 'running' //animationPlayState為CSS動畫屬性，控制動畫的播放狀態
    }

    function startCartAnimation() {
        cart.style.animation = 'cart1 .4s .8s linear';
        cart.style.animationPlayState = 'running';
    }

    // 為滑鼠添加一個事件聆聽，聆聽 animationend 事件，這個事件會在滑鼠動畫結束時觸發
    pointer.addEventListener('animationend', function () {
        startCartAnimation();
        //當滑鼠動畫結束的時候，觸發startCartAnimation函數開始購物車動畫
    });

    setInterval(function () { //setInterval 設置了一個定時器，每2.5秒執行一次傳入的匿名函數
        resetPointerAnimation(); //重設滑鼠的動畫
        resetCartAnimation(); //重設購物車的動畫
        starPointerAnimation(); //重新開始滑鼠的動畫
    }, 2100)

    //JS真的好難
});

$(document).ready(function () {
    let items = $('.popular li');  // 所有輪播項目
    let currentIndex = 0;  // 當前顯示的項目索引
    let itemAmount = items.length;  // 輪播項目的總數

    //初始隱藏cookie
    $('#cookie_item').hide();

    function updateUI() {
        let width = $(window).width();  // 當前視窗寬度
        if (width > 880) {
            $('#right').show();
            $('#left').show();

            $('#right').off('click').on('click', function (event) {
                event.preventDefault();
                showCookieHideMadeleine();
            });
            $('#left').off('click').on('click', function (event) {
                event.preventDefault();
                showMadeleineHideCookie();
            });
        } else if (width <= 880 && width > 480) {
            $('#right').hide();
            $('#left').hide();
            $(items).show();  // 顯示所有項目
        } else if (width <= 480) {
            $('#right').show();
            $('#left').show();
            $(items).hide();   //隱藏所有項目
            $(items[currentIndex]).show();  // 只顯示當前項目
        }
    }

    function nextItem() {
        let width = $(window).width();
        if (width <= 480) {
            currentIndex = (currentIndex + 1) % itemAmount;  // 循環到下一個項目
            updateUI();
        }
    }

    function prevItem() {
        let width = $(window).width();
        if (width <= 480) {
            currentIndex = (currentIndex - 1 + itemAmount) % itemAmount;  // 循環到上一個項目
            updateUI();
        }
    }

    $('#right').click(function(event) {
        event.preventDefault();
        nextItem();
    });

    $('#left').click(function(event) {
        event.preventDefault();
        prevItem();
    });

    $(window).resize(updateUI);  // 監聽視窗尺寸變化
    updateUI();  // 初始設置
});

function showCookieHideMadeleine() {
    $('#madeleine_item').hide();
    $('#cookie_item').show();
}

function showMadeleineHideCookie() {
    $('#cookie_item').hide();
    $('#madeleine_item').show();
}

