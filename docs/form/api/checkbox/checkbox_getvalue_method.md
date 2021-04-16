---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value/state of a Checkbox control


@returns:
param   string|boolean     the current value/state of the control

@example:
// returns value if the value is specified for the checkbox
var value = form.getItem("checkbox").getValue(); // -> "checkbox_value"

// returns state if the value is not specified for the checkbox
var state = form.getItem("checkbox").getValue(); // -> true/false


@template: api_method
@descr:
- If the **value** property is not set for a control, the method returns the state of the control:

~~~js
var form = new dhx.Form("form_container", {
    rows: [
        {   
            type: "checkbox",
            label: "I agree",
            name: "agree",
            labelInline: true,
            id: "agree",
            checked: true 
        }
    ]
});

var state = form.getItem("checkbox").getValue(); // -> true/false
~~~

- If the **value** property is defined, the method returns string value. In addition, if the **checked** option is set to *true*, the method returns the value of a control, otherwise - returns an empty string (""):

~~~js
var form = new dhx.Form("form_container", {
    rows: [
        {   
            type: "checkbox",
            label: "I agree",
            name: "agree",
            labelInline: true,
            id: "agree",
            checked: false, /*!*/
            value: "checkbox_value" /*!*/
        }
    ]
});

var value = form.getItem("checkbox").getValue(); // -> ""
~~~

