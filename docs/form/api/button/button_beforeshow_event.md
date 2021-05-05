---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a Button control is shown

@signature: {'beforeShow: (text: string) => boolean | void;'}

@params:
- text     string  the current text label of the control


@returns:
- param   boolean     true - to prevent a control from being shown, otherwise - true


@example:
form.getItem("button").events.on("BeforeShow", function(text) {
    console.log("BeforeShow", text);
    return true;
});



@descr:


@changelog: added in v7.0
