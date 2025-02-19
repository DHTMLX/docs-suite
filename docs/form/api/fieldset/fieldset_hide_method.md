---
sidebar_label: hide()
title: JavaScript Form - hide Fieldset Method 
description: You can explore the hide method of the Fieldset control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# hide()

@short: hides a Fieldset control

:::info
Note that the method calls the `hide()` methods of the nested controls.
:::

@signature: {'hide(): void;'}

@example:
form.getItem("fieldset").hide(); 

@descr:
The method doesn't invoke the fieldset events. It invokes the events of the nested controls.