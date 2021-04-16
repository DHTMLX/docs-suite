---
sidebar_label: DataDrivers
title: DataDrivers
---          

By default, the components of the DHTMLX Suite library operate data in JSON format. But, if necessary, they can also handle data in CSV or XML formats. Using API of [Data Collection](data_collection/api/refs/datacollection.md) or [Tree Collection](tree_collection/api/refs/treecollection.md) provides an opportunity to parse, load or serialize data of a component in any of the mentioned formats. 

However, for further work, you may need to get the same data in different formats, and, in that case, you need to convert the data between them. The best way to do this is to use the **DataDrivers** helper.

**DataDrivers** is a tool that helps you convert data of a component from JSON format to one of the following formats:

- [CSV format](#csvformat)
- [XML format](#xmlformat)

CSV format
-------------------------

To create dataDrivers object, use the *dhx.dataDrivers.csv* constructor:

~~~js
const csvDataDriver = new dhx.dataDrivers.csv(
    {
        columnDelimiter: " | ",
        rowDelimiter: "\n\n"
    }
);
~~~

The constructor has one parameter:

- optional, an object with configuration properties. These properties are:
   
    - **columnDelimiter** - (*string*) a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value
    - **rowDelimiter** - (*string*) a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value.

To convert data of a component (for instance, data of a chart) into a CSV string, use the **serialize** method, as in:

~~~js
csvDataDriver.serialize(chart.data.serialize(), false);
~~~

The method takes two parameters:

- **data** - (*array*) - the data to be converted
- **withoutHeader** - (*boolean*) optional, defines whether the returned string will contain the header, *false* by default

As a result, the converted to **CSV format** data of the chart look like this: 

~~~js title="CSV format"
"month | company A | company B | company C | company D | id

`02 | 20 | 52 | 72 | 34 | 1 |

`03 | 5 | 33 | 90 | 55 | 2 | 

`04 | 55 | 30 | 81 | 66 | 3 | 

`05 | 30 | 11 | 62 | 22 | 4 | "
~~~

XML format
---------------

{{pronote This functionality requires PRO version of the DHTMLX suite package.}}


To create dataDrivers object, use the *dhx.dataDrivers.xml* constructor:

~~~js
const xmlDataDriver = new dhx.dataDrivers.xml();
~~~

To convert data of a component (for example, data of a grid) into an XML string, use the **serialize** method, as in:

~~~js
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

- **data** - (*array*) - the data to be converted

As a result, the converted to **XML format** data of the grid look like this: 

~~~js title="XML format"
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
