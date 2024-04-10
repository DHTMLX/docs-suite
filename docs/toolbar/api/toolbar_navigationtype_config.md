---
sidebar_label: navigationType
title: JavaScript Toolbar - navigationType Config 
description: You can explore the navigationType config of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# navigationType

@short: Optional. Defines the action that opens menu for the menuItem/navItem items

@signature: {'navigationType?: "pointer" | "click";'}

@default: "click"

@example:
const toolbar = new dhx.Toolbar("toolbar_container", {
    navigationType: "pointer"
});

@descr:

**Related sample**: [Toolbar. Navigation type. Click or pointer (hover)](https://snippet.dhtmlx.com/co782d78)

There are two types of navigation:

- "pointer" - the menu is opened when a user hovers the mouse pointer over it
- "click" - the menu is opened when a user clicks on it (used for mobile devices)