---
sidebar_label: attachHTML()
title: JavaScript Layout - attachHTML Method 
description: You can explore the attachHTML method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attachHTML()

@short: adds an HTML content into a dhtmlxLayout cell

@signature: {'attachHTML(html: string): void;'}

@params:
`html: string` - an HTML content to be added into a cell

@example:
var layout = new dhx.Layout({width:"400px", height:"600px"});
var html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);

@descr:
