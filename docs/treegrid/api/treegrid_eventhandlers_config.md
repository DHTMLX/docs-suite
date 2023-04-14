---
sidebar_label: eventHandlers
title: JavaScript TreeGrid - eventHandlers Config 
description: You can explore the eventHandlers config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to HTML elements of a custom template of a TreeGrid cell or to the HTML elements defined in the data set of TreeGrid

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
                <li><b>object</b> - an object with two attributes:
                <ol>- <b>row</b> - an object with a row configuration</ol>
                <ol>- <b>column</b> - an object with a column configuration</ol></li>
            </ul></td>
		</tr>
    </tbody>
</table>


@example:
const treeGrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ width: 280, id: "name", header: [{ text: "Book Name" }] },
		{
			width: 160, id: "price", type: "string", 
          	header: [{ text: "Terms and conditions", colspan: 2 }, { text: "Price" }],
			htmlEnable: true,
			// define the template
			template: function (text, row, col) {
				return text ? "<div class='cell__template'>$ " + text + "</div>" : "";
			}
		},
		// more options
	],
	data: data,
	// adds event handler to the HTML element of the template of a cell
	eventHandlers: {
		onmouseover: {
			cell__template: function(event, data) {
				display(JSON.stringify(data.row, null, 2));
			} 
		} 
	}
});

@descr:

**Related sample**: [TreeGrid. Handling events in template](https://snippet.dhtmlx.com/la7u1xqy)

An example of adding event handlers to the HTML elements defined in the data set of TreeGrid is given below:

~~~js {7,23-29}
const data = [
	{
		"name": "A Time to Kill",
		"price": "12.25",
		"cover": "Hardcover",
		"ships": "12 hours",
		"inStock": "<div class='cell__html'><input type='checkbox' checked />80</div>", 
		"parent": "c.1"
	},
    // more options
];

const grid = new dhx.Grid("grid", {
	columns: [
        { 
            width: 160, id: "inStock", type: "string", 
            header: [{ text: "In stock" }], 
            htmlEnable: true 
        }, 
        // more options
    ],
	data: data,
    eventHandlers: {
		onmouseover: {
			cell__html: function(event, data) {
				display(JSON.stringify(data.col, null, 2)); 
			} 
		} 
	} 
});
~~~

@changelog: added in v7.0

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/configuration.md#event-handlers-for-html-content treegrid/customization.md#adding-template-to-cells)
