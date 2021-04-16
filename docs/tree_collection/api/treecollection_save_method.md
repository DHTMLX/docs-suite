---
sidebar_label: save
title: save
---          

@short: saves changes made in a tree collection to the server side

@params:

- url			string		the URL of a server side

@example:
diagram.data.save("http://userurl/");


@template:	api_method
@descr:

The component will make an AJAX call and expect the remote URL to save data changes.

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~js
var data = new TreeCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [isSaved](tree_collection/api/issaved.md) method to know whether the changes are saved:

~~~js
diagram.data.saveData.then(function () {
	console.log(diagram.data.isSaved());
});
~~~

