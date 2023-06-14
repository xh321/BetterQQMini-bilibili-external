const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("bilibili_external", {
  openInExternal: (bvid) =>
    ipcRenderer.invoke("betterQQNT.bilibili_external.openInExternal", bvid)
});
