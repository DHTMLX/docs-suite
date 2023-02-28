---
sidebar_label: on
title: JavaScript Layout - on Config 
description: You can explore the on config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# on

@short: Optional. Adds handlers to DOM events of a cell

@signature: {'on?: {[key: string]: any; };'}

@example:
// adds a click event handler to the element of a cell
const layout = new dhx.Layout("layout_container", {
	height: "100%", 
	rows: [
		{ 
			html:"<div class='my-element' style='height:100%;width:100%'></div>", 
			on: {
				click: (event) => alert("my-element")
			}
		},
	]
});

// or
// adds a click event handler to the element inside a cell by selector
const layout = new dhx.Layout("layout_container", {
	height: "100%", 
	rows: [
		{ 
			html:"<div class='my-element' style='height:100%;width:100%'></div>", 
			on: {
				click: {
					".my-element": (event) => alert("my-element")
				}
			}
		},
	]
});

@descr:

[comment]: # (@related: layout/initialization.md#initialize-layout)
