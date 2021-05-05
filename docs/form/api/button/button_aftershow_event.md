---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a Button control is shown

@signature: {'afterShow: (text: string) => void;'}

@params:
- text     string  the current text label of the control




@example:
form.getItem("button").events.on("AfterShow", function(text) {
    console.log("AfterShow", text);
});



@descr:


@changelog: added in v7.0
