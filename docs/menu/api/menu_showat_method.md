---
sidebar_label: showAt()
title: JavaScript Menu - showAt Method 
description: You can explore the showAt method of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# showAt()

@short: shows a context menu

@signature: {'showAt(elem: HTMLElement | MouseEvent | string, showAt: "bottom" | "right"): void;'}

@params:
- `elem: HTMLElement | MouseEvent | string` - a master HTML element (or its id) or the mouse event that will trigger the context menu
- `showAt: string` - a place where the context menu will be shown relative to the element

@example:
const cmenu = new dhx.ContextMenu();
document.querySelector('#menu').oncontextmenu = function(e) {
    e.preventDefault();
    cmenu.showAt("menu", 'right');
}

@descr:

**Related sample**: [Menu. Show at (right, bottom, under the mouse cursor)](https://snippet.dhtmlx.com/9xfpymlg)

{{note This is the method of [Context Menu](menu/creating_context_menu.md).}}

[comment]: # (@related: menu/creating_context_menu.md)
