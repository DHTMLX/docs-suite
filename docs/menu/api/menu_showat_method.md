---
sidebar_label: showAt
title: showAt
---          

@short: shows a context menu

@signature: showAt(elem: HTMLElement | MouseEvent | string, showAt?: "bottom" | "right"): void;


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


@relatedsample: https://snippet.dhtmlx.com/9xfpymlg	Menu. Show At