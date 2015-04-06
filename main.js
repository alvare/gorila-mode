chrome.runtime.onMessage.addListener(function callback(){
    function remove(el){
        if (el) {
            el.parentNode.removeChild(el);
        }
    }

    var ids = ['#ingresar_paseMainWrapper', '#cboxOverlay', '#colorbox'];
    ids.forEach(function(id){
        console.log('Removing ' + id);
        remove(document.querySelector(id));
    });
});
