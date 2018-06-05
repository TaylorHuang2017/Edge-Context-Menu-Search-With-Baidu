
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'http://www.baidu.com/s?wd=' + encodeURIComponent(selection);
  chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "baidu_search",
	title: "Search with Baidu",
	"contexts":["selection"],
	"onclick" : onRequest
});
