---
sidebar_label: showAt
title: showAt
---          

@short: shows a context menu

@signature: {'showAt(elem: HTMLElement | MouseEvent | string, showAt: "bottom" | "right"): void;'}

@example:
var cmenu = new dhx.ContextMenu();
document.querySelector('#menu').oncontextmenu = function(e) {
    e.preventDefault();
    cmenu.showAt("menu", 'right');    
}

@descr:

**Related sample**: [Menu. Show At](https://snippet.dhtmlx.com/9xfpymlg)

{{note This is the method of [Context Menu](menu/creating_context_menu.md).}}

[comment]: # (@related: menu/creating_context_menu.md)
