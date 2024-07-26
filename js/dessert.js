//banner輪播
$(function () { //等同於$(document).ready(function () {
  let divwidth = $('#sliderBoard').width() //獲取sliderBoard的元素寬度，存在變數divwidth中
  let imgCount = $('#content li').length //獲取所有<li>標籤的數量，存在變數imgCount中

  //    alert(divwidth)
  //    alert(imgCount)

  for (let i = 0; i < imgCount; i++) {
    $('#contentButton').append(`<li></li>`) //為 contentButton 內的第一個 <li> 標籤添加 clicked 類別，表示其被選中
  }
  $('#contentButton li:first').addClass('clicked')

  //li的寬
  $('#content li').width(divwidth)

  //ul的寬*圖片數量，確保所有圖片水平排列
  $('#content').width(divwidth * imgCount)

  let index = 0; //宣告在外面，讓大家都認識他，用於追踪當前顯示的圖片索引
  let timer = setInterval(moveToNext, 4000) //time = setInterval(函數 , 毫秒)

  //以下程式碼：當用戶點擊某個縮略圖按鈕時，停止自動輪播，顯示對應的圖片，並將按鈕的狀態更新為選中狀態。然後，重新啟動自動輪播。

  $('#contentButton li').click(function () {

    clearInterval(timer) //一進來先停掉計時器，停止自動輪播。

    index = $(this).index() //被點擊的那一個<li>，的索引存在index中
    // alert(index)


    $('#content').animate({
      left: divwidth * index * -1, /*index 是當前被點擊的 <li> 的索引。每按一次往左邊移動*/
    })

    $(this).addClass('clicked')
    // 被按的本人要換深一點的顏色(clicked)

    $('#contentButton li').not(this).removeClass('clicked')
    //其他的就不能被選擇，所以移除

    timer = setInterval(moveToNext, 5000) //重新啟動計時器
  })


  function moveToNext() {
    //控制index只能介於0~4之間，如果寫 index += 1;會出現空白一直增加
    //用來檢查當前圖片的索引 index 是否小於圖片總數-1，imgCount - 1 是因為索引從0開始計算

    if (index < imgCount - 1) {
      index += 1;
    } else {
      index = 0; //如果已經是最後一張圖片，執行 index = 0 回到第一張圖片
    }

    $('#content').animate({
      left: divwidth * index * -1, //每按一次往左邊推
    })
    $(`#contentButton li:eq(${index})`).addClass('clicked')
    $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    //:eq(${index}) 是 jQuery 的一個選擇器，用來選擇具有特定索引的元素
    // 這裡是他5秒過後自行移動，但button也要自己跑
  }
  // let time = setInterval(函數 , 毫秒)
  //clearInterval(timer)
});

