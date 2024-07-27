//button

$(document).ready(function(){
    $('.sub').click(function(){
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text()); //取得 counter 的值，並轉為整數
        if (currentValue > 1){
            $counter.text(currentValue - 1);
        }
    })

    $('.add').click(function(){
        let $counter = $(this).closest('.quantity').find('.counter');
        let currentValue = parseInt($counter.text()); //取得 counter 的值，並轉為整數
        $counter.text(currentValue + 1);
    })
})


$(document).ready(function() {
    // 確保只選擇 .container 裡面的 #all
    let container = $('.container');
    let allCheckbox = container.find('#all');
    let checkboxes = container.find('input[type="checkbox"]:not(#all)');

    // 綁定 #all checkbox 的點擊事件
    allCheckbox.click(function() {
        let isChecked = $(this).prop('checked');
        checkboxes.prop('checked', isChecked);
    });

    // 綁定所有選項 checkbox 的變化事件
    checkboxes.change(function() {
        let allChecked = checkboxes.length === checkboxes.filter(':checked').length;

        // 根據所有選項的勾選狀態來設置 #all 的勾選狀態
        allCheckbox.prop('checked', allChecked);
    });
});

$(document).ready(function() {
    // 確保只選擇 .phone_container 裡面的 #all
    let phone_container = $('.phone_container');
    let allCheckbox = phone_container.find('#all');
    let checkboxes = phone_container.find('input[type="checkbox"]:not(#all)');

    // 綁定 #all checkbox 的點擊事件
    allCheckbox.click(function() {
        let isChecked = $(this).prop('checked');
        checkboxes.prop('checked', isChecked);
    });

    // 綁定所有選項 checkbox 的變化事件
    checkboxes.change(function() {
        let allChecked = checkboxes.length === checkboxes.filter(':checked').length;

        // 根據所有選項的勾選狀態來設置 #all 的勾選狀態
        allCheckbox.prop('checked', allChecked);
    });
});

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