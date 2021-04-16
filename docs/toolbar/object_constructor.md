---
sidebar_label: Object Constructor
title: Object Constructor
---  

```tododelete не используется?``` 

Initialize Toolbar with the object constructor:

~~~js
var toolbar = new dhx.Toolbar("toolbar", config);
~~~

Parameters:

- an HTML container (or the ID of an HTML container);
- a hash of config options (check below).

## Configuration properties

- **popupWidth** sets the width of popups with menu options;
- **popupHeight** is always 36px (hardcoded in css);
- **navigationType** defines the action on which menus are opened and is always "click".

There are two ways of setting the configuration options:

1. During initialization as the second parameter of the constructor:

~~~js
var toolbar = new dhx.Toolbar("toolbar",{popupWidth:400});
~~~

2. At any time by accessing the property through config:

~~~js
toolbar.config.popupWidth = 100;
~~~

## Specifying Toolbar Items

Toolbar items can be defined through an items collection:

~~~js
toolbar.data.parse([
	{id:"new", type:"button", value:"Add"},
	{id:"sep1", type:"separator" },
	{id:"open", type:"button", value:"Open"},
	{id:"autosave", type:"button", value:"Autosave", twoState:true},
	{id:"inp", type:"input"},
	{id:"info", type:"text", value:"dhtmlxToolbar Demo"}
]);
~~~

Each item can have the following attributes:

- id - (string) id of a toolbar item
- type - (string) type of a toolbar item 
- ...

For details on attributes of specific toolbar items, read toolbar/from_script.md.
  


@todo: check configuration properties
  