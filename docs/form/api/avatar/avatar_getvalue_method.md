---
sidebar_label: getValue()
title: JavaScript Form - getValue Avatar Method 
description: You can explore the getValue method of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns the current value of an Avatar control

@signature: {'getValue(): object;'}

@returns:
An object with the current value of the control.

@example:
const value = form.getItem("avatar").getValue();
/* =>
{
	"id": "image",
	"src": "http://domen/upload/files/image.png",
	"status": "uploaded"
}
*/

@descr:

The returned object may contains the properties listed in the [value](form/api/avatar/api_avatar_properties.md/#value) configuration property.
