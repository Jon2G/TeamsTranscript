console.log('sw-tips.js');
//const ffmpeg = require('js-ffmpeg');

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.greeting === 'downloadAudio') {
    debugger;
    const videoManifestUrl = await chrome.storage.local.get('videomanifest');
    await sendResponse({ downloadAudio: videoManifestUrl });
    // TODO: Implement download audio

    chrome.runtime.sendNativeMessage(
  'com.my_company.my_application',
  {videoManifestUrl},
  function (response) {
    console.log('Received ' + response);
  }
);


    return true;
  }
});
