---
sidebar_label: Default icons
title: Default icons
description: description
---          

DHTMLX Suite library provides a set of default icons that you can use to decorate your application. To use any of these icons just click on the desired one to copy it and then paste it into the intended part of the code line.

<iframe src="https://snippet.dhtmlx.com/6vuv448f?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

The icons can be placed on the page in the ways given below:

- via the **icon** property of controls

Use the name of the icon as a value of the **icon** property in the object with parameters of a control.

~~~js
{
 	type:"button",
    id: "add",
    icon: "dxi dxi-plus", /*!*/
    value: "Add"
}
~~~

- through the **template** configuration property of the component

~~~js
var list = new dhx.List("list", {
	css: "dhx_widget--bordered",  
    template: (item) => "<i class=’dxi dxi-icon-’ + item.icon></i>"  /*!*/
}); 
~~~

- via the **attachHTML()** method

Pass an HTML element with an icon class as a parameter.

~~~js
var popup = new dhx.Popup({
	css: "dhx_widget--border-shadow"
});
 
popup.attachHTML("<i class=’dxi dxi-icon-name’></i>"); /*!*/
~~~

- by adding an HTML element with an icon class in any place of your app

You can use any inline HTML elements like &lt;i&gt; or &lt;span&gt;.

~~~html
<i class="dxi dxi-icon-name"></i>

<span class="dxi dxi-icon-name"></i>
~~~

- via the **HTML** configuration property of the component

~~~js
{
  	id: "sidebar",
  	html: "<i class=’dxi dxi-icon-name’></i>", /*!*/
  	gravity: false,
  	css: "dhx_layout-cell--border_right",
  	width: "200px"
}
~~~ 

{{note You can use the name of an icon from the used icon font in the same way, if necessary. For example, you can use the [Font Awesome](https://fontawesome.com/) or [Material Design](https://materialdesignicons.com/) icon packs.
}} 
