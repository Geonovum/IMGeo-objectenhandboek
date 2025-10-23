 function jiraHelpdesk(callback) {
    var jhdScript = document.createElement('script');
    jhdScript.type = 'text/javascript';  
    jhdScript.setAttribute('data-jsd-embedded', null);
    jhdScript.setAttribute('data-key', 'a1b2eab7-f8ab-4bf1-a347-5dc2aab179eb');  
    jhdScript.setAttribute('data-base-url', 'https://jsd-widget.atlassian.com'); 
     jhdScript.src='https://jsd-widget.atlassian.com/assets/embed.js';
     if(jhdScript.readyState){
        jhdScript.onreadystatechange = function() {
            if ( jhdScript.readyState === 'loaded' || jhdScript.readyState === 'complete' ) {
                jhdScript.onreadystatechange = null;callback();
            }
        };
    } 
    else {
        jhdScript.onload = function() {
            callback();
        };
    } 
    document.getElementsByTagName('head')[0].appendChild(jhdScript);
}
  jiraHelpdesk(function() {var DOMContentLoaded_event = document.createEvent('Event');  DOMContentLoaded_event.initEvent('DOMContentLoaded', true, true);window.document.dispatchEvent(DOMContentLoaded_event);});
