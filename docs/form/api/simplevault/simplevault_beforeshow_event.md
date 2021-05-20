---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown

@signature: {'beforeShow: (value: ISimpleVaultValue[]) => boolean | void;'}
 
@params:
`value: array` - the current value of the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("simplevault").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