// 放入各項產品---------------------------------------------------------------------------------
const products = [

  //限時特賣
  { imgSrc: "./img/giftbox-1.jpg", name: "七夕情人節禮盒", english: "Valentine's Day gift box", price: "NT $350 / 盒", url: "product.html", tag: "七夕必買", category: "sale" },

  //瑪德蓮
  { imgSrc: "./img/honeymadeleine.jpg", name: "蜂蜜甜杏瑪德蓮", english: "Honey Almond Madeleine", price: "NT $55 /入", url: "product.html", category: "madeleine" },
  { imgSrc: "./img/earlmadeleine.jpg", name: "唐寧伯爵瑪德蓮", english: "Earl Grey Madeleine", price: "NT $60 /入", tag: "熱銷好評", url: "product.html", category: "madeleine" },
  { imgSrc: "./img/redoolongmadeleine.jpg", name: "蜜香紅烏龍瑪德蓮", english: "Red Oolong Madeleine", price: "NT $60 /入", url: "product1.html", tag: "愛茶首選", category: "madeleine" },

  //可麗露
  { imgSrc: "./img/canele_vanilla_2.png", name: "香草可麗露", english: "Vanilla Canelé", price: "NT $75 /入 ", url: "product.html", category: "canele" },
  { imgSrc: "./img/canele_coco_1.jpg", name: "可可奶酒可麗露", english: "Baileys Coco Canelé", price: "NT $80 /入", url: "product.html", category: "canele" },
  { imgSrc: "./img/canele_berry_1.jpg", name: "綜合莓果可麗露", english: "Mixed Berry Canelé", price: "NT $80 /入 ", url: "product.html", category: "canele" },
  { imgSrc: "./img/canele_matcha_1.jpg", name: "小山園抹茶可麗露", english: "Matcha Canelé", price: "NT $90 /入 ", tag: "熱銷好評", url: "product.html", category: "canele" },
  { imgSrc: "./img/canele_earl_4.png", name: "唐寧伯爵可麗露", english: "Earl Grey Canelé", price: "NT $90 /入 ", tag: "熱銷好評", url: "product.html", category: "canele" },

  //磅蛋糕
  { imgSrc: "./img/honeypoundcake.jpg", name: "蜂蜜甜杏磅蛋糕", english: "Honey Almond Pound Cake", price: "NT $60 /片", url: "product.html", category: "pound" },
  { imgSrc: "./img/cocopoundcake.jpg", name: "可可奶酒磅蛋糕", english: "Baileys Coco Pound Cake", price: "NT $65 /片", url: "product.html", category: "pound" },
  { imgSrc: "./img/lemonpoundcake.jpg", name: "雙倍檸檬磅蛋糕", english: "Double Lemon Pound Cake", price: "NT $65 /片", url: "product.html", category: "pound" },
  { imgSrc: "./img/redberrypoundcake.jpg", name: "紅酒莓果磅蛋糕", english: "Red Wine Berry Pound Cake", price: "NT $70 /片", tag: "熱銷好評", url: "product.html", category: "pound" },
  { imgSrc: "./img/cointreaupoundcake.jpg", name: "君度香橙磅蛋糕", english: "Cointreau Pound Cake", price: "NT $70 /片", tag: "熱銷好評", url: "product.html", category: "pound" },
  { imgSrc: "./img/twiningspoundcake.jpg", name: "唐寧伯爵磅蛋糕", english: "Cointreau Pound Cake", price: "NT $70 /片", tag: "熱銷好評", url: "product.html", category: "pound" },
  { imgSrc: "./img/peanutpoundcake.jpg", name: "花生奶酥磅蛋糕", english: "Peanut Soufflé Pound Cake", price: "NT $70 /片", tag: "好事花生", url: "product.html", category: "pound" },
  { imgSrc: "./img/matchpoundcake.svg", name: "小山園抹茶磅蛋糕", english: "Matcha Pound Cake", price: "NT $70 /片", url: "product.html", category: "pound" },

  //餅乾
  { imgSrc: "./img/catcookie.jpg", name: "貓貓奶香餅乾", english: "Cat Milk Cookies", price: "NT $70 /10入", tag: "經典原味", url: "product.html", category: "cookies" },
  { imgSrc: "./img/cheesecookie-1.jpg", name: "起司乳酪餅乾", english: "Cheese Cookies", price: "NT $70 /10入", url: "product.html", category: "cookies" },
  { imgSrc: "./img/peanutsoftcookies.jpg", name: "花生軟餅乾", english: "Peanut Soft Cookies", price: "NT $80 /5入", tag: "", url: "product.html", category: "cookies" },
  { imgSrc: "./img/cocosoftcookies.jpg", name: "巧克力軟餅乾", english: "Coco Soft Cookies", price: "NT $80 /5入", tag: "", url: "product.html", category: "cookies" },
  { imgSrc: "./img/coffeecookie.jpg", name: "可可咖啡豆餅乾", english: "Coco Coffee Bean Cookies", price: "NT $80 /10入", tag: "熱銷好評", url: "product.html", category: "cookies" },
  { imgSrc: "./img/earlcookie.jpg", name: "唐寧伯爵餅乾", english: "Earl Grey Cookies", price: "NT $80 /20入", url: "product.html", category: "cookies" },
  { imgSrc: "./img/matchacookie-1.jpg", name: "小山園抹茶餅乾", english: "Matcha Cookies", price: "NT $85 /10入", url: "product.html", category: "cookies" },
  { imgSrc: "./img/berrycookie.jpg", name: "香草莓果花圈餅乾", english: "Vanilla Berry Cookies", price: "NT $100 /10入", tag: "熱銷好評", url: "product.html", category: "cookies" },
  { imgSrc: "./img/berrymatchacookie.jpg", name: "小山園花圈餅乾", english: "Matcha White Coco Cookies", price: "NT $110 /10入", tag: "熱銷好評", url: "product.html", category: "cookies" },
  { imgSrc: "./img/cococookie.jpg", name: "可可奶酒花圈餅乾", english: "Baileys Chocolate Cookies", price: "NT $110 /10入", tag: "熱銷好評", url: "product.html", category: "cookies" },
  { imgSrc: "./img/cookiebox.jpg", name: "Ryan的後花園鐵盒餅乾", english: "Ryan's IronBox Biscuits", price: "NT $300 /盒", tag: "送禮推薦", url: "product.html", category: "cookies" },

  //冷藏甜點
  { imgSrc: "./img/brownie-2.png", name: "可可布朗尼", english: "Brownie", price: "NT $50 /2入", tag: "新品上市", url: "product.html", category: "cold" },
  { imgSrc: "./img/taro-2.jpg", name: "芋泥月半奶酪", english: "Taro Panna Cotta", price: "NT $60 /瓶", tag: "手煮芋泥", url: "product.html", category: "cold" },
  { imgSrc: "./img/blueberry.jpg", name: "藍莓月半奶酪", english: "Blueberry Panna Cotta", price: "NT $60 /瓶", tag: "手工果醬", url: "product.html", category: "cold" },
  { imgSrc: "./img/mangotart-1.jpg", name: "芒果乳酪塔", english: "Mango Cheese Tart", price: "NT $100 /入", url: "product.html", category: "cold" },
  { imgSrc: "./img/tiramisu.jpg", name: "奶酒提拉米蘇", english: "Baileys Tiramisu", price: "NT $100 /入", url: "product.html", category: "cold" },
  { imgSrc: "./img/mangocake.jpg", name: "夏日的黃玫瑰", english: "Mango Cream Cheese", price: "NT $400 /6吋", tag: "清爽推薦", url: "product.html", category: "cold" },
  { imgSrc: "./img/tarocake.jpg", name: "芋泥藍莓蛋糕", english: "Taro Blueberry Cake", price: "NT $650 /6吋", tag: "", url: "product.html", category: "cold" },
  { imgSrc: "./img/Blackforestcake.jpg", name: "黑森林蛋糕", english: "Black Forest Cake", price: "NT $650 /6吋", tag: "", url: "product.html", category: "cold" },
];

