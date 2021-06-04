---
sidebar_label: updateFromResponse
title: JavaScript Uploader - updateFromResponse Config 
description: You can explore the updateFromResponse config of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# updateFromResponse

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

@descr:
