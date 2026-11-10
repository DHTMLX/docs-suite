---
sidebar_label: save()
title: JavaScript TreeCollection - save Method 
description: You can explore the save method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
toolbar.data.save("http://userurl/");

//or
toolbar.data.save(new DataProxy({ url:"http://userurl/" }));

@descr:

Each time the data of the collection changes, the `save()` method makes an AJAX call and expects the remote URL to save the data changes.
The method will send one of the following requests to the backend:

- `POST` - after adding new data into the collection;
- `PUT` - after editing data of the collection;
- `DELETE` - after deleting data.


Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~jsx
const data = new TreeCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [`isSaved()`](tree_collection/api/treecollection_issaved_method.md) method to check whether the changes are saved:

~~~jsx
toolbar.data.saveData.then(function () {
    console.log(toolbar.data.isSaved());
});
~~~
