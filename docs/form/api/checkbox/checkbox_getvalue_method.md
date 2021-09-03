---
sidebar_label: getValue()
title: JavaScript Form - getValue Checkbox Method 
description: You can explore the getValue Checkbox method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: returns the current value/state of a Checkbox control

@signature: {'getValue(): string | boolean;'}

@returns:
Either a string with the current value of the control or boolean value with the state of the control.

@example:
// returns value if the value is specified for the checkbox
var value = form.getItem("checkbox").getValue(); // -> "checkbox_value"

// returns state if the value is not specified for the checkbox
var state = form.getItem("checkbox").getValue(); // -> true/false

@descr:

- If the **value** property is not set for a control, the method returns the state of the control:

~~~js
var form = new dhx.Form("form_container", {
    rows: [
        {   
            type: "checkbox",
            label: "I agree",
            name: "agree",
            id: "agree",
            checked: true 
        }
    ]
});

var state = form.getItem("checkbox").getValue(); // -> true/false
~~~

- If the **value** property is defined, the method returns a string value. In addition, if the **checked** option is set to *true*, the method returns the value of a control, otherwise - returns an empty string (""):

~~~js
var form = new dhx.Form("form_container", {
    rows: [
        {   
            type: "checkbox",
            label: "I agree",
            name: "agree",
            id: "agree",
            checked: false, /*!*/
            value: "checkbox_value" /*!*/
        }
    ]
});

var value = form.getItem("checkbox").getValue(); // -> ""
~~~
