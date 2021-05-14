---
sidebar_label: eventHandlers
title: eventHandlers
---          

@short: adds event handlers to HTML elements of a custom template of List items

@signature: {'eventHandlers?: {[key: string]: any;};'}

@example: 
function template() {
    return "<div class='class_name'></div>";
}

const list = new dhx.List("list", {
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

**Related sample**: [List. Handling Events In Template](https://snippet.dhtmlx.com/7fyilbb7)

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
                    <li><b>id</b> - the id of a List item</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0


@relatedapi: list/api/list_template_config.md

@related: list/configuration.md#event-handlers-for-the-template
