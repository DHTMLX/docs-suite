---
sidebar_label: save()
title: DataProxy - save Method 
hide_title: true
description: You can explore the save method of DataProxy in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# save()

@short: sends an AJAX request to the server

@signature: {'save?: (data: any, mode: string) => Promise<any>;'}

@params:
- `data: object` - mandatory, data to be sent to the server
- `mode: string` - mandatory, a mode of the request ("delete", "update", "insert")

@returns:
A promise of the data object

@example:
proxy.save({ a: "bad" }, "delete").then(function() {
   console.log("'Bad' is deleted!");
});
