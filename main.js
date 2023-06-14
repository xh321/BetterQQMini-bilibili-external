const fs = require("fs");
const path = require("path");
const { BrowserWindow, ipcMain } = require("electron");
const { dialog } = require("electron");
const { shell } = require("electron");
const { app } = require("electron");
// 注入js
function injectJS(webContents) {
  const filepath = path.join(__dirname, "renderer.js");
  const filetext = fs.readFileSync(filepath, "utf-8");
  webContents.executeJavaScript(filetext, true);
}

function onLoad(plugin) {
  global.plugin = plugin;
  ipcMain.handle(
    "betterQQNT.bilibili_external.openInExternal",
    async (event, message) => {
      shell.openExternal("https://www.bilibili.com/video/" + message);
      app.quit();
      return true;
    }
  );
}

function onBrowserWindowCreated(window) {
  // window.on("ready-to-show", () => {
  injectJS(window.webContents);
  // });
}

module.exports = {
  onLoad,
  onBrowserWindowCreated,
};
