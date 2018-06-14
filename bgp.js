chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  var block = { cancel: true },
      allow = {};
      
      if( details.url.indexOf('supervisor.js') != -1){
        console.log('block supervisor');
        return block;
      }

  return allow;
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);
