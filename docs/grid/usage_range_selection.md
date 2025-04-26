---
sidebar_label: Work with Range Selection object
title: JavaScript Grid - Work with Range Selection Object 
description: You can explore how to work with Range Selection Object of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Range Selection object

You can manage range selection withing a grid via the API of the [Range selection](grid/configuration.md/#range-selection) object. It provides methods for setting and resetting a range of cells, getting information about the current range, and checking whether specific cells belong to the selected range. It also supports an event system to track changes.

To initialize the Range module, use the [rangeSelection](grid/api/grid_rangeselection_config.md) property in the Grid configuration. Once the Grid is created, the Range module is accessible through the `grid.range` property.