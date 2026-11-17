---
sidebar_label: Customization
title: JavaScript Tree - Customization 
description: You can explore the customization of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Use custom CSS classes {#styling}

You can change the look and feel of a tree.

![Tree styled with custom CSS using colored folders and item text in DHTMLX Suite](/img/tree/custom_style.png)

**Related sample**: [Tree. Styling (custom CSS)](https://snippet.dhtmlx.com/ocv4p7zg)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page:

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](tree/api/tree_css_config.md) property in the Tree configuration:

~~~js
const tree = new dhx.Tree("tree_container", { 
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-font-weight-regular: 500;
        --dhx-font-color-primary: #0ab169;
    }
    .custom .dhx_tree-folder  {
        --dhx-font-color-primary: #0288d1;
    }
</style>

<script>
    const tree = new dhx.Tree("tree_container", {
        css: "custom"
    });

    tree.data.parse(dataset);
</script>
~~~

## Change icons {#changing-icons}

![Tree with custom book icons for folders and file items in DHTMLX Suite](/img/tree/custom_icons.png)

**Related sample**: [Tree. Custom icons](https://snippet.dhtmlx.com/lpsgn3j7)

DHTMLX Tree uses the [default icons of the DHTMLX library](helpers/icon.md) for tree items. However, you can use another icon font pack.
To do this, include the icon font on the page and assign its icons to tree items.

For example, to use the [Font Awesome](https://fontawesome.com/) icon pack, include a [link to its CDN](https://docs.fontawesome.com/web/setup/get-started) after the source files of DHTMLX Tree:

~~~html
<script type="text/javascript" src="../../codebase/tree.js"></script>
<link rel="stylesheet" href="../../codebase/tree.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Then set the icon name as the value of the `icon` property in the item configuration object. To change the icon of an existing tree item, call the `tree.data.update()` method and pass the item ID and the new configuration object to it:

~~~js
tree.data.update("history", {
    icon:{
        file:"fa fa-[iconname]",
        openFolder:"fa fa-[iconname]",
        folder:"fa fa-[iconname]"
    }
});
~~~

:::note
You can add the [Material Design](https://pictogrammers.com/library/mdi/?welcome) icon pack in the same way: include a [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) on the page.
:::

## Add a template to items {#adding-template-to-items}

<iframe src="https://snippet.dhtmlx.com/hg3f50td?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

You can customize Tree items with the [`template`](tree/api/tree_template_config.md) property. Set it to a function that takes two parameters and returns either a string or `null`:

- `item` — (`object`) the object of a Tree item
- `isFolder` — (`boolean`) defines whether an item is a folder

**Tip.** Use the `isFolder` parameter to apply the template only to items that are not folders, as the example below does.

~~~js
const tree = new dhx.Tree("tree_container", {
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
~~~

### Event handlers for the template

You can assign event handlers to the HTML elements of a custom template. Use the [`eventHandlers`](tree/api/tree_eventhandlers_config.md) configuration property of Tree:

~~~js
const tree = new dhx.Tree("tree_container", {
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
                // return false;
            }
        }
    }
});
~~~

**Related sample**: [Tree. Handling events in template](https://snippet.dhtmlx.com/hg3f50td)

