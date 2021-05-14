---
sidebar_label: autosend
title: autosend
---          

@short: enables automatic sending of the added file

@signature: {'autosend?: boolean;'}

@default: false

@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	autosend:false
   	}
});

@descr:
