// Brug:  node social/build.cjs            (alt)
//        node social/build.cjs static      (kun billeder)
//        node social/build.cjs reels       (kun videoer)
const { closeBrowser } = require("./lib/base.cjs");
const S = require("./lib/static.cjs");

(async () => {
  const what = process.argv[2] || "all";
  if (what === "all" || what === "static") {
    console.log("Billeder …");
    await S.carouselTegn();
    await S.carouselCase();
    await S.igSingle();
    await S.stories();
    await S.highlights();
    await S.fbCompare();
    await S.fbVedligehold();
    await S.fbCover();
    await S.avatar();
  }
  if (what === "all" || what === "reels") {
    console.log("Reels …");
    const R = require("./lib/reels.cjs");
    await R.reel48();
    await R.reelGoogle();
  }
  await closeBrowser();
})().catch((e) => { console.error(e); process.exit(1); });
