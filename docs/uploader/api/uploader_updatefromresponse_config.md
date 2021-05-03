---
sidebar_label: updateFromResponse
title: updateFromResponse
---          

@short:  updates file attributes with data from a server response

@signature: {'updateFromResponse?: boolean;'}

@default: true

@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	updateFromResponse:false
   	}
});

@template:	api_config
@descr:
