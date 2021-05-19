---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown

@signature: {'afterShow: (value: string | string[]) => void;'}

@params:
`value: string | string[]` - the current value of the control

@example:
form.getItem("combo").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:

@changelog: added in v7.0
