function start () {
  document
    .getElementById ('shutdown-icon')
    .addEventListener ('click', changeState);
}

function changeState () {
  const shutdownButton = document.getElementById ('shutdown-button');
  const state = shutdownButton.dataset.active === 'true';
  const newState = !state;
  shutdownButton.dataset.active = newState;
  const shutdownLabel = document.getElementById ('shutdown-label');

  if (newState) {
    shutdownLabel.textContent = 'Extensão Ativada';
  } else {
    shutdownLabel.textContent = 'Extensão Desativada';
    chrome.runtime.sendMessage ({
      action: 'updateIcon',
      value: false,
    });
  }
}

start ();
