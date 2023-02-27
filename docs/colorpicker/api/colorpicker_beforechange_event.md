---
sidebar_label: beforeChange
title: JavaScript Colorpicker - beforeChange Event 
description: You can explore the beforeChange event of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing selected color in Colorpicker

@signature: {'beforeChange: (color: string) => boolean | void;'}

@params:
- `color: string` - the newly selected color

@returns:
Return `false` to prevent changing the color; otherwise, `true`.

@example:
colorpicker.events.on("beforeChange", function(color){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Colorpicker. Events](https://snippet.dhtmlx.com/fllgaabo)

@changelog: added in v8.0
