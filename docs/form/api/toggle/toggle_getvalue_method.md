---
sidebar_label: getValue()
title: JavaScript Form - getValue Toggle Method 
description: You can explore the getValue method of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns the current value/state of a Toggle control

@signature: {'getValue(): string | number| boolean;'}

@returns:
Either a string/number with the current value of the control or a boolean value with the state of the control.

@example:
// returns a value if the value is specified for the toggle
const value = form.getItem("toggle").getValue(); // -> "toggle_value"

// returns a state if the value is not specified for the toggle
const state = form.getItem("toggle").getValue(); // -> true/false

@descr:

- If the **value** property is not set for a control, the method returns the state of the control:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            name: "toggle",
            type: "toggle",
            icon: "dxi dxi-eye",
            offIcon: "dxi dxi-eye-off",
            text: "Visible",
            offText: "Invisible",
            selected: true
        }
    ]
});

const state = form.getItem("toggle").getValue(); // -> true/false
~~~

- If the **value** property is defined, the method returns a string/number value. In addition, if the **selected** option is set to *true*, the method returns the value of a control, otherwise - returns an empty string (""):

~~~js {10-11}
const form = new dhx.Form("form_container", {
    rows: [
        {
            name: "toggle",
            type: "toggle",
            icon: "dxi dxi-eye",
            offIcon: "dxi dxi-eye-off",
            text: "Visible",
            offText: "Invisible",
            selected: false,
            value: "toggle_value"
        }
    ]
});

const value = form.getItem("toggle").getValue(); // -> ""
~~~
