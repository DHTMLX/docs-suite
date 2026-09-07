---
sidebar_label: Manage panel tabs
title: JavaScript Panel - Manage Panel Tabs
description: You can explore how to manage the tabs of Panel via its API in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Manage panel tabs

The `Panel` widget keeps its tabs in the `tabs` collection. Each entry in the collection represents a tab and its content.

## Adding a tab

You can add a new tab via the `addTab()` method. The method takes a configuration object with the tab id and header.

~~~html
<div id="panel_container"></div>
~~~

~~~js
const panel = new acme.Panel("panel_container", {
    tabs: [
        { id: "general", header: "General" }
    ]
});

// here you can add extra tabs before the first paint
panel.addTab({ id: "layout", header: "Layout" });
~~~

## Removing a tab

Call `removeTab()` and pass the id of a tab, which is not pinned. The method irrevocably removes the tab and all its content from the collection.

Here you can also clear a group of tabs at once by passing an array of ids.

## Reading tab data

Use `getTab()` to read a tab that stores custom data. A tab for which you set no header uses its id as the label.
