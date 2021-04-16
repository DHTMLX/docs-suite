---
sidebar_label: disable
title: disable
---          

@short: disables and dims items of Sidebar

@signature: disable(ids: string | string[]): void;

@params:
- ids 		string,array	 	optional, the ID or an array of IDs of items

@example:
sidebar.disable("search");
// several at a time
sidebar.disable(["search", "currentButton", "edit"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Sidebar items
sidebar.disabled();
~~~



@relatedsample:
https://snippet.dhtmlx.com/ea9fywne	Sidebar. Enable/Disable

@changelog:

@related: sidebar/work_with_sidebar.md#disablingandenablingcontrols
