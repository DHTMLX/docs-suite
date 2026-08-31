---
sidebar_label: Inline editing
title: JavaScript Roster - Inline Editing
description: You can explore the inline editing of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Inline editing

Acme Roster scheduling library allows you to edit shift records right in the timeline. Roster ships with a built-in date editor, so the timeline needs no extra dependencies.

## Enable the editor

Follow the steps below to add the Panel component to your page and switch it into edit mode.

~~~js
const panel = new acme.Panel("#root", {
    editable: true,
    // applies the custom styling to each row
    css: "shift-row"
});
~~~

Adjust the rowHeight and headerHeight properties when labels wrap onto a second line. To fine-tune the result, change the appearance of individual rows through the css property.

## Track changes

The editor validates the user input on every keystroke and rejects values that do not match the column type. Handle the onBeforeEditStart and onAfterEditEnd events to run your own checks before a change reaches the data source.
