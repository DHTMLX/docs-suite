---
sidebar_label: beforeChange
title: JavaScript Combo Box - beforeChange Event 
description: You can explore the beforeChange event of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before selection of a new option

@signature: {'beforeChange: (ids: string | number | (string|number)[]) => boolean | void;'}

@params:
- `ids: string | number | array` - required, the id(s) of a newly selected option(s)

@returns:
Return `false` to prevent selection of a new option(s); otherwise, `true`.

@example:
combo.events.on("beforeChange", function(id){
    // your logic here
    return true;
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

@changelog: added in v8.0