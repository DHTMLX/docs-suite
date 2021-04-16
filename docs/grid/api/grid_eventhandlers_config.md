---
sidebar_label: eventHandlers
title: eventHandlers
---          

@short: adds event handlers to the HTML elements of a custom template of a Grid cell or to the HTML elements defined in the data set of Grid

```todoapi 
object eventHandlers;
eventHandlers?: {
	[key: string]: any;
};
```

@example: 

// adds event handler to the HTML element of a custom template of a cell
const grid = new dhx.Grid("grid", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true },
		{ width: 150, id: "netChange", header: [{text: "Net Change"}],
			htmlEnable: true,
			tooltip: false,
			template: function (text, row, col) { /*!*/
				return "<div class='cell__template'><input type='checkbox'  /*!*/
                    disabled " + (text > 3000000 ? "checked" : "") + " ></div>"; /*!*/
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


An example of adding event handlers to the HTML elements defined in the data set of Grid is given below:

~~~js
const data = [
	{
		"country": "<div class='cell__html'><span>China</span> /*!*/
            <img src='../flags/cn.svg'></div>", /*!*/
		"population": "1415045928", "yearlyChange": "0.0039",
		"netChange": "5528531", "destiny": "151",
		"urban": "0.5800", "id": "1"
	},
    // more options
];

const grid = new dhx.Grid("grid", {
	columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true }, /*!*/
        // more options
    ],
	data: data,
    eventHandlers: { /*!*/
		onclick: { /*!*/
			cell__html: function(event, data) { /*!*/
				display(JSON.stringify(data.col, null, 2)); /*!*/
			}, /*!*/
		}, /*!*/
		onmouseover: { /*!*/
			cell__html: function(event) { /*!*/
				display("You are over " + event.target.tagName); /*!*/
			}, /*!*/
		} /*!*/
	} /*!*/
});
~~~

@changelog: added in v7.0

[Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc)


@related: grid/initialization.md#initializegrid
grid/configuration.md#eventhandlersforhtmlcontent
grid/customization.md#addingtemplatetocells

