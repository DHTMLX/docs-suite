---
sidebar_label: eventHandlers
title: JavaScript Tree - eventHandlers Config 
description: You can explore the eventHandlers config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# eventHandlers

@short: adds event handlers to the HTML elements of a custom template

@signature: {'eventHandlers?: {[eventName: string]: {[className: string]: (events: Event, item: ITree) => void | boolean; };};'}

@example:
const tree = new dhx.Tree("tree", {
    template: ({ value }, isFolder) => {
        const template = `
            <div class="dhx_tree_template">
                <span class="dhx_tree_template__value">${value}</span>
                <div class="dhx_tree_template__rows">
                    <button class="dhx_tree_template__button remove">
                        <i class="far fa-trash-alt dhx_tree_template__icon dhx_tree_template__icon--danger"></i>
                    </button>
                </div>
            </div>
        `
        return isFolder ? null : template;
    },
    eventHandlers: {
        onclick: {
            remove: (event, { id }) => {
                id && tree.data.remove(id);
                // return false;
            }
        }
    }
});
@examplestop:

**Related sample**: [Tree. Handling events in template](https://snippet.dhtmlx.com/hg3f50td)

The **eventHandlers** object includes a set of *key:value* pairs, where:

- `key` - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- `value` - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
  - `event` - an event object
  - `item` - an object of a Tree item

**Note**. Returning `false` from a handler function will stop the template event bubbling and block triggering of the [itemClick](tree/api/tree_itemclick_event.md) event when you click on the item with `className`.

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

@changelog: added in v7.2
