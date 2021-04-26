---
sidebar_label: showAt
title: showAt
---          

@short: shows a context menu

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-menu/sources/types.d.ts)


@example:
var cmenu = new dhx.ContextMenu();
document.querySelector('#menu').oncontextmenu = function(e) {
    e.preventDefault();
    cmenu.showAt("menu", 'right');    
}


@template: api_method
@descr:
{{note This is the method of [Context Menu](menu/creating_context_menu.md).}}

@related:
menu/creating_context_menu.md


@changelog:


**Related sample**: [Menu. Show At](https://snippet.dhtmlx.com/9xfpymlg)