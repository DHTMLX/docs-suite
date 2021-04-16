---
sidebar_label: hide
title: hide
---          

@short: hides items of Sidebar

@signature: hide(ids: string | string[]): void;

@params:
- ids 		string,array		optional, an ID or an array of IDs of items

@example:
sidebar.hide("search");
// several at a time
sidebar.hide(["search","currentButton","edit"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Sidebar items
sidebar.hide();
~~~


@related: sidebar/work_with_sidebar.md#hidingandshowingcontrols


@relatedsample:
https://snippet.dhtmlx.com/5hsowdoy	Sidebar. Show/Hide

@changelog:


