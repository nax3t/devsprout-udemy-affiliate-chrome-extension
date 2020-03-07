var affiliateStuff = '?ranMID=39197&ranEAID=O*yDCFDQTmY&ranSiteID=O.yDCFDQTmY-pbBV5G_YA1uxwpEcfTPfUg&LSNPUBID=O*yDCFDQTmY';
var link = window.location.href;
var re0 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/*/);
var re1 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\/#questions\/\d*\/*/);
if(re1.test(link)) {
  var kebab = new RegExp(/(\w+)-(\w)([\w-]*)/);
  var courseSlug = link.match(kebab)[0]
  var questionId = courseSlug === 'the-web-developer-bootcamp' ? '3861710' : '6912202';
  link = link.replace(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\//, 'https://www.udemy.com/course/'+courseSlug+'/learn/lecture/'+questionId);
}
var re2 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\/lecture\/\d+#/);
var re3 = new RegExp(/https\:\/\/www\.udemy\.com\/course\/([\w-]+)\/learn\/lecture\/\d+#overview/)
if (re2.test(link) && !re3.test(link)) {
  setTimeout(function() {
    window.location.href = link;
  }, 1000)
} else if(!link.includes(affiliateStuff) && re0.test(link) && !re3.test(link) && !link.includes('https://www.udemy.com/message/')) {
  window.location.href = link+=affiliateStuff;
}