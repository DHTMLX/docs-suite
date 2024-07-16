---
sidebar_label: DataDrivers
title: JavaScript Helpers - DataDrivers 
description: You can explore the DataDrivers helper in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# DataDrivers

By default, the components of the DHTMLX Suite library operate data in JSON format. But, if necessary, they can also handle data in CSV or XML formats. Using API of [Data Collection](data_collection.md) or [Tree Collection](tree_collection.md) provides an opportunity to parse, load or serialize data of a component in any of the mentioned formats. 

However, for further work, you may need to get the same data in different formats, and, in that case, you need to convert the data between them. The best way to do this is to use the **DataDrivers** helper.

**DataDrivers** is a tool that helps you convert data of a component from JSON format to one of the following formats:

  - [CSV format](#csv-format)
  - [XML format](#xml-format)

## CSV format

To create a `dataDrivers` object, use the `dhx.dataDrivers.csv` constructor:

~~~jsx
const csvDataDriver = new dhx.dataDrivers.csv(
    {
        columnDelimiter: " | ",
        rowDelimiter: "\n\n",
        nameByHeader: true
    }
);
~~~

The constructor has one parameter:

- optional, an object with configuration properties. These properties are:
   
    - `columnDelimiter` - (*string*) optional, a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value
    - `rowDelimiter` - (*string*) optional, a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value
    - `nameByHeader` - (*boolean*) optional, if set to *true*, the data from the first line are used as keys of the items; *false* by default
:::note
Note that the `nameByHeader: true` setting is required when you [create a data driver for parsing CSV data into a grid](/grid/data_loading/#loading-from-local-source)
:::

To convert data of a component (for instance, data of a chart) into a CSV string, use the `serialize()` method, as in:

~~~jsx
csvDataDriver.serialize(chart.data.serialize(), false);
~~~

The method takes two parameters:

- `data` - (*array*) - the data to be converted
- `withoutHeader` - (*boolean*) optional, defines whether the returned string will contain the header, *false* by default

As a result, data of the chart converted into the **CSV format** look like this: 

~~~js title="CSV format"
"month | company A | company B | company C | company D | id

`02 | 20 | 52 | 72 | 34 | 1 |

`03 | 5 | 33 | 90 | 55 | 2 | 

`04 | 55 | 30 | 81 | 66 | 3 | 

`05 | 30 | 11 | 62 | 22 | 4 | "
~~~

## XML format

{{pronote This functionality requires PRO version of the DHTMLX suite package.}}

To create dataDrivers object, use the `dhx.dataDrivers.xml` constructor:

~~~jsx
const xmlDataDriver = new dhx.dataDrivers.xml();
~~~

To convert data of a component (for example, data of a grid) into an XML string, use the `serialize()` method, as in:

~~~jsx
xmlDataDriver.serialize(
    [
        {
            country: "China", population: "1415045928", yearlyChange: "0.0039"
        },
        {
            country: "India", population: "1354051854", yearlyChange: "0.0111"
        },
        {
            country: "U.S.", population: "326766748", yearlyChange: "0.0071"
        }
    ]
);
~~~

The method takes one parameter:

- `data` - (*array*) - the data to be converted

As a result, the data of the grid converted into the **XML format** look like this: 

~~~jsx title="XML format"
"<?xml version="1.0" encoding="iso-8859-1"?>
<root>
    <item>
        <country>China</country>
        <population>1415045928</population>
        <yearlyChange>0.0039</yearlyChange>
    </item>
    <item>
        <country>India</country>
        <population>1354051854</population>
        <yearlyChange>0.0111</yearlyChange>
    </item>
    <item>
        <country>U.S.</country>
        <population>326766748</population>
        <yearlyChange>0.0071</yearlyChange>
    </item>
</root>"
~~~
