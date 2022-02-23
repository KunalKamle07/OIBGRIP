function clicked(siteName){
    var URL ='';
    if(siteName == 'fb'){
        URL = 'https://www.facebook.com/kunal.kamle.3/'
    }
    if(siteName == 'ig'){
        URL = 'https://www.instagram.com/kunal_k.18/'
    }
    if(siteName == 'gh'){
        URL = 'https://github.com/kunalkamle07'
    }
    if(siteName == 'tw'){
        URL = 'https://twitter.com/kunalkamle07'
    }
    window.open(URL, '_blank');
}