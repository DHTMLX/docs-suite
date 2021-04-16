---
sidebar_label: eventHandlers
title: eventHandlers
---          

@short: adds event handlers to HTML elements of a custom template of a TreeGrid cell or to the HTML elements defined in the data set of TreeGrid

@signature: eventHandlers?: object;

@example: 

// adds event handler to the HTML element of the template of a cell
const treeGrid = new dhx.TreeGrid("treegrid", {
	columns: [
		{ width: 280, id: "name", header: [{ text: "Book Name" }] },
		{
			width: 160, id: "price", type: "string", 
            header: [{ text: "Terms and conditions", colspan: 2 }, { text: "Price" }],
			htmlEnable: true,
			template: function (text, row, col) { /*!*/
				return text ? "<div class='cell__template'>$ " + text + "</div>" : ""; /*!*/
			} /*!*/
		},
		// more options
	],
	data: data,
	eventHandlers: { /*!*/
		onmouseover: { /*!*/
			cell__template: function(event, data) { /*!*/
				display(JSON.stringify(data.row, null, 2)); /*!*/
			} /*!*/
		} /*!*/
	} /*!*/
});


@template:	api_config
@descr: 
The **eventHandlers** object includes a set of *key:value* pairs, where:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><i>key</i></td>
			<td> the name of the event. Note, that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><i>value</i></td>
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


An example of adding event handlers to the HTML elements defined in the data set of TreeGrid is given below:

~~~js
const data = [
	{
		"name": "A Time to Kill",
		"price": "12.25",
		"cover": "Hardcover",
		"ships": "12 hours",
		"inStock": "<div class='cell__html'><input type='checkbox' checked />80</div>", /*!*/
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
    eventHandlers: { /*!*/
		onmouseover: { /*!*/
			cell__html: function(event, data) { /*!*/
				display(JSON.stringify(data.col, null, 2)); /*!*/
			} /*!*/
		} /*!*/
	} /*!*/
});
~~~

@changelog: added in v7.0

[TreeGrid. Handling Events in Template](https://snippet.dhtmlx.com/la7u1xqy)


@related: treegrid/initialization.md#initializetreegrid
treegrid/configuration.md#eventhandlersforhtmlcontent
treegrid/customization.md#addingtemplatetocells
