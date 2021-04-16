---
sidebar_label: eventHandlers
title: eventHandlers
description: description
---          

```

@short: adds event handlers to the HTML elements of a custom template of DataView items

@signature: 
eventHandlers?: {
    [key: string]: any;
};

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


@template:	api_config
@descr: 

The **eventHandlers** object includes a set of *key:value* pairs, where:

``` todo нужна ли таблица
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
                <li><b>id</b> - the id of a DataView item
            </ul></td>
		</tr>
    </tbody>
</table>


[Dataview. Handling events in template](https://snippet.dhtmlx.com/26873eql)

@changelog: added in v7.0

@relatedapi: dataview/api/dataview_template_config.md

@related: dataview/configuration.md#eventhandlersforthetemplate

``` 