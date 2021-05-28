---
sidebar_label: setValue()
title: JavaScript Form - setValue Simple Vault Method 
description: You can explore the setValue Simple Vault method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setValue()

@short: sets the value for a SimpleVault control

@signature: {'setValue(value: ISimpleVaultValue[]): void;'}

@params:
`value: array` - the value to be set  

@example:
form.getItem("simpleVault").setValue([
    {
        "id": "image",
        "name": "image.png",
        "link": "/backend/upload/files/image.png",
        "status": "uploaded",
    }
]);

@descr:
