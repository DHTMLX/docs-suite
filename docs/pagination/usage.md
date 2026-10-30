---
sidebar_label: Work with Pagination
title: JavaScript Pagination - Work with Pagination 
description: You can explore how to work with Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Pagination

## Set and get the active page {#settinggetting-the-active-page}

Use the [](pagination/api/pagination_setpage_method.md) method to set the active page in a widget. The method takes the index of a page as a parameter:

~~~js
pagination.setPage(0);
~~~

The [](pagination/api/pagination_getpage_method.md) method returns the index of the active page:

~~~js
const pageIndex = pagination.getPage();
// -> 3
~~~

**Related sample**: [Pagination. Get / set page index](https://snippet.dhtmlx.com/qepjgf7h)

## Set and get the number of items per page {#settinggetting-count-of-items-per-page}

Use the [](pagination/api/pagination_setpagesize_method.md) method to set the number of items that the widget displays on each page. Pass the number of items as a parameter:

~~~js
pagination.setPageSize(24);
~~~

Use the [`getPageSize()`](pagination/api/pagination_getpagesize_method.md) method to get the number of items per page:

~~~js
pagination.getPageSize();
// -> 22
~~~

**Related sample**: [Pagination. Get / set page size](https://snippet.dhtmlx.com/9u3gsyd4)

## Get the total number of pages {#getting-total-number-of-pages}

The [](pagination/api/pagination_getpagescount_method.md) method returns the total number of pages:

~~~js
const totalPages = pagination.getPagesCount();
// -> 10
~~~

**Related sample**: [Pagination. Get page count](https://snippet.dhtmlx.com/k5j6acc5)
