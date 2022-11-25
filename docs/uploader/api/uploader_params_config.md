---
sidebar_label: params
title: JavaScript Uploader - params Config 
description: You can explore the params config of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# params

@short:  provides additional parameters for an XMLHttpRequest

@signature: {'params?: {[key: string]: any;};'}

@example:
const vault = new dhx.Vault("vault_container", { 
	uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
		params:{
        	// key:value pairs
    	}
    }
});

@descr:
