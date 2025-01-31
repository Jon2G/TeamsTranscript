console.log('sw-tips.js');

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.greeting === 'downloadAudio') {
    debugger;
    const videoManifestUrl = await chrome.storage.local.get('videomanifest');
    await sendResponse({ downloadAudio: videoManifestUrl });
    // TODO: Implement download audio
    //
    return true;
  }
});
