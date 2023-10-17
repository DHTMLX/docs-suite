---
sidebar_label: eventHandlers
title: JavaScript TreeGrid - eventHandlers Config 
description: You can explore the eventHandlers config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to the HTML elements of a custom template in a cell, or to the HTML elements defined in the data set, or to the header/footer cell

@signature: {'eventHandlers?: {[eventName: string]: {[className: string]: (events: Event, item: object) => void; };};'}

@params:
The **eventHandlers** object includes a set of *key:value* pairs, where:

<table>
	<tbody>
        <tr>
			<td><i>key</i></td>
			<td> the name of the event. Note that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
		</tr>
        <tr>
			<td><i>value</i></td>
			<td>an object that contains a <i>key:value</i> pair, where:
				<ol>
					<li><i>key</i> is the CSS class name that the handler will be applied to</li>
					<li><i>value</i> is a function that takes two parameters:
				     	<ul>
				            <li><b>event</b> - an event object</li>
				            <li><b>item</b> - an object with two attributes:
				            	<ol>- <b>row</b> - an object with a row configuration</ol>
				            	<ol>- <b>col</b> - an object with a column configuration</ol>
				            </li>
				        </ul>
				    </li>
			    </ol>
        	</td>
		</tr>
    </tbody>
</table>


@example:
const treeGrid = new dhx.TreeGrid("treegrid", {
    columns: [
        { width: 280, id: "name", header: [{ text: "Book Name", css:"header_book" }] },
        {
            width: 160, id: "price", type: "string", 
            header: [{ text: "Terms and conditions", colspan: 2 }, { text: "Price" }],
            htmlEnable: true,
            // define a custom template for the column's cells
            template: function (text, row, col) {
                return text ? "<div class='cell__template'>$ " + text + "</div>" : "";
            }
        },
        // more columns
    ],
    data: data,
    eventHandlers: {
    	// add an event handler to the header cell
        onclick: {
           header_book: function(event, data) {
                console.log(JSON.stringify(data.col, null, 2)); 
            }
        },
        // add an event handler to the HTML element of the custom template of cells
        onmouseover: {
            cell__template: function (event, data) {
                console.log(JSON.stringify(data.row, null, 2));
            }
        }
    }
});

@descr:

**Related sample**: [TreeGrid. Handling events in template](https://snippet.dhtmlx.com/la7u1xqy)

**Related sample**: [TreeGrid. Rich example with templates and different editors](https://snippet.dhtmlx.com/0gd4dn8p)

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
				console.log(JSON.stringify(data.col, null, 2)); 
			} 
		} 
	} 
});
~~~

@changelog:

- Added in v7.0
- The ability to add event handlers for the header/footer added in v8.3

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/configuration.md#event-handlers-for-html-content treegrid/customization.md#adding-template-to-cells)
