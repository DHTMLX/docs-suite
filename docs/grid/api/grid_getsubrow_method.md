---
sidebar_label: getSubRow()
title: JavaScript Grid - getSubRow Method 
description: You can explore the getSubRow method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSubRow()

@short: returns the configuration and content of a sub-row for the specified row

:::info
Note that the method works if a sub-row is in the visible area or if the `preserve:true` property is specified in the `subRowConfig` object of the sub-row.
:::

@signature: {'getSubRow(id: string | number): ISubViewCell | null;'}

@params:
- `id: string | number` - the id of a row 

@returns:
An object that includes the following properties:

<table>
    <tbody>
    	 <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) user-defined CSS classes for a sub-row</td>
        </tr>
        <tr>
            <td><b>element</b></td>
            <td>(<i>HTMLElement | null</i>) the parent container of the current sub-row</td>
        </tr>
        <tr>
            <td><b>expanded</b></td>
            <td>(<i>boolean</i>) defines whether a sub-row is expanded by default, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>fullWidth</b></td>
            <td>(<i>boolean</i>) defines whether a sub-row will take all the width of Grid, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(<i>number</i>) the height of a sub-row in pixels, <i>200</i> by default</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(<i>string | number</i>) the inner padding of a sub-row, <i>8</i> by default</td>
        </tr>
        <tr>
            <td><b>preserve</b></td>
            <td>(<i>boolean</i>) saves the state of sub-rows while expanding/collapsing, disappearing from the visible area, data updating, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>toggleIcon</b></td>
            <td>(<i>boolean</i>) enables the icon for expanding/collapsing, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><b>view</b></td>
            <td>(<i>string | object | null</i>) that can be presented by:<ul><li>a <i>string</i>, if the sub-row is set by the HTML content</li><li>an <i>object</i> instance to interact with, if a sub-row is an instance of a nested component (for example, Grid)</li><li><i>null</i>, if the sub-row is unavailable (for example, it is hidden or placed outside the visible area and the `preserve` config is not specified)</li></ul></td>
        </tr>
    </tbody>
</table>

**Related article:** [Getting sub-row config and content](grid/configuration.md#getting-sub-row-config-and-content)

@changelog:
- Added in v9.1
