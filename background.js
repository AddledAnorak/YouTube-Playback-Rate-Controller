chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {speed: request.speed}, response => {
            console.log(response.confirmation + "by background");
        });  
    });
    

    senderResponse({
        confirmation: "background execution confirmed"
    });

});