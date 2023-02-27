---
sidebar_label: fieldName
title: JavaScript Uploader - fieldName Config 
description: You can explore the fieldName config of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# fieldName

@short: sets the name of the file field in the form data

@signature: {'fieldName?: string;'}

@default: "file"

@example:
const vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	fieldName:"document"
    }
});

@descr:
