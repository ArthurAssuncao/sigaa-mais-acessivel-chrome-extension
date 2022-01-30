const storageKey = 'sigaa-extension-active';

async function updateState (newState) {
  const data = {
    'sigaa-extension-active': newState,
  };
  chrome.storage.sync.set (data, function () {
    console.log ('Value is set to ' + data[storageKey]);
  });
}

async function getLocalStorageValue (key) {
  return new Promise ((resolve, reject) => {
    try {
      chrome.storage.sync.get (key, function (value) {
        console.log ('teste', value[key]);
        resolve (value[key]);
      });
    } catch (ex) {
      reject (ex);
    }
  });
}

async function getState () {
  return await getLocalStorageValue (storageKey);
}

function changeIcon (value) {
  if (value === 'actived') {
    chrome.action.setIcon ({
      path: {
        '16': '/img/logo-16.png',
        '19': '/img/logo-16.png',
        '32': '/img/logo-48.png',
        '48': '/img/logo-48.png',
        '128': '/img/logo-128.png',
      },
    });
  } else {
    chrome.action.setIcon ({
      path: {
        '16': '/img/logo-gray-16.png',
        '19': '/img/logo-gray-16.png',
        '32': '/img/logo-gray-48.png',
        '48': '/img/logo-gray-48.png',
        '128': '/img/logo-gray-128.png',
      },
    });
  }
}

chrome.runtime.onConnect.addListener (function (port) {
  port.onMessage.addListener (function (msg) {
    if (msg.action === 'getState') {
      chrome.storage.sync.get (storageKey, function (value) {
        port.postMessage ({response: 'ok', state: value[storageKey]});
      });
    }
  });
});

chrome.runtime.onMessage.addListener (function (msg, sender, sendResponse) {
  if (msg.action === 'activeExtension') {
    if (msg.value) {
      updateState ('true');
      changeIcon ('actived');
    } else {
      updateState ('false');
      changeIcon ('deactivated');
    }
  } else if (msg.action === 'updateIcon') {
    if (msg.value) {
      changeIcon ('actived');
    } else {
      changeIcon ('deactivated');
    }
  } else if (msg.action === 'getState') {
    chrome.storage.sync.get (storageKey, function (value) {
      sendResponse (value);
    });
  }
});

async function updateIcon (activeInfo, activateExtension = false) {
  chrome.tabs.get (activeInfo.tabId, async function (tab) {
    console.log (tab.url);
    const isActivatedExtension =
      (await getState ()) === 'true' || activateExtension;
    if (tab.url.startsWith ('https://sig.ifsudestemg.edu.br/sigaa/')) {
      chrome.action.enable (activeInfo.tabId);
      if (isActivatedExtension) {
        changeIcon ('actived');
      } else {
        changeIcon ('deactivated');
      }
    } else {
      chrome.action.disable (activeInfo.tabId);
      changeIcon ('deactivated');
    }
  });
}

chrome.tabs.onActivated.addListener (activeInfo => updateIcon (activeInfo));

async function defineState () {
  const isActivated = await getState ();
  console.log (isActivated);
  if (!isActivated) {
    updateState ('true');
  } else {
    console.log (isActivated);
  }
}

defineState ();
