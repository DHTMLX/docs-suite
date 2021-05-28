---
sidebar_label: unlinkDropArea()
title: JavaScript Uploader - unlinkDropArea Method 
description: You can explore the unlinkDropArea method of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# unlinkDropArea()

@short: unlinks an extra drop area from Uploader

@signature: {'unlinkDropArea(el?: HTMLElement | string): void;'}

@params:
`el: HTMLElement | string` - the drop area or its ID

@example:
<div id="drophere">DROP HERE</div>

// attaches an extra drop area  
vault.uploader.linkDropArea("drophere");

// detaches the extra drop area  
vault.uploader.unlinkDropArea("drophere");

@descr:
