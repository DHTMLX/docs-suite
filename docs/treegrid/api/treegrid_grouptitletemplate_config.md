---
sidebar_label: groupTitleTemplate
title: groupTitleTemplate
---          

@short: sets a template to the title of a group

@signature: {'groupTitleTemplate?: (groupName: string, groupItems: IDataItem[]) => string;'}

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    groupTitleTemplate: function(groupName, groupItems){ /*!*/
        return groupName + "count:" + groupItems.length /*!*/
    }
});


@descr: 

**Related sample**: [TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

@related:
treegrid/usage.md#grouping-data

@relatedapi: treegrid/api/treegrid_groupby_method.md


@changelog: added in v6.5