---
sidebar_label: data
title: JavaScript Pagination - data Config 
description: You can explore the data config of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: the data collection of a widget to set into the pagination

@signature: {'data: DataCollection;'}

@example:
const list = new dhx.List("widget_container", {
    css: "dhx_widget--bordered"
});

list.data.parse(widget_data); /*!*/

const pagination = new dhx.Pagination("pagination_container", {
    data: list.data /*!*/
});

@descr:

**Related sample**: [Pagination. Pagination with List](https://snippet.dhtmlx.com/6sju9jl5)
