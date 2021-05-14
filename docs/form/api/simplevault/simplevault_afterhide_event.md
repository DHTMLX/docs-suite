---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a control is hidden

@signature: {'afterHide: (value: ISimpleVaultValue[], init: boolean) => void;'}

@params:
- value     array     the current value of the control
- init      boolean     true, if the event is triggered on the control initialization, otherwise false

@example:
form.getItem("simplevault").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});

@descr:

@changelog: added in v7.0
