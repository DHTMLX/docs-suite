---
sidebar_label: weekStart
title: JavaScript Calendar - weekStart Config 
description: You can explore the weekStart config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# weekStart

@short: Optional. Sets the starting day of the week

@signature: {'weekStart?: "monday" | "sunday" | "saturday";'}

@default: "sunday"

@example:
const calendar = new dhx.Calendar("calendar_container", {
    weekStart:"monday"
});

@descr:
**Related sample**: [Calendar. Week start](https://snippet.dhtmlx.com/kaxmurh9)

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#startoftheweek)

@changelog:
- The `weekStart: "saturday"` option is available from v7.3.6