async function start () {
  console.log ('popup.js start');

  const shutdownIcon = document.getElementById ('shutdown-icon');

  shutdownIcon.addEventListener ('click', changeState);

  updateState ();
}

function updateState () {
  const port = chrome.runtime.connect ({name: 'sigaa-extension'});
  port.postMessage ({action: 'getState'});
  port.onMessage.addListener (function (response) {
    if (response.response == 'ok') {
      const shutdownButton = document.getElementById ('shutdown-button');
      const isActivated = response.state;
      console.log ('extension ' + isActivated);
      shutdownButton.dataset.active = isActivated === 'true' ? 'true' : 'false';
    }
  });
}

function updateIcon (value) {
  chrome.runtime.sendMessage ({
    action: 'updateIcon',
    value: value,
  });
}

function activeExtension (value) {
  chrome.runtime.sendMessage ({
    action: 'activeExtension',
    value: value,
  });
}

function sendMessageToContentScript (newState) {
  chrome.tabs.query ({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage (
      tabs[0].id,
      {changeState: true, newState: newState},
      function (response) {}
    );
  });
}

function changeState () {
  const shutdownButton = document.getElementById ('shutdown-button');
  const state = shutdownButton.dataset.active === 'true';
  const newState = !state;
  shutdownButton.dataset.active = newState;
  const shutdownLabel = document.getElementById ('shutdown-label');

  if (newState) {
    shutdownLabel.textContent = 'Extensão Ativada';
    activeExtension (true);
  } else {
    shutdownLabel.textContent = 'Extensão Desativada';
    activeExtension (false);
  }
  sendMessageToContentScript (newState);
}

window.onload = function () {
  start ();
};
