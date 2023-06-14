export function onLoad() {
  setTimeout(() => {
    var bvid = __wxConfig.appLaunchInfo.query.bvid;
    console.log("Bvid", bvid);
    if (bvid != null) window.bilibili_external.openInExternal(bvid);
  }, 1000);
}