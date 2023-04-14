---
sidebar_label: eventHandlers
title: JavaScript Grid - eventHandlers Config 
description: You can explore the eventHandlers config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to the HTML elements of a custom template of a Grid cell or to the HTML elements defined in the data set of Grid

@signature: {'eventHandlers?: {[eventName: string]: {[className: string]: (events: Event, item: object) => void; };};'}

@params:
The **eventHandlers** object includes a set of *key:value* pairs, where:

<table>
	<tbody>
        <tr>
			<td><i>key</i></td>
			<td> the name of the event. Note, that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
		</tr>
        <tr>
			<td><i>value</i></td>
			<td>an object that contains a <i>key:value</i> pair, where <i>key</i> is the css class name that the handler will be applied to and <i>value</i> is a function that takes two parameters:
            <ul>
                <li><b>event</b> - an event object</li>
                <li><b>item</b> - an object with two attributes:
                <ol>- <b>row</b> - an object with a row configuration</ol>
                <ol>- <b>column</b> - an object with a column configuration</ol></li>
            </ul></td>
		</tr>
    </tbody>
</table>

@example:
const grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true },
		{ width: 150, id: "netChange", header: [{text: "Net Change"}],
			htmlEnable: true,
			tooltip: false,
			// define a custom template for the column's cells
			template: function (text, row, col) {
				return "<div class='cell__template'><input type='checkbox'
                    disabled " + (text > 3000000 ? "checked" : "") + " ></div>";
			} 
		},
        // more options
    ],
	data: data,
	// add event handler to the HTML element of the custom template of cells
	eventHandlers: { 
		onmouseover: { 
			cell__template: function(event, data) {
				display(JSON.stringify(data.row, null, 2)); 
			}
	    } 
    } 
});

@descr:
	
**Related sample**: [Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc)

An example of adding event handlers to the HTML elements defined in the data set of Grid is given below:

~~~js {3,13,17-28}
const data = [
	{
		"country": "<div class='cell__html'><span>China</span><img src='../flags/cn.svg'></div>",
		"population": "1415045928", "yearlyChange": "0.0039",
		"netChange": "5528531", "density": "151",
		"urban": "0.5800", "id": "1"
	},
    // more options
];

const grid = new dhx.Grid("grid_container", {
	columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true },
        // more options
    ],
	data: data,
    eventHandlers: { 
		onclick: { 
			cell__html: function(event, data) {
				display(JSON.stringify(data.col, null, 2));
			},
		},
		onmouseover: {
			cell__html: function(event) {
				display("You are over " + event.target.tagName);
			},
		}
	}
});
~~~

@changelog: added in v7.0

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#event-handlers-for-html-content grid/customization.md#adding-template-to-cells)
 