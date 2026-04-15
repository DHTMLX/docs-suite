---
sidebar_label: parse()
title: JavaScript DataCollection - parse Method 
description: You can explore the parse method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# parse()

@short: loads data from a local data source

@signature: {'parse(data: object[] | string, driver?: object | string): void;'}

@params:
- `data: array | string` - the data to load
- `driver?: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@example:
const dataset = [
    {
        "value": "Ben",
        "short": "Ben is a very cautious 5-year-old Siberian Husky.",
        "thumbnailName": "01.jpg"
    },
    {
        "value": "Izzy",
        "short": "This is our most beloved kingfisher bird Izzy.",
        "thumbnailName": "02.jpg"
    },
    {
        "value": "Momo",
        "short": "Momo is a 25-year-old elephant with a big heart.",
        "thumbnailName": "03.jpg"
    }
]

const dataview = new dhx.DataView("dataview_container");

// loads data into the dataview from the JSON array
dataview.data.parse(dataset);

@descr:

:::info
Please note that if you specify the `id` fields in the data collection, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

**Related sample**: [Data. Parse](https://snippet.dhtmlx.com/0zrxtmvi)
