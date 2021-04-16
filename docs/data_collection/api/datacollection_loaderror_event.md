---
sidebar_label: loadError
title: loadError
---          

@short: fires when loading of data fails
	
@params:
- error			string,object		info about the error

@example:
data.events.on("LoadError", function(error){
	// your code here
});


@template:	api_event
@descr:
The **error** parameter can be either a string with the text of an error, or an object with two properties:

- status - the code of an error
- text - the text of an error
	