---
sidebar_label: singleRequest
title: singleRequest
---          

@short: defines whether files are sent in one request

@signature: {'singleRequest?: boolean;'}

@default: false

@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	singleRequest:true
    }
});

@descr:
