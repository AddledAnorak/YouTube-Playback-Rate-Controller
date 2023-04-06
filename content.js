chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
    
    document.getElementsByTagName('video')[0].playbackRate = request.speed;

    senderResponse({
        confirmation: "content execution confirmed"
    });

});