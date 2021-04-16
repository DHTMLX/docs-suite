---
sidebar_label: save
title: save
---          

@short: saves changes made in a data collection to the server side

@params:

- url			string|DataDriver		the URL of a server side or DataDriver with the URL configured

@example:
diagram.data.save("http://userurl/");

//or
diagram.data.save(new DataDriver({url:"http://userurl/"}));


@template:	api_method
@descr:

The component will make an AJAX call and expect the remote URL to save data changes.

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the **saveData** property that returns a "promise" object:

~~~js
var data = new DataCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [isSaved](data_collection/api/issaved.md) method to know whether the changes are saved:

~~~js
diagram.data.saveData.then(function () {
	console.log(diagram.data.isSaved());
});
~~~

