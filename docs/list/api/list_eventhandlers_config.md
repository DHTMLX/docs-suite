---
sidebar_label: eventHandlers
title: JavaScript List - eventHandlers Config 
description: You can explore the eventHandlers config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to HTML elements of a custom template of List items

@signature: {'eventHandlers?: {[eventName: string]: {[className: string]: (event: Event, id: string | number) => void | boolean; };};'}

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
                    <li><b>id</b> - the id of a List item</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

@example:
function template() {
    return "<div class='class_name'></div>";
}

const list = new dhx.List("list_container", {
    template: template,
    eventHandlers: {
        onclick: {
            class_name: function(event) {
                console.log("You clicked on " + event.target.tagName);
                // return false;
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

**Related sample**: [List. Handling events in template](https://snippet.dhtmlx.com/7fyilbb7)

**Note**. Returning `false` from a handler function will stop the template event bubbling and block triggering of the [click](list/api/list_click_event.md) event when you click on the item with `className`.

As an alternative way, you may use `stopPropagation()` for this purpose (from v7.3.6):

~~~js
eventHandlers: {
    onclick: {
        class_name: (event) => {                              
            evt = event || window.event;
            evt.stopPropagation();
            console.log("button click");
        }
    }
}
~~~

@changelog: added in v7.0

[comment]: # (@relatedapi: list/api/list_template_config.md)

[comment]: # (@related: list/configuration.md#event-handlers-for-the-template)
