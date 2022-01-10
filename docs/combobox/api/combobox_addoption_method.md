---
sidebar_label: addOption()
title: JavaScript Combo Box - addOption Method 
description: You can explore the addOption method of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# addOption()

@short: adds a new item into the list of Combobox options 

@signature: addOption(value: string): void;

@example:
const combobox = new dhx.Combobox("combobox");
combobox.data.parse(dataset);

combobox.addOption("Georgia");

// check that the new item is added into the data collection
console.log(combobox.data.serialize());

@descr:

{{note The method invokes the [beforeAdd](data_collection/api/datacollection_beforeadd_event.md) and [afterAdd](data_collection/api/datacollection_afteradd_event.md) events of the Data Collection object. If the **beforeAdd** event returns *false*, a new item won't be added into the data collection.
}}

@changelog: added in v.7.3
