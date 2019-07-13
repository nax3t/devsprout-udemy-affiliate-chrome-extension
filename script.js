var affiliateStuff = '?ranMID=39197&ranEAID=O*yDCFDQTmY&ranSiteID=O.yDCFDQTmY-pbBV5G_YA1uxwpEcfTPfUg&LSNPUBID=O*yDCFDQTmY';
var link = window.location.href;
if (!link.includes(affiliateStuff) && link.split('/').length === 5 && !link.includes('https://www.udemy.com/message/')) {
  window.location.href = link+=affiliateStuff;
}