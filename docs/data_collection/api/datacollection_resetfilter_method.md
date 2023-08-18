---
sidebar_label: resetFilter()
title: JavaScript DataCollection - resetFilter Method 
description: You can explore the resetFilter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resetFilter()

@short: resets the active filters

@signature: {'resetFilter(config?: object): boolean;'}

@params:
- `config: object` - optional, specifies the parameters of resetting the active filters. If the config isn't specified or it is empty, all the filters except for those that have the **permanent** property in the configuration object will be reset. Can contain the following properties:
	- `id: string` - optional, the id of the filter to reset
	- `permanent: boolean` - optional, *true* to reset all the active filters, including those that have the **permanent:true** property in their config

@returns:
- `result: boolean` - *true*, if all the filters with the **permanent:true** property in the config have been reset, otherwise *false*

@example:

// resets all the filters, except for those that have the "permanent" property in the config
component.data.resetFilter();

// resets all the filters, including those that have the "permanent" property in the config
component.data.resetFilter({ permanent: true });

// resets the filter with the specified id
component.data.resetFilter({ id: "filter_id" });

@descr:	

**Related sample**: 
- [Data. ResetFilter](https://snippet.dhtmlx.com/jg8wxfvc)
- [Grid. ResetFilter](https://snippet.dhtmlx.com/15trblk2)