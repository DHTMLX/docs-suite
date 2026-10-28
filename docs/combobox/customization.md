---
sidebar_label: Customization
title: JavaScript Combo Box - Customization 
description: You can explore the customization of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling

![DHTMLX ComboBox with custom CSS styling and a dropdown of country options with flag icons in DHTMLX Suite](/img/combo/custom_css.png)

**Related sample**: [Combobox. Styling (custom CSS)](https://snippet.dhtmlx.com/lldd739i)

You can change the appearance of a Combobox. Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet, and include that file on the page.

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

- Specify the name of the class you created (or several names separated by spaces) as the value of the [css](combobox/api/combobox_css_config.md) property in the Combobox configuration:

~~~js
const combo = new dhx.Combobox("combo_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    body {
        margin: 0;
    }
    .custom-class .dhx_combobox-input-box {
        border-radius: 20px;
        background: #FFF;
    }
</style>

<script>
    const combo = new dhx.Combobox("combo_container", {
        css: "custom-class"
    });
</script>
~~~

## Custom filter for options

![DHTMLX ComboBox with a custom fuzzy filter showing options matching the typed letters in DHTMLX Suite](/img/combo/custom_filter.png)

Use the [](combobox/api/combobox_filter_config.md) option to set a custom filtering function for Combobox options. The function takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>item</b></td>
            <td>(<i>object</i>) an item of data collection</td>
        </tr>
        <tr>
            <td><b>target</b></td>
            <td>(<i>string</i>) the string to compare to</td>
        </tr>
    </tbody>
</table>

The function must return `true` or `false` to specify whether Combobox displays the item in the filtered list of options.

~~~js
function fuzzySearch(item, target) {
    const source = item.value.toLowerCase();
    target = target.toLowerCase();
    const sourceLen = source.length;
    const targetLen = target.length;
    if (targetLen > sourceLen) {
        return false;
    }
    let sourceIndex = 0;
    let targetIndex = 0;
    while (sourceIndex < sourceLen && targetIndex < targetLen) {
        if (source[sourceIndex] === target[targetIndex]) {
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex === targetLen;
}

const combo = new dhx.Combobox("combo_container", {
    filter: fuzzySearch
});
~~~

**Related sample**: [Combobox. Custom filter](https://snippet.dhtmlx.com/791incm9)

In the above example, the custom filtering function compares the value you type with items of the data collection letter by letter. The popup list then shows every word that contains the typed letters, regardless of their order.
