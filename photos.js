/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    photos.js  ——  設定檔                    ║
 * ║  這是你唯一需要編輯的檔案。新增攝影集只要照格式複製貼上。     ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * 照片放在這裡：
 *   photos/<分類id>/<攝影集id>/IMG_0001.jpg
 *                              IMG_0002.jpg
 *                              ...
 *
 * 照片會依照檔名自動排序（數字排序）。
 */

/* ──────────────────────────────────────────
   網站基本資訊
   ────────────────────────────────────────── */
window.SITE_CONFIG = {
  name: "山本攝影",                        // 左上角名稱 & 頁籤標題

  heroTitle: "Portrait &<br><em>Wedding</em>",  // 首頁大標題（可用 <br> 換行、<em> 斜體）
  heroDesc:  "業餘攝影師，記錄婚禮與人像的溫度。\n每個瞬間都值得被好好保留。",

  about: {
    heading: "用照片\n留住當下",
    paragraphs: [
      "業餘攝影師，平日在新竹工作。專注人像攝影與婚禮紀實，喜歡捕捉自然光下真實的情感流露。",
      "相信每個微笑、每個眼神交會，都是值得珍藏的記憶。"
    ]
  },

  contact: [
    { label: "Email", value: "canonsogood@gmail.com" },
    { label: "IG",    value: "canonsogood" },
    { label: "合作",  value: "歡迎來信或IG私訊洽談合作事宜" }
  ]
};

/* ──────────────────────────────────────────
   作品資料
   ────────────────────────────────────────── */
