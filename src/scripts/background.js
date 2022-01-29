function updateState (newState) {
  chrome.storage.sync.set (
    {'sigaa-extension-active': newState},
    function () {}
  );
}

async function getLocalStorageValue (key) {
  return new Promise ((resolve, reject) => {
    try {
      chrome.storage.sync.get (key, function (value) {
        resolve (value);
      });
    } catch (ex) {
      reject (ex);
    }
  });
}

async function getState () {
  return getLocalStorageValue ('sigaa-extension-active');
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

chrome.runtime.onMessage.addListener (function (msg, sender, sendResponse) {
  if (msg.action === 'updateIcon') {
    if (msg.value) {
      updateState ('true');
      changeIcon ('actived');
    } else {
      updateState ('false');
      changeIcon ('deactivated');
    }
  }
});

function updateIcon (activeInfo) {
  chrome.tabs.get (activeInfo.tabId, function (tab) {
    console.log (tab.url);
    if (tab.url.startsWith ('https://sig.ifsudestemg.edu.br/sigaa/')) {
      chrome.action.enable (activeInfo.tabId);
      changeIcon ('actived');
    } else {
      chrome.action.disable (activeInfo.tabId);
      changeIcon ('deactivated');
    }
  });
}

chrome.tabs.onActivated.addListener (activeInfo => updateIcon (activeInfo));

// if (!await getState ()) {
//   updateState ('true');
// }
// console.log (await getState ());
