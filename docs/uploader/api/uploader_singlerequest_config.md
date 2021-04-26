---
sidebar_label: singleRequest
title: singleRequest
---          

@short: defines whether files are sent in one request

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-uploader/sources/types.d.ts)
	
@default: false

@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	singleRequest:true
    }
});

@template:	api_config
@descr:
