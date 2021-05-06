---
sidebar_label: attachHTML
title: attachHTML
---          

@short: adds an HTML content into a dhtmlxWindow

@signature: {'attachHTML(html: string): void;'}

@params:
- html		string		an HTML content to be added into a window

@example:
var dhxWindow = new dhx.Window({title: "Window"});
var html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();



@descr:


**Related sample**:
- [Window. Attach HTML To Window](https://snippet.dhtmlx.com/6uelt44m)





@related: window/how_to_start.md
window/usage.md#attaching-content
