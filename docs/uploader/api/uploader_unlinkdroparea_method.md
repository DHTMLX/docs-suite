---
sidebar_label: unlinkDropArea
title: unlinkDropArea
---          

@short: unlinks an extra drop area from Uploader

@params:

- el 	HTMLElement,string 		the drop area or its ID

@example:
<div id="drophere">DROP HERE</div>

// attaches an extra drop area  
vault.uploader.linkDropArea("drophere");

// detaches the extra drop area  
vault.uploader.unlinkDropArea("drophere");

@template: api_method
@descr:
