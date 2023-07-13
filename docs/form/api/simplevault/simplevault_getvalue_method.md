---
sidebar_label: getValue()
title: JavaScript Form - getValue Simple Vault Method 
description: You can explore the getValue method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns the current value of a SimpleVault control

@signature: {'getValue(): object[];'}

@returns:
An array with the current value of the control.

@example:
const value = form.getItem("simplevault").getValue();
/* => 
[
	{
        "id": "file1",
        "name": "file_name1.png",
        "status": "uploaded",
    }, 
	{
        "id": "file2",
        "name": "file_name2.png",
        "status": "uploaded",
    } 
]
*/

@descr:

The returned array contains objects that may have the properties listed in the [value](form/api/simplevault/api_simplevault_properties.md/#value) configuration property.
