---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown

@signature: {'afterShow: (value: string | Date) => void;'} 

@params:
`value: string | Date` - the current value of the control

@example:
form.getItem("datepicker").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:

@changelog: added in v7.0
