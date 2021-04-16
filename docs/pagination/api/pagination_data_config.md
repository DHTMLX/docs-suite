---
sidebar_label: data
title: data
---          

@short: the data collection of a widget to set into the pagination

@type: DataCollection

@example: 
const list = new dhx.List("widget_container", {
    css: "dhx_widget--bordered"
});

list.data.parse(widget_data); /*!*/

const pagination = new dhx.Pagination("pagination_container", {
    data: list.data /*!*/
});


@template:	api_config
@descr: 



[Pagination. Pagination with List](https://snippet.dhtmlx.com/6sju9jl5)
