---
sidebar_label: save()
title: JavaScript DataCollection - save Method 
description: Learn how the save method of DataCollection sends the changes made in a flat collection to the server with POST, PUT and DELETE requests. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# save()

@short: saves the changes made in the collection to the server side

#### Usage

~~~ts
save(url: string | IDataProxy): void;
~~~

@params:
- `url: string | IDataProxy` - the URL of a server side or DataProxy with the URL configured

@example:
grid.data.save("http://userurl/");

//or
grid.data.save(new DataProxy({ url:"http://userurl/" }));

@descr:

Each time the data of the collection changes, the `save()` method makes an AJAX call and expects the remote URL to save the data changes.
The method will send one of the following requests to the backend:

- `POST` - after adding new data into the collection;
- `PUT` - after editing data of the collection;
- `DELETE` - after deleting data.

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the `saveData` property that returns a "promise" object:

~~~jsx
const data = new DataCollection();
data.save(loader);
return data.saveData.then(() => {
    // now your data is saved
});
~~~

Use the [`isSaved`](data_collection/api/datacollection_issaved_method.md) method to check whether the changes are saved:

~~~jsx
grid.data.saveData.then(() => {
    console.log(grid.data.isSaved());
});
~~~

**Related API**:
- [`isSaved()`](data_collection/api/datacollection_issaved_method.md)
- [`load()`](data_collection/api/datacollection_load_method.md)

@changelog:
Before v7.2, the method sent the `POST` request to the backend on each change of data. <br>
Starting from v7.2, depending on the user actions (editing, adding, or deleting of data), the method sends different requests (POST, PUT, or DELETE respectively) to the server.