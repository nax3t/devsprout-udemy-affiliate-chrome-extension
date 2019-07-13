var affiliateStuff = '?ranMID=39197&ranEAID=O*yDCFDQTmY&ranSiteID=O.yDCFDQTmY-pbBV5G_YA1uxwpEcfTPfUg&LSNPUBID=O*yDCFDQTmY';
var link = window.location.href;
if (link.includes(affiliateStuff)) {
  console.log('Already included');
} else {
  console.log('Not included');
  window.location.href = link+=affiliateStuff;
}