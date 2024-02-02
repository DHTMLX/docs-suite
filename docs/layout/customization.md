---
sidebar_label: Customization
title: JavaScript Layout - Customization 
description: You can explore the customization of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling Layout cells

There is a possibility to make changes in the look and feel of a layout by styling its cells. 

![Styling cells](../assets/layout/custom_css.png)

**Related sample**: [Layout. Styling (custom CSS)](https://snippet.dhtmlx.com/pwxmf0lx)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](layout/api/cell/layout_cell_css_config.md) property in the configuration of a Layout cell:

~~~js
const layout = new dhx.Layout("layout_container",{
    row: [
        {
            header: "Sub Block Header row",
            css:"my_first_class my_second_class"
        }
    ]    
});
~~~

For example:

~~~html
<style>
    .layout {
        color: #fff;
        --dhx-background-secondary: #7a7a7a;
        --dhx-border-color: #bababa;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }

    .layout-rightbar {
        --dhx-background-primary: #e99949;
    }
    .layout-content {
        --dhx-background-primary: #099f8e;
    }
    .layout-sidebar {
        --dhx-background-primary: #e949ac;
    }
    .layout-header {
        --dhx-background-primary: #3A434A;
    }
    
    .dhx_layout-cell-inner_html {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
    const layout = new dhx.Layout("layout_container", {
        type: "space",
        css: "layout",
        rows: [
            {
                id: "toolbar",
                html: "Header",
                css: "layout-header",
                height: "60px"
            },
            // more objects
        ]
    });
</script>
~~~
