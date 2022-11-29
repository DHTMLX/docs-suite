---
sidebar_label: save()
title: JavaScript TreeCollection - save Method 
description: You can explore the save method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# save()

@short: saves changes made in a tree collection to the server side

@signature: {'save(url: IDataProxy | string): void;'}

@params:
- `url: object | string` - the URL of a server side (or DataProxy object)

@example:
diagram.data.save("http://userurl/");

@descr:

The component will make an AJAX call and expect the remote URL to save data changes.

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~js
const data = new TreeCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [](tree_collection/api/treecollection_issaved_method.md) method to know whether the changes are saved:

~~~js
diagram.data.saveData.then(function () {
	console.log(diagram.data.isSaved());
});
~~~
