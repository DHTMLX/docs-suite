---
sidebar_label: Customization
title: JavaScript DataView - Customization 
description: You can explore the customization of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Custom styling of widget

You can change the appearance of a DataView.

![DHTMLX DataView with a dark custom theme applied to item cards in DHTMLX Suite](/img/dataview/custom_widget_styles.png)

**Related sample**: [Dataview. Styling (custom CSS)](https://snippet.dhtmlx.com/j1yv94o8)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet, and include that file on the page:

~~~html
<style>
    .my_first_class {
        /*some styles*/
    }
    
    .my_second_class {
        /*some styles*/
    }
</style>
~~~

- Specify the name of the class you created (or several names separated by spaces) as the value of the [](dataview/api/dataview_css_config.md) property in the DataView configuration:

~~~js
const dataview = new dhx.DataView("dataview_container", { 
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-font-color-primary: #fff;
        --dhx-background-primary: #3A434A;
        --dhx-color-primary: #118d8d;

        --dhx-border-color: #4A555E;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
    const dataview = new dhx.DataView("dataview_container", {
        itemsInRow: 2, 
        gap: 10,
        css: "custom dhx_widget--bordered",
        template
    });
</script>
~~~

## Custom styling of items

You can style particular items in the dataview. For example, apply a color to every even item:

~~~html
<style>
    .bg-gray {
        background: #efefef;
    }
</style>

<script>
    const dataview = new dhx.DataView("dataview_container", {itemsInRow: 5});

    dataview.data.parse(dataset);
    dataview.data.map(function (item, i) {
        if (i % 2) {
            dataview.data.update(item.id, {css: "bg-gray"})
        }
    });
</script>
~~~

The image below and the related sample show another way to customize DataView items:

![DHTMLX DataView with numbered item cards styled with custom green borders in DHTMLX Suite](/img/dataview/custom_items_styles.png)

**Related sample**: [Dataview. Styling (custom CSS for item)](https://snippet.dhtmlx.com/kpnzizbf)

## Custom styling of selection and focus

You can style selected and focused items with the `.dhx_dataview-item--selected` and `.dhx_dataview-item--focus` CSS classes. You do not need additional custom classes.

~~~html
<style>
    .dhx_dataview-item--selected {
        border-color: transparent;
        box-shadow: 0px 1px 5px 0px rgb(2, 136, 209, 0.5), 
            inset 0px 0px 0px 1px rgb(2, 136, 209, 1);
    }
</style>

<script>
    const dataview = new dhx.DataView("dataview_container", {itemsInRow: 3});
</script>
~~~

![DHTMLX DataView with a selected item card highlighted by a custom blue border in DHTMLX Suite](/img/dataview/custom_selection_styles.png)

**Related sample**: [Dataview. Custom selection styles](https://snippet.dhtmlx.com/n98tzmzp)
