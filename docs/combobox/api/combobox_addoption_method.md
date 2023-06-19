---
sidebar_label: addOption()
title: JavaScript Combo Box - addOption Method 
description: You can explore the addOption method of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# addOption()

@short: adds a new item into the list of Combobox options 

@signature: addOption(value: obj | string, join?: boolean): void;

@params:
- `value: obj | string` - required, the value of a new item
- `join: boolean` - optional, if **true** (by default), adds the new item to the list of options selected in Combobox; if **false**, only the new item will be selected in Combobox

@example:
const combobox = new dhx.Combobox("combo_container", {
    multiselection: true
});
combobox.data.parse(dataset);

combobox.setValue([combobox.data.getId(1), combobox.data.getId(3)]);
console.log(combobox.getValue()); // -> u1664261657492,u1664261657494

combobox.addOption("Georgia", false);
console.log(combobox.getValue()); // -> u1664261657520

// check that the new item is added into the data collection
console.log(combobox.data.serialize());

@descr:

### Adding an option as an object

When you need an extended configuration, while adding an item, pass the **value** parameter as an object with a set of *key:value* pairs that represent attributes of a Combo option. [Check the list of available attributes](combobox/api/combobox_data_config.md). For example:

~~~js
combobox.addOption({
    "value": "Austria",
    "src": "../common/flags/at.png"
});
~~~

{{note The method invokes the [beforeAdd](data_collection/api/datacollection_beforeadd_event.md) and [afterAdd](data_collection/api/datacollection_afteradd_event.md) events of the Data Collection object. If the **beforeAdd** event returns *false*, a new item won't be added into the data collection.
}}

@changelog:

- The `join` parameter was added in v8.0
- The method was added in v.7.3
