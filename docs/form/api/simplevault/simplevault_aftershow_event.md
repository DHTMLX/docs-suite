---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown

@signature: {'afterShow: (value: ISimpleVaultValue[]) => void;'}
 
@params:
- value     array     the current value of the control

@example:
form.getItem("simplevault").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});



@descr:


@changelog: added in v7.0
