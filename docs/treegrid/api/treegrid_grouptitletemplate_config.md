---
sidebar_label: groupTitleTemplate
title: JavaScript TreeGrid - groupTitleTemplate Config 
description: You can explore the groupTitleTemplate config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# groupTitleTemplate

@short: sets a template to the title of a group

@signature: {'groupTitleTemplate?: (groupName: string, groupItems: IDataItem[]) => string;'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    
    groupTitleTemplate: function(groupName, groupItems){
        return groupName + "count:" + groupItems.length
    }
});

@descr:

**Related sample**: [TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

@changelog: added in v6.5

[comment]: # (@related: treegrid/usage.md#grouping-data)

[comment]: # (@relatedapi: treegrid/api/treegrid_groupby_method.md)
