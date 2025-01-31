/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./content/index.js ***!
  \**************************/
(async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

  const nav = document.querySelector('.oneplayer-root');
  if(nav === null) {return;}
  const tipWidget = createDomElement(`
    <button type="button" style="padding: 10px;background-color: #464EB8;color: white;width: 100px;margin: 5px;">
      <span style="display: block; font: var(--devsite-link-font,500 14px/20px var(--devsite-primary-font-family));">Download audio</span>
    </button>
  `);

  nav.prepend(tipWidget);
})();

function createDomElement(html) {
  const dom = new DOMParser().parseFromString(html, 'text/html');  
  const elem=dom.body.firstElementChild;
  elem.addEventListener('click', function(){ DownloadAudio();}, false);
  return elem;
}

async function DownloadAudio(){
  console.log("Download Audio");
    const response = await chrome.runtime.sendMessage({ greeting: 'downloadAudio' });
    console.log({response});
}
/******/ })()
;
//# sourceMappingURL=content.js.map