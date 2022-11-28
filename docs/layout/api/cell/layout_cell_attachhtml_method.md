---
sidebar_label: attachHTML()
title: JavaScript Layout - attachHTML Method 
description: You can explore the attachHTML method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attachHTML()

@short: adds an HTML content into a Layout cell

@signature: {'attachHTML(html: string): void;'}

@params:
- `html: string` - an HTML content to be added into a cell

@example:
const layout = new dhx.Layout("layout_container", {
    width:"400px", height:"600px"
});
const html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);

@descr:
