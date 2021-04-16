---
sidebar_label: fieldName
title: fieldName
---          

@short: sets the name of the file field in the form data

@default:"file"
@type: string
@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	fieldName:"document"
    }
});

@template:	api_config
@descr:
