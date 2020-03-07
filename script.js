var affiliateStuff = '?ranMID=39197&ranEAID=O*yDCFDQTmY&ranSiteID=O.yDCFDQTmY-pbBV5G_YA1uxwpEcfTPfUg&LSNPUBID=O*yDCFDQTmY';
var re = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/*/);
var re2 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\/lecture\/\d+#/);
var re3 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\/lecture\/\d+#overview/)
var link = window.location.href;
if (re2.test(link) && !re3.test(link)) {
  setTimeout(function() {
    window.location.href = link;
  }, 1000)
} else if(!link.includes(affiliateStuff) && re.test(link) && !re3.test(link) && !link.includes('https://www.udemy.com/message/')) {
  window.location.href = link+=affiliateStuff;
}