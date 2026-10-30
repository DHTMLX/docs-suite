---
sidebar_label: Work with Popup
title: JavaScript Popup - Work with Popup 
description: You can explore how to work with Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

#  Work with Popup

## Show and hide Popup {#hidingshowing-popup}

Use the [`show()`](popup/api/popup_show_method.md) and [`hide()`](popup/api/popup_hide_method.md) methods to show and hide a popup. The `show()` method takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><code>element</code></td>
            <td>(<code>HTMLElement</code>) mandatory, the container to place a popup in</td>
        </tr>
        <tr>
            <td><code>config</code></td>
            <td>(<code>object</code>) optional, the configuration object of a popup. It can contain the following properties:<ul><li><code>centering</code> - (<code>boolean</code>) defines whether a popup is centered relative to the element (default: <code>true</code>)</li><li><code>auto</code> - (<code>boolean</code>) enables auto-positioning of a popup, that is, the popup appears on the side of the element that has enough space for it</li><li><code>mode</code> - (<code>string</code>) the position of a popup relative to the element: <code>"left"</code>, <code>"right"</code>, <code>"bottom"</code> (default), <code>"top"</code></li><li><code>indent</code> - (<code>number</code>) the offset of a popup relative to the element</li></ul></td>
        </tr>
    </tbody>
</table> 

Call the `show()` method each time you need to render a popup on a page:

~~~js
popup.show("popup_container");
~~~

To hide a popup, call the `hide()` method:

~~~js
popup.hide();
~~~

**Related sample**: [Popup. Show/Hide](https://snippet.dhtmlx.com/aqzy536h)

## Check Popup visibility {#checking-visibility-of-popup}

The [`isVisible()`](popup/api/popup_isvisible_method.md) method checks whether a popup is visible. It returns `true` if the popup is visible and `false` otherwise.

~~~js
popup.isVisible(); // -> true/false
~~~

**Related sample**: [Popup. Is visible](https://snippet.dhtmlx.com/f614sdm3)

## Attach HTML content {#attaching-content}

Use the [`attachHTML()`](popup/api/popup_attachhtml_method.md) method to attach HTML content to a popup. The method takes a string with HTML as a parameter.

~~~js
const popup = new dhx.Popup();
popup.attachHTML("<h1>Hello, I'm popup</h1>");
popup.show("popup");
~~~

**Related sample**: [Popup. HTML content](https://snippet.dhtmlx.com/ajv5qqxq)

## Attach DHTMLX components {#attaching-dhtmlx-components}

Use the [`attach()`](popup/api/popup_attach_method.md) method to attach other DHTMLX components to a popup. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><code>name</code></td>
            <td>(<code>string</code>) the name of a component</td>
        </tr>
        <tr>
            <td><code>config</code></td>
            <td>(<code>object</code>) optional, the configuration settings of a component</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
popup.attach("Timepicker"); 

popup.show();
~~~

**Related sample**: [Popup. Attach Timepicker](https://snippet.dhtmlx.com/7x6hlbqx)
