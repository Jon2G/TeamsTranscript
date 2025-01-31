console.log('sw-omnibox.js');

    ///////
chrome.webRequest.onBeforeSendHeaders.addListener((req) => {
  console.log('onBeforeSendHeaders');
  console.log({req});
  if(req.url?.includes('videomanifest')){
    var url = req.url;
    console.log('videomanifest');
    console.log({url});
    if(url.lastIndexOf('&alt')>0){
      url = url.substring(0,url.lastIndexOf('&alt'));
      console.log('new url');
      console.log({url});
    }
    //TODO: Magic
  }
  return {requestHeaders: req.requestHeaders};
},{
  urls: ["http://*/*", "https://*/*"],
  types: ["xmlhttprequest"]
},[
  'requestHeaders']);
////////


// Initialize default API suggestions
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      apiSuggestions: ['tabs', 'storage', 'scripting']
    });
    /////

    /////
  }
});
