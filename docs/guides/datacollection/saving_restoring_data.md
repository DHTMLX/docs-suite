---
sidebar_label: Saving and restoring data
title: JavaScript Guides - Saving and restoring data 
description: You can learn how to save and restore data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Saving and restoring data

You can use the DataCollection API to save the state of a component and send it to a different component or to the server. 

## Saving the state of a component

To save the current state of a component, use the [`serialize()`](data_collection/api/datacollection_serialize_method.md) method of Data Collection. The method is used to serialize data into the JSON, XML or CSV format. It takes the following parameter:

- `driver: string` - optional, the format that the data will be serialized into ("json" (default), "csv", "xml")

and returns serialized data for each item of the component either as an array of JSON objects or as a CSV/XML string.

For example:

~~~jsx
const state = grid1.data.serialize();
~~~

**Related sample**: [Data. Serialize](https://snippet.dhtmlx.com/7c35n4uf)

## Restoring the state of a component

### Sending saved data to a new component

After you've saved a component's state, you can send the data stored in the saved state to a new component using the [`parse()`](data_collection/api/datacollection_parse_method.md) method of Data Collection:

~~~jsx
// creating a new grid
const grid2 = new dhx.Grid(document.body);
// parsing the state of grid1 into grid2
grid2.data.parse(state);
~~~

### Saving data changes to the server side

You can also save changes made in the data to the server side using the [`save()`](data_collection/api/datacollection_save_method.md) method of Data Collection. The method takes the following parameter:

- `url: string | IDataProxy` - the URL of a server side or DataProxy with the URL configured

For example:

~~~jsx
grid.data.save("http://userurl/");

//or
grid.data.save(new DataProxy({url:"http://userurl/"}));
~~~

Each time the user changes data of the component, the `save()` method will make an AJAX call and expect the remote URL to save data changes. The method will send one of the following requests to the back-end:

- `POST` - after adding new data into the component
- `PUT` - after editing data of the component
- `DELETE` - after deleting data

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the `saveData` property that returns a "promise" object:

~~~jsx
const data = new DataCollection();
data.save(loader);
return data.saveData.then(function(){
    // now your data is saved
});
~~~

Use the [`isSaved()`](data_collection/api/datacollection_issaved_method.md) method to check whether the changes are saved. The method returns *true*, if the changes are saved, otherwise, *false*.

~~~jsx
grid.data.saveData.then(function(){
    console.log(grid.data.isSaved());
});
~~~


