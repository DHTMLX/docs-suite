---
sidebar_label: loadError
title: loadError
---          

@short: fires when loading of data fails

@signature: {'loadError: (response: any) => boolean | void;'}

@params:
`response: string,object` - info about the error

@example:
data.events.on("LoadError", function(error){
	// your code here
});

@descr:

The **response** parameter can be either a string with the text of an error, or an object with two properties:

- status - the code of an error
- text - the text of an error
