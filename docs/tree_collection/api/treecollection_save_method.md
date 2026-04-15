---
sidebar_label: save()
title: JavaScript TreeCollection - save Method 
description: You can explore the save method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# save()

@short: saves changes made in a tree collection to the server side

@signature: {'save(url: IDataProxy | string): void;'}

@params:
- `url: IDataProxy | string` - the URL of a server side or DataProxy with the URL configured

@example:
toolbar.data.save("http://userurl/");

//or
toolbar.data.save(new DataProxy({ url:"http://userurl/" }));

@descr:

Each time the user changes data of the component, the `save()` method will make an AJAX call and expect the remote URL to save data changes.
The method will send one of the following requests to the backend:

- `POST` - after adding new data into the component;
- `PUT` - after editing data of the component;
- `DELETE` - after deleting data.


Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~jsx
const data = new TreeCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [](tree_collection/api/treecollection_issaved_method.md) method to check whether the changes are saved:

~~~jsx
toolbar.data.saveData.then(function () {
    console.log(toolbar.data.isSaved());
});
~~~
