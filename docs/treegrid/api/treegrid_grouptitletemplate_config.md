---
sidebar_label: groupTitleTemplate
title: groupTitleTemplate
---          

@short: sets a template to the title of a group

@signature: groupTitleTemplate?: (groupName: string, groupItems: IDataItem[]) => string;

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    groupTitleTemplate: function(groupName, groupItems){ /*!*/
        return groupName + "count:" + groupItems.length /*!*/
    }
});

@template:	api_config
@descr: 


@related:
treegrid/usage.md#groupingdata

@relatedapi: treegrid/api/treegrid_groupby_method.md

[TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

@changelog: added in v6.5