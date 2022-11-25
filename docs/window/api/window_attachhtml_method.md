---
sidebar_label: attachHTML()
title: JavaScript Window - attachHTML Method 
description: You can explore the attachHTML method of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attachHTML()

@short: adds an HTML content into a dhtmlxWindow

@signature: {'attachHTML(html: string): void;'}

@params:
`html: string` - an HTML content to be added into a window

@example:
const dhxWindow = new dhx.Window({title: "Window"});
const html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();

@descr:

**Related sample**: [Window. Attach HTML](https://snippet.dhtmlx.com/6uelt44m)

[comment]: # (@related: window/how_to_start.md window/usage.md#attaching-content)
