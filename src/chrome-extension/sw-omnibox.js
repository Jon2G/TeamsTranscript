console.log('sw-omnibox.js');

// Initialize default API suggestions
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      apiSuggestions: ['tabs', 'storage', 'scripting']
    });
    /////
    ///////
chrome.webRequest.onBeforeSendHeaders.addListener((req) => {
  console.log('onBeforeSendHeaders');
  req.requestHeaders.forEach(function(header, index){
    console.log(header.name+':', header.value);
    if (headers[header.name.toLowerCase()]) {
      console.log('set header:'+header.name, 'to:'+headers[header.name.toLowerCase()]);
      req.requestHeaders[index].value = headers[header.name.toLowerCase()]
    }
  })
  return {requestHeaders: req.requestHeaders};
},{
  urls: ['https://twitter.com/i/tweet/create'],
  types: ["xmlhttprequest"]
},[
  'blocking',
  'requestHeaders']);
////////
    /////
  }
});

const URL_CHROME_EXTENSIONS_DOC =
  'https://developer.chrome.com/docs/extensions/reference/';
const NUMBER_OF_PREVIOUS_SEARCHES = 4;

// Display the suggestions after user starts typing
chrome.omnibox.onInputChanged.addListener(async (input, suggest) => {
  await chrome.omnibox.setDefaultSuggestion({
    description: 'Enter a Chrome API or choose from past searches'
  });
  const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');
  const suggestions = apiSuggestions.map((api) => {
    return { content: api, description: `Open chrome.${api} API` };
  });
  suggest(suggestions);
});

// Open the reference page of the chosen API
chrome.omnibox.onInputEntered.addListener((input) => {
  chrome.tabs.create({ url: URL_CHROME_EXTENSIONS_DOC + input });
  // Save the latest keyword
  updateHistory(input);
});

async function updateHistory(input) {
  const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');
  apiSuggestions.unshift(input);
  apiSuggestions.splice(NUMBER_OF_PREVIOUS_SEARCHES);
  return chrome.storage.local.set({ apiSuggestions });
}
