---
sidebar_label: autosend
title: autosend
---          

@short: enables automatic sending of the added file
	
@default:false
@type: boolean
@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	autosend:false
   	}
});

@template:	api_config
@descr:


