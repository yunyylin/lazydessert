const btn = document.getElementById('btn');
const mainMenu = document.getElementById('main-menu');

// 處理漢堡選單的點擊事件
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    mainMenu.classList.toggle('active');
});

// 監聽螢幕寬度的變化，重置選單狀態
window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
        btn.classList.remove('active');
        mainMenu.classList.remove('active');
    }
});