//分頁按鈕
const itemsPerPage = 12;
const totalPages = Math.ceil(products.length / itemsPerPage);
let currentPage = 1;
let currentCategory = 'all'; //當前分類，初始值為顯示所有產品

function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // 清空現有產品，避免顯示重複的產品

  //如果當前分類是全部商品的話，filteredProducts就顯示所有產品。否則，filteredProducts 只包含 category 屬性與 currentCategory 相同的產品
  const filteredProducts = currentCategory === 'all'
    ? products
    : products.filter(product => product.category === currentCategory);

  /*
  計算當前頁顯示的產品範圍

  ※ start 邏輯：
  當 currentPage = 1 ，start = (1 - 1) * itemsPerPage(12) = 0
  所以 start 是 0，表示從產品陣列的第0個索引（也就是第1個產品）開始顯示
  
  而當 currentPage = 2 ，start = (2 - 1) * itemsPerPage(12) = 12
  所以 start 是 12，表示從產品陣列的第12個索引（也就是第13個產品）開始顯示，以此類推

  ※ end 邏輯：
  當 currentPage = 1，end = 0 + 12 = 12 
  所以 end 是 12，表示到產品陣列的第 12 個索引（不包括第 12 個索引）的產品結束顯示

  ※ start & end ：
  表示從第 start 個產品（包含）到第 end 個產品（不包含）
  例如：start = 0，end = 12，表示第 1 個產品 (索引 0 ) 到第 12 個產品(索引 11 )

  ※ 使用 slice(start, end)：表示 取值為 slice(0, 12) --> 索引0～索引11的產品

  */

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const productsToDisplay = filteredProducts.slice(start, end);

  //將每個產品添加到頁面上
  productsToDisplay.forEach(product => {
    // 創建一個新的 <a> 元素
    const aElement = document.createElement('a');
    aElement.href = product.url;

    // 產品內容
    let productContent = `
      <img src="${product.imgSrc}">
      <h5>${product.name}</h5>
      <span>${product.english}</span>
      <span>${product.price}</span>
    `;

    // 如果 tag 有值，再添加 <p>
    if (product.tag) {
      productContent = `<p>${product.tag}</p>` + productContent;
    }
    aElement.innerHTML = productContent;

    // 創建一個新的 <div> 元素 itemDiv
    // class 為 item1
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item1';

    // 將產品內容 (aElement) 加到 item1 (div) 中
    itemDiv.appendChild(aElement);

    // 將 item1 容器添加到 productList 容器中 (commodity)
    productList.appendChild(itemDiv);
  });
}

/*
總結，定義了renderProducts的函數，執行以下事情
1、清空現有產品列表
2、根據當前分類過濾產品
3、計算當前頁應顯示的產品範圍
4、將過濾後的產品顯示在頁面上
5、
*/


document.querySelectorAll('.pagination button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentPage = parseInt(button.innerText);
    renderProducts();
    window.scrollTo({ top: 500, behavior: 'smooth' }); // 切換頁面時跳至頁面頂部，並添加平滑滾動
    // console.log(window.scrollTo(0 ,500));
  });
});

document.querySelectorAll('.category-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active')); // 移除所有分類按鈕的 active 樣式
    button.classList.add('active');                                                               // 為當前點擊的按鈕添加 active 樣式
    currentCategory = button.getAttribute('data-category');                                       // 更新當前顯示的分類
    currentPage = 1;                                                                              // 切換分類時重置到第一頁
    renderProducts();
  });
});


// 讀取URL參數，與熱門產品連結，並設置分類按鈕的 active 樣式
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
if (category) {
  currentCategory = category;
}
document.querySelectorAll('.category-button').forEach(button => {
  button.classList.remove('active');
  if (button.getAttribute('data-category') === currentCategory) {
    button.classList.add('active');
  }
});


renderProducts(); // 重新渲染