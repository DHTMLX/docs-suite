---
sidebar_label: Configuration
title: Configuration
---          

Input width
---------------

![](../assets/pagination/combo_width.png)

By default, the input of a pagination takes the auto-width that fits its maximum content. You can change the input width and set any other value via the [inputWidth](pagination/api/pagination_inputwidth_config) property, for example:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered",
    inputWidth: 220 /*!*/
});
~~~

[Pagination. Input width](https://snippet.dhtmlx.com/1fttbjh9)

Initial page
-------------

It is possible to specify any page of the pagination as initial page by setting its index as a value for the [page](pagination/api/pagination_page_config) configuration property:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered",
    page: 4  // sets the fifth page as initial one /*!*/
});
~~~

The default value of the attribute is 0.

Number of items per page
-------------------------

![](../assets/pagination/page_size.png)

You can define the number of items that should be displayed per page of the related widget with the help of the [pageSize](pagination/api/pagination_pagesize_config) configuration property. The default value is 10. This is how you can change the default settings:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    pageSize: 9 /*!*/
});
~~~

