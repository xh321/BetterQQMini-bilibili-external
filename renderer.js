export function onLoad() {
  var avid = __wxConfig.appLaunchInfo.query.avid;
  console.log("Avid", avid);
  var bvid = __wxConfig.appLaunchInfo.query.bvid;
  console.log("Bvid", bvid);
  if (bvid != null) window.bilibili_external.openInExternal(bvid);
  else if (avid != null) window.bilibili_external.openInExternal("av" + avid);
}
