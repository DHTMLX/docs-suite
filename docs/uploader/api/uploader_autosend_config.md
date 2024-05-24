---
sidebar_label: autosend
title: JavaScript Uploader - autosend Config 
description: You can explore the autosend config of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# autosend

@short: enables automatic sending of the added file

@signature: {'autosend?: boolean;'}

@default: false

@example:
const vault = new dhx.Vault("vault_container", { 
    uploader:{
        // obligatory, the path for upload
        target:"/upload"
        autosend:false
       }
});

@descr:
