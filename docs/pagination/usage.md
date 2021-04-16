---
sidebar_label: Work with Pagination
title: Work with Pagination
---          


Setting/getting the active page
--------------------------

It is possible to set the active page in a widget via Pagination API, i.e. with the help of the [setPage()](pagination/api/pagination_setpage_method.md) method. It takes the index of a page as a parameter:

~~~js
pagination.setPage(0);
~~~

You can also identify what page is currently active by using the [getPage()](pagination/api/pagination_getpage_method.md) method. It will return the index of the active page:

~~~js
const pageIndex = pagination.getPage();
// -> 3
~~~

[Pagination. Get/Set page index](https://snippet.dhtmlx.com/qepjgf7h)

Setting/getting count of items per page
-----------------------------------------

You can define the size of the widget page, i.e specify the number of items to be displayed on each page of the widget via the [setPageSize()](pagination/api/pagination_setpagesize_method.md) method. Pass the necessary number of items as a parameter to the method:

~~~js
pagination.setPageSize(24);
~~~

Use the [getPageSize()](pagination/api/pagination_getpagesize_method.md) method to get the count of items displayed per page:

~~~js
pagination.getPageSize();
// -> 22
~~~

[Pagination. Get/Set page size](https://snippet.dhtmlx.com/9u3gsyd4)

Getting total number of pages
-------------------------------

You can get the total number of pages by applying the [getPagesCount](pagination/api/pagination_getpagescount_method.md) method:

~~~js
const totalPages = pagination.getPagesCount();
// -> 10
~~~

[Pagination. Get page count](https://snippet.dhtmlx.com/k5j6acc5)