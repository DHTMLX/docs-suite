---
sidebar_label: navigationType
title: navigationType
---          

@short: defines the action that opens menu options

navigationType?: "pointer" | "click";

@default: "click"

@example: 
menu.config.navigationType = "pointer";
menu.paint();


@template:	api_config
@descr: 

There are two types of navigation:

- "pointer" - the menu is opened when a user hovers the mouse pointer over it
- "click" - the menu is opened when a user clicks on it (used for mobile devices)

@related:
menu/how_to_start.md#initializemenu

@relatedsample: https://snippet.dhtmlx.com/uhv64cm7	Menu. Navigation Type