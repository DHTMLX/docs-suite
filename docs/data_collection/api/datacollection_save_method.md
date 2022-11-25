---
sidebar_label: save()
title: JavaScript DataCollection - save Method 
description: You can explore the save method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# save()

@short: saves changes made in a data collection to the server side

@signature: {'save?: (url: string | IDataProxy) => void;'}

@params:

`url: string | IDataProxy` - the URL of a server side or DataProxy with the URL configured

@example:
grid.data.save("http://userurl/");

//or
grid.data.save(new DataProxy({url:"http://userurl/"}));

@descr:

Each time the user changes data of the component, the **save()** method will make an AJAX call and expect the remote URL to save data changes.
The method will send one of the following requests to the backend:

- `POST` - after adding new data into the component;
- `PUT` - after editing data of the component;
- `DELETE` - after deleting data.

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~js
const data = new DataCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [isSaved](data_collection/api/datacollection_issaved_method.md) method to know whether the changes are saved:

~~~js
grid.data.saveData.then(function () {
	console.log(grid.data.isSaved());
});
~~~

@changelog:
Before v7.2, the method sent the `POST` request to the backend on each change of data. <br>
Starting from v7.2, depending on the user actions (editing, adding, or deleting of data), the method sends different requests (POST, PUT, or DELETE respectively) to the server.