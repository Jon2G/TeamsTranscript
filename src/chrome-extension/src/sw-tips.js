console.log('sw-tips.js');
//const ffmpeg = require('js-ffmpeg');

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.greeting === 'downloadAudio') {
    debugger;
    const videoManifestUrl = await chrome.storage.local.get('videomanifest');
    await sendResponse({ downloadAudio: videoManifestUrl });
    // TODO: Implement download audio

console.log({videoManifestUrl});
  try {
    importScripts("/src/vendor/ffmpeg-core.js", "/src/vendor/ffmpeg.min.js");
  } catch (e) {
    console.error(e);
  }

  const corePath = chrome.runtime.getURL("src/vendor/ffmpeg-core.js");
  const settings = { corePath, log: true };

  ffmpeg = await FFmpeg.createFFmpeg(settings);
  await ffmpeg.load();




    return true;
  }
});
