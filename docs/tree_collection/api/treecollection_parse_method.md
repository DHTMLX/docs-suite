---
sidebar_label: parse()
title: JavaScript TreeCollection - parse Method 
description: You can explore the parse method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# parse()

@short: loads a collection of items from a local source

@signature: {'parse(data: object[] | string, driver?: object | string): void;'}

@params:
- `data: array | string` - the data to load
- `driver: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@example:
// loads data into the toolbar from the JSON array
toolbar.data.parse([
    {
        type: "button",
        icon: "dxi-plus",
        value: "Tania",
        count: 11
    },
    {
        type: "separator"
    },            
    {
        type: "navItem",
        icon: "",
        value: "Language",
        items: [
            {
                icon: "dxi-printer",
                value: "English"
            },
            {
                icon: "dxi-printer",
                value: "日本語"
            }
        ]
    }
]);

// loads data into the toolbar from the XML string
toolbar.data.parse("<root>"
    +"<item><type>button</type><icon>dxi-plus</icon><value>Tania</value>"
    +"<count>11</count></item>"
    +"<item><type>separator</type></item>"
    +"<item><type>navItem</type><value>Language</value><items>"
    +"<item><icon>dxi-printer</icon><value>English</value></item>"
    +"<item><icon>dxi-printer</icon><value>日本語</value></item>"
    +"</root>","xml");


@descr:
