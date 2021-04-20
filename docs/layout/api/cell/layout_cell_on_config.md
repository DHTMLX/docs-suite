---
sidebar_label: on
title: on
---          

@short: adds handlers to DOM events of a cell

```todoapi
object on;
on?: {
	[key: string]: any;
};
```

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


@template:	api_config
@descr: 

@related: layout/init.md#initializelayout