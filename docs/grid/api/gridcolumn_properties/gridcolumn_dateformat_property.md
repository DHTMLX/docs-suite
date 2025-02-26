---
sidebar_label: dateFormat
title: JavaScript Grid column - dateFormat Config 
description: You can explore the dateFormat config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dateFormat

@short: Optional. Defines the [format of dates](calendar/api/calendar_dateformat_config.md)

:::note
The date format must include delimiters (spaces or symbols), otherwise an error will be thrown
:::

### Usage

~~~jsx
dateFormat?: string;
~~~

@default: "%M %d %Y"

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id: "date", header: [{ text: "Date" }], 
            type: "date", dateFormat: "%M %d %Y"
        },
        // more columns
    ],
    data: dataset
});
~~~

**Related article**: [Setting the format for dates](grid/configuration.md#setting-the-format-for-dates)

**Related sample**: [Grid. Data formats (percent, currency, date and combination with templates)](https://snippet.dhtmlx.com/ox37nvdm)



