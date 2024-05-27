---
sidebar_label: singleRequest
title: JavaScript Uploader - singleRequest Config 
description: You can explore the singleRequest config of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# singleRequest

@short: defines whether files are sent in one request

@signature: {'singleRequest?: boolean;'}

@default: false

@example:
const vault = new dhx.Vault("vault_container", { 
    uploader:{
        // obligatory, the path for upload
        target:"/upload"
        singleRequest:true
    }
});

@descr:
