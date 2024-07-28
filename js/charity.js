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

$(function () {
    $('.add').click(function () {
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text());
        $counter.text(currentValue + 1);
    });

    $('.sub').click(function () {
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text());
        if (currentValue > 1) {
            $counter.text(currentValue - 1);
        }
    });
});

$(document).ready(function () {
    $('.purchase').on('click', function () {
        alert('請先登入會員！');
        window.location.href = 'login.html';
    });
});

//-------------------------------------------------

$(document).ready(function () {
    let showHeight = 100;

    $(window).scroll(function () {
        // console.log($(document).scrollTop()); //600
        // console.log($(window).height()); //631


        $('.about_text p , .about img').each(function () {
            let setPlan = $(this);
            let textTop = setPlan.offset().top
            // console.log(parseInt(textTop)); //959

            if ($(document).scrollTop() >= (textTop + showHeight) - $(window).height()) {
                setPlan.addClass('visible');
            } else {
                setPlan.removeClass('visible');
            }
        })

        $('.actions p , .actions img').each(function () {
            let setPlan = $(this);
            let textTop = setPlan.offset().top
            // console.log(parseInt(textTop)); 

            if ($(document).scrollTop() >= (textTop + showHeight) - $(window).height()) {
                setPlan.addClass('visible');
            } else {
                setPlan.removeClass('visible');
            }
        })
    })
})

//-------------------------------------------------

$(document).ready(function () {

    let shineHeight = 100;
    let planHeight = 250;

    $(window).scroll(function () {
        // console.log($(document).scrollTop()); //2186
        // console.log($(window).height()); //631

        let setShine = $('#planshine');
        let shineTop = setShine.offset().top;
        if ($(document).scrollTop() >= (shineTop + shineHeight) - $(window).height()) {
            setShine.addClass('visible');
        } else {
            setShine.removeClass('visible');
        }
   

    $('.plan').each(function () {
        let setPlan = $(this);
        let planTop = setPlan.offset().top
        // console.log(parseInt(planTop)); //3952

        if ($(document).scrollTop() >= (planTop + planHeight) - $(window).height()) {
            setPlan.addClass('visible');
        } else {
            setPlan.removeClass('visible');
        }
    })
})

})