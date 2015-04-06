chrome.runtime.onInstalled.addListener(function() {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
            chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostSuffix: 'clarin.com' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function callback(tab){
    chrome.tabs.sendMessage(tab.id, 'deletepopup');
});
