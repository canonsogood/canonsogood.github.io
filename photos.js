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

  heroTitle: "<em>Portrait</em>",  // 首頁大標題（可用 <br> 換行、<em> 斜體）
  heroDesc: "業餘攝影師，用心拍攝人像。\n每個瞬間都值得被好好保留。",

  about: {
    heading: "用照片\n留住當下",
    paragraphs: [
      "業餘攝影師，專注人像攝影，喜歡捕捉自然光下真實的情感流露。",
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

  /* ====== 分類 1：房間女孩 ====== */
  {
    id:   "girls-room",
    name: "房間女孩",

    albums: [

   /* ── 攝影集：Rin ── */
         {
           id:    "rin",
           name:  "Rin",
           date:  "",
           cover: "IMG_0084.jpg",
   
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
           ]
         },

      /* ── 攝影集：頑固少女 ── */
      {
        id:    "yun",
        name:  "頑固少女",
        date:  "",
        cover: "IMG_0001.jpg",

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
           ]
         },
       
       ]
     },

  /* ====== 分類 2：外拍 ====== */
  {
    id:   "outdoor",
    name: "外拍",

    albums: [

      /* ── 攝影集：可晴 ── */
      {
        id:    "ke-cing",
        name:  "可晴",
        date:  "",
        cover: "IMG_0038.jpg",

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
        ]
      },

/* ── 攝影集：薇薇 ── */
      {
        id:    "weiwei",
        name:  "薇薇",
        date:  "",
        cover: "IMG_0008.jpg",

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
        ]
      },


       
    ]
  },


  /* ====== 分類 3：旅拍 ====== */
  {
    id:   "indoor",
    name: "旅拍",

    albums: [
      /* ── 攝影集：薇思 ── */
      {
        id:    "wei-si",
        name:  "薇思",
        date:  "",
        cover: "IMG_0043.jpg",

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
           ]
         },

      /* ── 攝影集：9m ── */
      {
        id:    "joanne",
        name:  "Joanne",
        date:  "",
        cover: "IMG_0015.jpg",

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
           ]
         },
       
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
