const { BrowserWindow, ipcMain } = require("electron");
const { shell } = require("electron");
const { app } = require("electron");
function onLoad(plugin) {
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
}

module.exports = {
  onLoad,
  onBrowserWindowCreated,
};
