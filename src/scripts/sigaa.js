function updateState () {
  const port = chrome.runtime.connect ({name: 'sigaa-extension'});
  port.postMessage ({action: 'getState'});
  port.onMessage.addListener (function (response) {
    if (response.response == 'ok') {
      const isActivated = response.state;
      const root = document.documentElement;
      root.dataset.sigaaExtensionActive = isActivated;
    }
  });
}

chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
  if (request.changeState) {
    const root = document.documentElement;
    root.dataset.sigaaExtensionActive = request.newState;
  }
});

async function injectScripts () {
  // "web_accessible_resources": [
  //   {
  //     "resources": ["https://code.iconify.design/2/2.1.2/iconify.min.js"],
  //     "matches": ["https://sig.ifsudestemg.edu.br/sigaa/*"]
  //   }
  // ],
  const script = document.createElement ('script');
  script.src = chrome.extension.getURL (
    'https://code.iconify.design/2/2.1.2/iconify.min.js'
  );
  (document.body || document.head || document.documentElement)
    .appendChild (script);
}

function start () {
  // injectScripts ();

  chrome.runtime.sendMessage ({
    action: 'updateIcon',
    value: true,
  });

  updateState ();
}

start ();
