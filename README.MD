# 攝影作品集網站 — 操作說明

---

## 一、第一次上傳到 GitHub Pages（只需做一次）

### 步驟 1：建立 GitHub 帳號
前往 https://github.com 註冊帳號（已有帳號略過）。

### 步驟 2：建立新的 Repository
1. 登入後點右上角「+」→「New repository」
2. Repository name 填：`yourname.github.io`
   （把 yourname 換成你的 GitHub 帳號名稱，**一定要完全一樣**）
3. 設定為「Public」
4. 不要勾選任何額外選項，直接點「Create repository」

### 步驟 3：上傳網站檔案
1. 進入剛建立的 repository 頁面
2. 點「uploading an existing file」（或「Add file」→「Upload files」）
3. 把整個 `portfolio-site` 資料夾內的所有東西拖進去
   （包含 `index.html`、`photos.js`、`photos/` 資料夾）
4. 捲到最下面，點「Commit changes」

### 步驟 4：等待上線
- 通常 1～3 分鐘後，打開 `https://yourname.github.io` 就可以看到網站

---

## 二、資料夾結構

```
portfolio-site/
│
├── index.html          ← 網站主體，不需要改
├── photos.js           ← 設定檔，新增作品在這裡改
│
└── photos/             ← 所有照片放這裡
    ├── wedding/
    │   ├── 2026-01-01-jingru/
    │   │   ├── DSC_0001.jpg
    │   │   ├── DSC_0002.jpg
    │   │   └── DSC_0003.jpg
    │   └── 2026-02-02-yihan/
    │       ├── DSC_0001.jpg
    │       └── DSC_0002.jpg
    └── portrait/
        └── xiao-an/
            ├── DSC_0001.jpg
            └── DSC_0002.jpg
```

---

## 三、新增一個攝影集（日常操作）

### A. 上傳照片

在 GitHub 的 repository 裡，進入對應的資料夾：
```
photos / 分類id / 攝影集id /
```

點「Add file」→「Upload files」，把照片拖進去，按「Commit changes」。

照片檔名建議統一格式，例如 `DSC_0001.jpg`、`DSC_0002.jpg`，
網站會依照**檔名自動排序**。

---

### B. 編輯 photos.js

在 GitHub 裡點進 `photos.js`，點右上角鉛筆圖示（Edit this file）。

#### 新增攝影集（在現有分類內）

找到對應的分類，在 `albums: [ ]` 裡面加入：

```javascript
{
  id:    "2026-04-04-mingzhi",   // 資料夾名稱（英文+數字+橫線）
  name:  "明志",                  // 顯示在網站上的名稱
  date:  "2026.04.04",            // 日期，不需要可留 ""
  cover: "DSC_0005.jpg",          // 你想當封面的檔名，留 "" 自動用第一張

  photos: [
    { file: "DSC_0001.jpg" },
    { file: "DSC_0002.jpg" },
    { file: "DSC_0003.jpg" },
    { file: "DSC_0004.jpg" },
    { file: "DSC_0005.jpg" },
  ]
},
```

完成後按「Commit changes」，等 1 分鐘網站就更新了。

---

#### 新增分類

在 `PHOTOS_DATA` 陣列的最後面（最後一個 `}` 之後、`]` 之前）加入：

```javascript
,
{
  id:   "landscape",
  name: "風景",
  albums: [
    {
      id:    "alishan-2026",
      name:  "阿里山",
      date:  "2026.05.01",
      cover: "DSC_0001.jpg",
      photos: [
        { file: "DSC_0001.jpg" },
        { file: "DSC_0002.jpg" },
      ]
    },
  ]
}
```

---

## 四、修改網站個人資訊

`photos.js` 最上方的 `SITE_CONFIG` 區塊可以修改：

| 欄位 | 說明 |
|------|------|
| `name` | 左上角名稱與頁籤標題 |
| `heroTitle` | 首頁大標題 |
| `heroDesc` | 首頁副標題 |
| `about` | 關於我的內容 |
| `contact` | 聯繫方式 |

---

## 五、常見問題

**Q：照片上傳後網站沒更新？**
A：等 1～2 分鐘，有時 GitHub 需要一點時間。強制重新整理（Ctrl+Shift+R）也有幫助。

**Q：照片顯示不出來？**
A：確認 `photos.js` 裡的 `id` 和實際資料夾名稱完全一致，包含大小寫。

**Q：封面照片顯示錯誤？**
A：確認 `cover` 填的檔名和實際上傳的檔名完全一樣（含副檔名）。

**Q：可以用自己的網域嗎？**
A：可以，在 repository 的 Settings → Pages → Custom domain 填入即可。

---

*如有問題歡迎聯繫建立此網站的人。*
