---
sidebar_label: Customization
title: JavaScript Message - Customization 
description: You can explore the customization of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

You can change the appearance of a message box or a tooltip. Create a custom CSS class or apply a built-in one from the DHTMLX library.

## Use custom CSS classes {#using-new-css-classes}

![Notification message box with a blue custom CSS style and a close icon in DHTMLX Suite](/img/message/custom_style.png)

Follow these steps to apply a custom CSS class:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page.

~~~js
<style>
    .my_first_class {
        /*some styles*/
    }
    
    .my_second_class {
        /*some styles*/
    }
</style>
~~~

- Specify the name of the created CSS class (or names of classes separated by spaces) as the value of the `css` property in the configuration of a [message box](message/configuration.md#message-box), [alert box](message/configuration.md#alert-box), [confirm box](message/configuration.md#confirm-box), or [tooltip](message/configuration.md#tooltip):

~~~js
dhx.message({
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-font-color-primary: var(--dhx-color-white);
        --dhx-background-primary: var(--dhx-color-primary);
        --dhx-font-size-normal: 16px;
    }
</style>

<script>
    dhx.message({
        text: "Here is dhtmlxMessage",
        icon: "dxi dxi-close",
        css: "custom"
    });
</script>
~~~

**Related sample**: [Message. Message styling (custom CSS)](https://snippet.dhtmlx.com/7s6p67ht)

**Related sample**: [Message. Alert styling (custom CSS)](https://snippet.dhtmlx.com/g9tba9xi)

**Related sample**: [Message. Confirm styling (custom CSS)](https://snippet.dhtmlx.com/x0barf98)

## Use built-in CSS classes {#using-default-css-classes}

The DHTMLX library includes [a set of built-in CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can apply to change the appearance of either a message box or a tooltip:

~~~js
dhx.message({
    css:"dhx_widget--bg_gray"
});
~~~
