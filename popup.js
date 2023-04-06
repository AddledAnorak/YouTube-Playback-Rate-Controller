document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.set').addEventListener('click', e => {
        e.preventDefault();

        chrome.runtime.sendMessage({speed: document.getElementById('speed').value}, response => {
            console.log(response.confirmation + "by popupscript");
        });

    });
});