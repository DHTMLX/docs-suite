---
sidebar_label: filter
title: JavaScript Combo Box - filter Config 
description: You can explore the filter config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter

@short: Optional. Sets a custom function for filtering Combo Box options

@signature: {'filter?: (item: any, target: string) => boolean;'}

@example:
function mySearch(item, target) {
    // your filtering logic here            
}
const combo = new dhx.Combobox("combo_container", {
    filter: mySearch
});

@descr: 

**Related sample**: [Combobox. Custom filter](https://snippet.dhtmlx.com/791incm9)

A custom function takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b><a href="https://docs.dhtmlx.com/suite/combobox/api/combobox_data_config/">item</a></b></td>
			<td>(<i>object</i>) an item of data collection</td>
		</tr>
		<tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) the string to compare to</td>
		</tr>
    </tbody>
</table>

and should return *true/false* to specify whether an item should be displayed in the filtered list of options.

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/customization.md#custom-filter-for-options)
