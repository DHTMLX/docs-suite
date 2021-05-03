---
sidebar_label: params
title: params
---          

@short:  provides additional parameters for an XMLHttpRequest

@signature: {'params?: {[key: string]: any;};'}

@example:
var vault = new dhx.Vault("vault_container", { 
	uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
		params:{
        	// key:value pairs
    	}
    }
});

@template:	api_config
@descr:
