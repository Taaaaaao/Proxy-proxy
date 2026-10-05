function FindProxyForURL(url, host) {
    var proxyserver = '127.0.0.1:9050';
    var proxylist = new Array(
        "spriters-resource.com",
				"steamdb.info",
        "store.steampowered.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            return "PROXY " + proxyserver;
        }
    }
    return "DIRECT";
}