window.PHOTOS_DATA = [

  /* ====== 分類 1：人像攝影 ====== */
  {
    id:   "portrait",
    name: "Portrait",

    albums: [

   /* ── 攝影集：Rin ── */
         {
           id:    "rin",
           name:  "Rin",
           date:  "",
           cover: "IMG_0141.jpg",
   
           photos: [
             { file: "IMG_0001.jpg" },
             { file: "IMG_0002.jpg" },
             { file: "IMG_0003.jpg" },
             { file: "IMG_0004.jpg" },
             { file: "IMG_0005.jpg" },
             { file: "IMG_0006.jpg" },
             { file: "IMG_0007.jpg" },
             { file: "IMG_0008.jpg" },
             { file: "IMG_0009.jpg" },
             { file: "IMG_0010.jpg" },
             { file: "IMG_0011.jpg" },
             { file: "IMG_0012.jpg" },
             { file: "IMG_0013.jpg" },
             { file: "IMG_0014.jpg" },
             { file: "IMG_0015.jpg" },
             { file: "IMG_0016.jpg" },
             { file: "IMG_0017.jpg" },
             { file: "IMG_0018.jpg" },
             { file: "IMG_0019.jpg" },
             { file: "IMG_0020.jpg" },
             { file: "IMG_0021.jpg" },
             { file: "IMG_0022.jpg" },
             { file: "IMG_0023.jpg" },
             { file: "IMG_0024.jpg" },
             { file: "IMG_0025.jpg" },
             { file: "IMG_0026.jpg" },
             { file: "IMG_0027.jpg" },
             { file: "IMG_0028.jpg" },
             { file: "IMG_0029.jpg" },
             { file: "IMG_0030.jpg" },
             { file: "IMG_0031.jpg" },
             { file: "IMG_0032.jpg" },
             { file: "IMG_0033.jpg" },
             { file: "IMG_0034.jpg" },
             { file: "IMG_0035.jpg" },
             { file: "IMG_0036.jpg" },
             { file: "IMG_0037.jpg" },
             { file: "IMG_0038.jpg" },
             { file: "IMG_0039.jpg" },
             { file: "IMG_0040.jpg" },
             { file: "IMG_0041.jpg" },
             { file: "IMG_0042.jpg" },
             { file: "IMG_0043.jpg" },
             { file: "IMG_0044.jpg" },
             { file: "IMG_0045.jpg" },
             { file: "IMG_0046.jpg" },
             { file: "IMG_0047.jpg" },
             { file: "IMG_0048.jpg" },
             { file: "IMG_0049.jpg" },
             { file: "IMG_0050.jpg" },
             { file: "IMG_0051.jpg" },
             { file: "IMG_0052.jpg" },
             { file: "IMG_0053.jpg" },
             { file: "IMG_0054.jpg" },
             { file: "IMG_0055.jpg" },
             { file: "IMG_0056.jpg" },
             { file: "IMG_0057.jpg" },
             { file: "IMG_0058.jpg" },
             { file: "IMG_0059.jpg" },
             { file: "IMG_0060.jpg" },
             { file: "IMG_0061.jpg" },
             { file: "IMG_0062.jpg" },
             { file: "IMG_0063.jpg" },
             { file: "IMG_0064.jpg" },
             { file: "IMG_0065.jpg" },
             { file: "IMG_0066.jpg" },
             { file: "IMG_0067.jpg" },
             { file: "IMG_0068.jpg" },
             { file: "IMG_0069.jpg" },
             { file: "IMG_0070.jpg" },
             { file: "IMG_0071.jpg" },
             { file: "IMG_0072.jpg" },
             { file: "IMG_0073.jpg" },
             { file: "IMG_0074.jpg" },
             { file: "IMG_0075.jpg" },
             { file: "IMG_0076.jpg" },
             { file: "IMG_0077.jpg" },
             { file: "IMG_0078.jpg" },
             { file: "IMG_0079.jpg" },
             { file: "IMG_0080.jpg" },
             { file: "IMG_0081.jpg" },
             { file: "IMG_0082.jpg" },
             { file: "IMG_0083.jpg" },
             { file: "IMG_0084.jpg" },
             { file: "IMG_0085.jpg" },
             { file: "IMG_0086.jpg" },
             { file: "IMG_0087.jpg" },
             { file: "IMG_0088.jpg" },
             { file: "IMG_0089.jpg" },
             { file: "IMG_0090.jpg" },
             { file: "IMG_0091.jpg" },
             { file: "IMG_0092.jpg" },
             { file: "IMG_0093.jpg" },
             { file: "IMG_0094.jpg" },
             { file: "IMG_0095.jpg" },
             { file: "IMG_0096.jpg" },
             { file: "IMG_0097.jpg" },
             { file: "IMG_0098.jpg" },
             { file: "IMG_0099.jpg" },
             { file: "IMG_0100.jpg" },
             { file: "IMG_0101.jpg" },
             { file: "IMG_0102.jpg" },
             { file: "IMG_0103.jpg" },
             { file: "IMG_0104.jpg" },
             { file: "IMG_0105.jpg" },
             { file: "IMG_0106.jpg" },
             { file: "IMG_0107.jpg" },
             { file: "IMG_0108.jpg" },
             { file: "IMG_0109.jpg" },
             { file: "IMG_0110.jpg" },
             { file: "IMG_0111.jpg" },
             { file: "IMG_0112.jpg" },
             { file: "IMG_0113.jpg" },
             { file: "IMG_0114.jpg" },
             { file: "IMG_0115.jpg" },
             { file: "IMG_0116.jpg" },
             { file: "IMG_0117.jpg" },
             { file: "IMG_0118.jpg" },
             { file: "IMG_0119.jpg" },
             { file: "IMG_0120.jpg" },
             { file: "IMG_0121.jpg" },
             { file: "IMG_0122.jpg" },
             { file: "IMG_0123.jpg" },
             { file: "IMG_0124.jpg" },
             { file: "IMG_0125.jpg" },
             { file: "IMG_0126.jpg" },
             { file: "IMG_0127.jpg" },
             { file: "IMG_0128.jpg" },
             { file: "IMG_0129.jpg" },
             { file: "IMG_0130.jpg" },
             { file: "IMG_0131.jpg" },
             { file: "IMG_0132.jpg" },
             { file: "IMG_0133.jpg" },
             { file: "IMG_0134.jpg" },
             { file: "IMG_0135.jpg" },
             { file: "IMG_0136.jpg" },
             { file: "IMG_0137.jpg" },
             { file: "IMG_0138.jpg" },
             { file: "IMG_0139.jpg" },
             { file: "IMG_0140.jpg" },
             { file: "IMG_0141.jpg" },
             { file: "IMG_0142.jpg" },
             { file: "IMG_0143.jpg" },
             { file: "IMG_0144.jpg" },
             { file: "IMG_0145.jpg" },
             { file: "IMG_0146.jpg" },
             { file: "IMG_0147.jpg" },
             { file: "IMG_0148.jpg" },
             { file: "IMG_0149.jpg" },
             { file: "IMG_0150.jpg" },
           ]
         },

      /* ── 攝影集：小惠 ── */
      {
        id:    "xiao-hui",
        name:  "小惠",
        date:  "",
        cover: "IMG_0001.jpg",

        photos: [
          { file: "IMG_0001.jpg" },
          { file: "IMG_0002.jpg" },
          { file: "IMG_0003.jpg" },
        ]
      },

    ]
  },

     /* ====== 分類 2：婚禮紀實 ====== */
  {
    id:   "wedding",       // 資料夾名稱，只能用英文/數字/橫線
    name: "Wedding",      // 顯示名稱

    albums: [

      /* ── 攝影集：靜茹 ── */
      {
        id:    "2026-01-01-jingru",   // 資料夾名稱
        name:  "靜茹",                // 顯示名稱
        date:  "2026.01.01",          // 日期（選填，留空 "" 則不顯示）
        cover: "IMG_0001.jpg",        // 封面照片檔名（留空 "" 則自動用第一張）

        photos: [
          { file: "IMG_0001.jpg" },
          { file: "IMG_0002.jpg" },
          { file: "IMG_0003.jpg" },
          { file: "IMG_0004.jpg" },
          { file: "IMG_0005.jpg" },
          // 新增照片：複製上面一行，改檔名就好
        ]
      },

      /* ── 攝影集：意涵 ── */
      {
        id:    "2026-02-02-yihan",
        name:  "意涵",
        date:  "2026.02.02",
        cover: "IMG_0002.jpg",

        photos: [
          { file: "IMG_0001.jpg" },
          { file: "IMG_0002.jpg" },
          { file: "IMG_0003.jpg" },
          { file: "IMG_0004.jpg" },
        ]
      },

      /* ── 攝影集：與西 ── */
      {
        id:    "2026-03-03-yuxi",
        name:  "與西",
        date:  "2026.03.03",
        cover: "IMG_0001.jpg",

        photos: [
          { file: "IMG_0001.jpg" },
          { file: "IMG_0002.jpg" },
          { file: "IMG_0003.jpg" },
        ]
      },

      /* ── 新增婚禮攝影集範例（複製這個區塊）── */
      /*
      {
        id:    "2026-04-04-mingzhi",   // 改這裡（英文）
        name:  "明志",                  // 改這裡（顯示名稱）
        date:  "2026.04.04",            // 改這裡
        cover: "IMG_0001.jpg",          // 改這裡

        photos: [
          { file: "IMG_0001.jpg" },
          { file: "IMG_0002.jpg" },
        ]
      },
      */

    ]
  },
   

  /* ====== 新增分類範例（複製這個區塊）====== */
  /*
  {
    id:   "landscape",     // 改這裡（英文）
    name: "風景",           // 改這裡

    albums: [
      {
        id:    "alishan-2026",
        name:  "阿里山",
        date:  "2026.05.01",
        cover: "IMG_0001.jpg",
        photos: [
          { file: "IMG_0001.jpg" },
        ]
      },
    ]
  },
  */

];
