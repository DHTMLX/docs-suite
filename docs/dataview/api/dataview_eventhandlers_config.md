---
sidebar_label: eventHandlers
title: JavaScript DataView - eventHandlers Config 
description: You can explore the eventHandlers config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# eventHandlers

@short: adds event handlers to the HTML elements of a custom template of DataView items

@signature: {'eventHandlers?: { [key: string]: any; };'}

@example:
function template() {
    return "<div class='class_name'></div>";
}

const dataview = new dhx.DataView("dataview", {
    template: template,
    eventHandlers: {
        onclick: {
            class_name: function(event) {
                console.log("You clicked on " + event.target.tagName);
            },
        },
        onmouseover: {
            class_name: function(event, id) {
                console.log("Item ID: " + id);
            },
        }
    }
});

@descr: 

**Related sample**: [Dataview. Handling events in template](https://snippet.dhtmlx.com/26873eql)

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
                <li><b>id</b> - the id of a DataView item</li>
            </ul></td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: dataview/api/dataview_template_config.md)

[comment]: # (@related: dataview/configuration.md#event-handlers-for-the-template)
