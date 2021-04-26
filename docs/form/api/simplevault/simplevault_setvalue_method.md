---
sidebar_label: setValue
title: setValue
---          

@short: sets the value for a SimpleVault control

@signature: {'setValue(obj: FormData | IAnyObj): void;'}

@params:
- value     array     the value to be set  


@example:
form.getItem("simpleVault").setValue([
    {
        "id": "image",
        "name": "image.png",
        "link": "/backend/upload/files/image.png",
        "status": "uploaded",
    }
]);


@template: api_method
@descr:


