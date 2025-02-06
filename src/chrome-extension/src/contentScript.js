(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const nav = document.querySelector('.oneplayer-root');
  if (nav === null) {
    return;
  }
  const tipWidget = createDomElement(`
    <button type="button" style="padding: 10px;background-color: #464EB8;color: white;width: 100px;margin: 5px;">
      <span style="display: block; font: var(--devsite-link-font,500 14px/20px var(--devsite-primary-font-family));">Download audio</span>
    </button>
  `);

  nav.prepend(tipWidget);
})();

function createDomElement(html) {
  const dom = new DOMParser().parseFromString(html, 'text/html');
  const elem = dom.body.firstElementChild;
  elem.addEventListener(
    'click',
    function () {
      DownloadAudio();
    },
    false
  );
  return elem;
}

async function DownloadAudio() {

  console.log('Download Audio');
  const videoManifestUrl = await chrome.storage.local.get('videomanifest');

  //send to background.js
  chrome.runtime.sendMessage({ greeting: 'downloadAudio' }, function (response) {
    console.log(response);
  })


console.log({ videoManifestUrl });




  // const ffmpegCore = require('@ffmpeg/core');

  // const a = await ffmpegCore({
  //   //mainScriptUrlOrBlob: 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',
  //       locateFile: (path, prefix) => {
  //         debugger;
  //           if (path.endsWith('ffmpeg-core.wasm')) {
  //               return 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.wasm';
  //           }
  //           if (path.endsWith('ffmpeg-core.worker.js')) {
  //               return 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.worker.js';
  //           }
  //           return prefix + path;
  //       },
  //       printErr: message => {}, // need to implement this to detect when ffmpeg's done, see how ffmpeg.wasm does it
  //       print: message => {} // need to implement this to detect when ffmpeg's done, see how ffmpeg.wasm does it
  // });
  // console.log({a});

//   const createFFmpegNpm = require("https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js");;

// const {createFFmpeg} = new createFFmpegNpm.FFmpeg();


//   const ffmpegNpm = createFFmpeg({corePath: 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js'});


//   const ffmpeg = new ffmpegNpm.FFmpeg({ log: true });

// console.log(ffmpeg);

// // const ffmpeg = FFmpeg.createFFmpeg({ log: true });

// (async () => {
//   console.log('Loading');
//   await ffmpeg.load();
//   //ffmpeg.FS('writeFile', 'test.avi', await fetchFile('./test.avi'));
//   //ffmpeg -i audio.ogg -acodec mp3 newfile.mp3
//   await ffmpeg.run('-i', videoManifestUrl,'-acodec','mp3', 'test.mp3');
//   //await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
// })();

  console.log({ videoManifestUrl });
}
