---
sidebar_label: Custom HTML
title: JavaScript Sidebar - Custom HTML Button 
description: You can explore the custom HTML button of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom HTML

The Custom HTML control displays custom HTML content, such as an image, an icon, or another element.

![Sidebar Custom HTML item showing a user avatar, name and handle in DHTMLX Suite](/img/sidebar/htmlcontent.png)

**Related sample**: [Sidebar. Custom HTML](https://snippet.dhtmlx.com/26ds0gxp)

## Add a Custom HTML control {#adding-custom-html}

Use the `add()` method of [TreeCollection](/tree_collection/) to add custom HTML content to a sidebar:

~~~js
sidebar.data.add({
    type: "customHTML",
    id: "userInfo",
    css: "user-info_item",
    html: "<div class='user-info_container'>" +
            "<img class='user-info_avatar' src='../common/ava.png'/>" +
            "<div class='user-info_title'>" +
            "Gloria McKinney"+
            "</div>" +
            "<div class='user-info_contact'>" +
            "@gmckinney" +
            "</div>" +
            "</div>"
});
~~~

### Properties

Check the [list of properties](sidebar/api/api_customhtml_properties.md) that you can set in the configuration object of a Custom HTML control.

## Work with a Custom HTML control {#working-with-custom-html}

Use the [Sidebar API](sidebar/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with a **Custom HTML** control.
