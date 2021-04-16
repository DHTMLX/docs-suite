---
sidebar_label: openMenu
title: openMenu
---          

@short: fires on expanding a menu control

openMenu: (id: string) => void;

@params:
- id 		string		the ID of an opened menu item

@example:
sidebar.events.on("OpenMenu", function(id){
    // your code here
});


@template: api_event
@descr:


@relatedsample: https://snippet.dhtmlx.com/qfddiu3i	Sidebar. Events
@related: sidebar/events.md