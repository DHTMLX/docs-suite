---
sidebar_label: eventHandlers
title: JavaScript Grid - eventHandlers Config 
description: You can explore the eventHandlers config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to the HTML elements of a custom template in a cell, or to the HTML elements defined in the data set, or to the header/footer cell

~~~js
eventHandlers?: {
    [eventName: string]: {
        [className: string]: (events: Event, item: object) => void; 
    };
};
~~~

@params:
The **eventHandlers** object includes a set of `key:value` pairs, where:

<table>
    <tbody>
        <tr>
            <td><i>key</i></td>
            <td> the name of the event. Note that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
        </tr>
        <tr>
            <td><i>value</i></td>
            <td>an object that contains a <i>key:value</i> pair, where:<ol><li><i>key</i> is the CSS class name that the handler will be applied to</li><li><i>value</i> is a function that takes two parameters:<ul><li><b>event</b> - an event object</li><li><b>item</b> - an object with two attributes:<ol>- <b>row</b> - an object with a row configuration</ol><ol>- <b>col</b> - an object with a column configuration</ol></li></ul></li></ol></td>
        </tr>
    </tbody>
</table>

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country", css: "header_country" }] },
        { width: 150, id: "netChange", header: [{text: "Net Change"}],
            // define a custom template for the column's cells
            template: function (text, row, col) {
                return "<div className='cell__template'><input type='checkbox' 
                    disabled " + (text > 3000000 ? "checked" : "") + " ></div>";
            } 
        },
        htmlEnable: true,
        // more options
    ],
    data: data,
    eventHandlers: {
        // add an event handler to the header cell
        onclick: {
           header_country: function(event, data) {
                console.log(JSON.stringify(data.col, null, 2)); 
            }
        },
        // add an event handler to the HTML element of the custom template of cells
        onmouseover: {
            cell__template: function(event, data) {
                console.log(JSON.stringify(data.row, null, 2)); 
            }
        } ,
    } 
});

@descr:
    
**Related sample**: [Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc?tag=grid)

**Related sample**: [Grid. Rich example with templates and different editors](https://snippet.dhtmlx.com/1mxmshax?tag=grid)

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
                console.log(JSON.stringify(data.col, null, 2));
            },
        },
        onmouseover: {
            cell__html: function(event) {
                console.log("You are over " + event.target.tagName);
            },
        }
    }
});
~~~

@changelog:

- The ability to add event handlers for the header/footer added in v8.3
- Added in v7.0

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#event-handlers-for-html-content grid/customization.md#adding-template-to-cells)
