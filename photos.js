/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    photos.js  ——  設定檔                    ║
 * ║  這是你唯一需要編輯的檔案。新增攝影集只要照格式複製貼上。     ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * 照片放在這裡：
 *   photos/<分類id>/<攝影集id>/DSC_0001.jpg
 *                              DSC_0002.jpg
 *                              ...
 *
 * 照片會依照檔名自動排序（數字排序）。
 */

/* ──────────────────────────────────────────
   網站基本資訊
   ────────────────────────────────────────── */
window.SITE_CONFIG = {
  name: "山本攝影",                        // 左上角名稱 & 頁籤標題

  heroTitle: "<em>Portrait &<br>Wedding</em>",  // 首頁大標題（可用 <br> 換行、<em> 斜體）
  heroDesc:  "業餘攝影師，記錄婚禮與人像的溫度。\n每個瞬間都值得被好好保留。",

  about: {
    heading: "用照片\n留住當下",
    paragraphs: [
      "業餘攝影師，平日在新竹工作。專注婚禮紀實與人像攝影，喜歡捕捉自然光下真實的情感流露。",
      "相信每個微笑、每個眼神交會，都是值得珍藏的記憶。"
    ]
  },

  contact: [
    { label: "Email", value: "canonsogood@gmail.com" },
    { label: "IG",    value: "canonsogood" },
    { label: "合作",  value: "歡迎來信洽談婚禮攝影" }
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
        cover: "DSC_0001.jpg",

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
          { file: "DSC_0003.jpg" },
          { file: "DSC_0004.jpg" },
          { file: "DSC_0005.jpg" },
        ]
      },

      /* ── 攝影集：小惠 ── */
      {
        id:    "xiao-hui",
        name:  "小惠",
        date:  "",
        cover: "DSC_0001.jpg",

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
          { file: "DSC_0003.jpg" },
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
        cover: "DSC_0001.jpg",        // 封面照片檔名（留空 "" 則自動用第一張）

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
          { file: "DSC_0003.jpg" },
          { file: "DSC_0004.jpg" },
          { file: "DSC_0005.jpg" },
          // 新增照片：複製上面一行，改檔名就好
        ]
      },

      /* ── 攝影集：意涵 ── */
      {
        id:    "2026-02-02-yihan",
        name:  "意涵",
        date:  "2026.02.02",
        cover: "DSC_0002.jpg",

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
          { file: "DSC_0003.jpg" },
          { file: "DSC_0004.jpg" },
        ]
      },

      /* ── 攝影集：與西 ── */
      {
        id:    "2026-03-03-yuxi",
        name:  "與西",
        date:  "2026.03.03",
        cover: "DSC_0001.jpg",

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
          { file: "DSC_0003.jpg" },
        ]
      },

      /* ── 新增婚禮攝影集範例（複製這個區塊）── */
      /*
      {
        id:    "2026-04-04-mingzhi",   // 改這裡（英文）
        name:  "明志",                  // 改這裡（顯示名稱）
        date:  "2026.04.04",            // 改這裡
        cover: "DSC_0001.jpg",          // 改這裡

        photos: [
          { file: "DSC_0001.jpg" },
          { file: "DSC_0002.jpg" },
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
        cover: "DSC_0001.jpg",
        photos: [
          { file: "DSC_0001.jpg" },
        ]
      },
    ]
  },
  */

];
