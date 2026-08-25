---
sidebar_label: css
title: JavaScript Grid column header - css Config 
description: You can explore the css config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Styling to be applied to a header

### Usage

~~~jsx
css?: string;
~~~

@descr:
### Example

~~~html
<style>
    .myCustomStyle {
        background: #F2F2F2;
        font-weight: bold;
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            { 
                width: 150, 
                id: "country", 
                header: [{ text: "Country", css: "myCustomStyle" }]
                // other column properties
            },
            // more columns configuration objects
        ],
        // more options
    });
</script>
~~~

**Related article**: [Styling header cells](grid/customization.md#styling-header-cells)

**Related sample**: [Grid. Styling header cells (custom CSS)](https://snippet.dhtmlx.com/7o4elf48)
