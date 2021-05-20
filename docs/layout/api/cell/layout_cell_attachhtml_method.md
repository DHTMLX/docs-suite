---
sidebar_label: attachHTML()
title: attachHTML()
---          

@short: adds an HTML content into a dhtmlxLayout cell

@signature: {'attachHTML(html: string): void;'}

@params:
`html: string` - an HTML content to be added into a cell

@example:
var layout = new dhx.Layout({width:"400px", height:"600px"});
var html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);

@descr:
