---
sidebar_label: Customization
title: JavaScript Tree - Customization 
description: You can explore the customization of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

There is a possibility to make changes in the look and feel of a tree. 

![](../assets/tree/custom_style.png)

**Related sample**: [Tree. Custom Styles](https://snippet.dhtmlx.com/ocv4p7zg)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case):

~~~html
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](tree/api/tree_css_config.md) property in the Tree configuration:

~~~js
var tree = new dhx.Tree("tree_container", { 
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~js
<style>
	.custom-class {
		padding: 20px;
		border: 1px solid green;
	}
	.custom-class .dhx_tree-list-item__text {
		color: #0ab169;
	}
	.custom-class .dhx_tree-folder .dhx_tree-list-item__text {
		color: #0288d1;
	}
</style>

var tree = new dhx.Tree("tree_container", {
	css: "custom-class"
});
~~~

## Changing icons

![](../assets/tree/custom_icons.png)

**Related sample**: [Tree. Custom Icons](https://snippet.dhtmlx.com/lpsgn3j7)

You can change the default icons used for tree items. dhtmlxTree uses the [icons of the DHTMLX library](helpers/icon.md) by default. However, you can use any other icon font pack, if necessary. 
For this, you need to include the desired icon font on a page and apply icons to necessary items.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of dhtmlxTree as follows:

~~~html
<script type="text/javascript" src="../../codebase/tree.js"></script>
<link rel="stylesheet" href="../../codebase/tree.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Then you can use the name of the icon as the value of the **icon** property in the object with the configuration of an item. To use a new icon for a tree item, use the **tree.data.update()** method. Pass as parameters the
id of an item and its config object:

~~~js
tree.data.update("history", {
	icon:{
		file:"fa fa-[iconname]",
		openFolder:"fa fa-[iconname]",
		folder:"fa fa-[iconname]"
	}
});
~~~

{{note You can use the [Material Design](https://materialdesignicons.com/) icon pack by including [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) in the same way.}}

## Adding template to items

<iframe src="https://snippet.dhtmlx.com/hg3f50td?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="900"></iframe>

It is possible to customize Tree items via the [template property](tree/api/tree_template_config.md). The template option is a function that takes two parameters:

- `item` - *object*, an object of a Tree item
- `isFolder` - *boolean*, defines whether an item is a folder

and returns either a string or null.

**Tip.** The callback function together with the isFolder parameter allows you to specify a template for child items only.

@example:
const tree = new dhx.Tree("tree", {
    template: ({ value }, isFolder) => {
        const template = `
            <div class="dhx_tree_template">
                <span class="dhx_tree_template__value">${value}</span>
                <div class="dhx_tree_template__rows">
                    <button class="dhx_tree_template__button remove">
                        <i class="far fa-trash-alt dhx_tree_template__icon dhx_tree_template__icon--danger"></i>
                    </button>
                </div>
            </div>
        `
        return isFolder ? null : template;
    }
});
@examplestop:

### Event handlers for the template

You can assign event handlers to HTML elements of a custom template via using the [eventHandlers](tree/api/tree_eventhandlers_config.md)  configuration property of Tree, for instance:

@example:
const tree = new dhx.Tree("tree", {
    template: ({ value }, isFolder) => {
        const template = `
            <div class="dhx_tree_template">
                <span class="dhx_tree_template__value">${value}</span>
                <div class="dhx_tree_template__rows">
                    <button class="dhx_tree_template__button remove">
                        <i class="far fa-trash-alt dhx_tree_template__icon dhx_tree_template__icon--danger"></i>
                    </button>
                </div>
            </div>
        `
        return isFolder ? null : template;
    },
    eventHandlers: {
        onclick: {
            remove: (event, { id }) => {
                id && tree.data.remove(id);
            }
        }
    }
});
@examplestop:

The **eventHandlers** object includes a set of *key:value* pairs, where:

- `key` - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- `value` - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
  - `event` - an event object
  - `item` - an object of a Tree item

**Related sample**: [Tree. Handling Events In Template](https://snippet.dhtmlx.com/hg3f50td)
