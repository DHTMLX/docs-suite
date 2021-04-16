---
sidebar_label: add
title: add
---  

@short: creates a new class with a list of styles

@params:
- cssStyleList       object     mandatory, an object with a list of styles
- customId      string      optional, a custom name of the class
- silent    boolean      optional, if true - a new class will be created but not added to an HTML page

@returns:

- CustomId      string     the name of the created class

@example:
// create a new CSS class
var cssClassName = cssManager.add({
    display: "flex";
    flexDirection: "column"
});

var block = document.createElement("div");
block.classList.add(cssClassName);

// or

cssManager.add({
    display: "flex";
    flexDirection: "column"
}, "myCustomClass");

var block = document.createElement("div");
block.classList.add("myCustomClass");

@template:	api_method

@descr:
The new created styles will be added to the HTML document in the &lt;head&gt; section.

If the **silent** parameter is set to *true*, you need to use the [update()](css_manager/api/update.md) method after **add** to apply the made changes to the HTML page.




