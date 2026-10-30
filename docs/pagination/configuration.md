---
sidebar_label: Configuration
title: JavaScript Pagination - Configuration 
description: You can explore the configuration of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Input width

![DHTMLX Pagination control with a widened page number input and navigation arrows in DHTMLX Suite](/img/pagination/combo_width.png)

The default width of the pagination input fits its maximum content. Set the [`inputWidth`](pagination/api/pagination_inputwidth_config.md) property to change this width:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered",
    inputWidth: 220
});
~~~

**Related sample**: [Pagination. Input width](https://snippet.dhtmlx.com/1fttbjh9)

## Initial page

Use the [`page`](pagination/api/pagination_page_config.md) configuration property to set the initial page. The property takes the zero-based index of the page:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered",
    page: 4  // sets the fifth page as initial one
});
~~~

The default value `0` sets the first page as the initial one.

## Number of items per page

![DHTMLX Pagination showing nine items per page in a grid above the navigation bar in DHTMLX Suite](/img/pagination/page_size.png)

Use the [`pageSize`](pagination/api/pagination_pagesize_config.md) configuration property to define the number of items that the related widget displays per page. The default value is `10`. For example, the following code sets 9 items per page:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    pageSize: 9
});
~~~
