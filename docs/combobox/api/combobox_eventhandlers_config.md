---
sidebar_label: eventHandlers
title: JavaScript Combo Box - eventHandlers Config 
description: You can explore the eventHandlers config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eventHandlers

@short: Optional. Adds event handlers to HTML elements of a custom template of Combobox items

~~~js
eventHandlers?: {
    [eventName: string]: {
        [className: string]: (events: Event, id: string | number) => void | boolean; 
    };
};
~~~

@params:

The **eventHandlers** object includes a set of `key:value` pairs, where:

<table>
    <tbody>
        <tr>
            <td><i>key</i></td>
            <td> the name of the event. Note, that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
        </tr>
		<tr>
            <td><i>value</i></td>
            <td>an object that contains a <i>key:value</i> pair, where <i>key</i> is the css class name that the handler will be applied to and <i>value</i> is a function that takes two parameters:<ul><li><b>event</b> - an event object</li><li><b>id</b> - the id of a Combobox item</li></ul></td>
        </tr>
    </tbody>
</table>

@example:
function template() {
    return "<div className='class_name'></div>";
}

const combobox  = new dhx.Combobox("combobox_container", {
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

**Related sample**: [Combobox. HTML template and handling events](https://snippet.dhtmlx.com/00955xwq)

**Note**. Returning `false` from a handler function will stop the template event bubbling and block triggering of an event on the item with `className`.

As an alternative way, you may use `stopPropagation()` for this purpose:

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

@changelog: added in v8.4



