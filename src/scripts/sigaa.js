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

function start () {
  chrome.runtime.sendMessage ({
    action: 'updateIcon',
    value: true,
  });

  updateState ();
}

start ();
