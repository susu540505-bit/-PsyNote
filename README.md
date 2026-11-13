# PsyNote｜心理學知識筆記

PsyNote 是一個以繁體中文介紹心理學入門知識的響應式網站。使用者可以瀏覽心理學分類、閱讀基礎筆記，並透過首頁小測驗複習概念。

## 專案功能
- 心理學知識首頁與分類導覽
- 心理學入門、認知心理學、生理心理學、社會心理學內容頁
- 心理學互動小測驗
- 手機與桌面響應式版面

## 使用技術
HTML5、CSS3、JavaScript（原生），可直接使用 GitHub Pages 部署。

## 專案結構
```text
PsyNote/
├── AGENTS.md
├── index.html
├── css/style.css
├── js/script.js
├── pages/
│   ├── introduction.html
│   ├── cognitive.html
│   ├── biological.html
│   └── social.html
└── README.md
```

## 本機預覽
下載專案後，直接以瀏覽器開啟根目錄的 `index.html` 即可。

## 發布到 GitHub Pages
1. 在 GitHub 建立一個新的 Repository，例如 `PsyNote`。
2. 將本資料夾內所有檔案上傳至 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按下 **Save**。
6. 等待 GitHub Pages 部署完成，網站網址通常會是 `https://你的GitHub帳號.github.io/PsyNote/`。

## AI 協作方式
開始修改前，先閱讀 `AGENTS.md`。新增頁面時，請沿用既有版型、色彩、內容順序與檔案命名規則。
