let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    // console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// --------------joinus----------------

document.querySelector('.joinus').addEventListener('click', function () {
    document.querySelector('.plan_container').scrollIntoView({
        behavior: 'smooth'
    });
})


//--------------button----------------

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

$(document).ready(function() {
    $('.purchase').on('click', function() {
        alert('請先登入會員！');
        window.location.href = 'login.html';
    });
});