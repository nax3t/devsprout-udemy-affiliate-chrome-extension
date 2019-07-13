chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({},function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      chrome.tabs.executeScript(tabs[i].id, {code: `if (window.location.href.includes('/instructor/communication')) (document.querySelector('a[href="/user/zarko-maslaric/"]')) || (document.querySelector('a[href="/user/louli/"]') || document.querySelector('a[href="/user/andrewsenger/"]') || document.querySelector('a[href="/user/darrell-pawson/"]')) ? ${tabs[i].id} : null;`}, function(results) {
      	if(results && results[0]) {
      		chrome.tabs.remove(results[0]);
      	}
      });
    }
  });
});