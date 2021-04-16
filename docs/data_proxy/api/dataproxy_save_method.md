---
sidebar_label: save
title: save
---          

@short: sends an AJAX request to the server

@params:
- data      object      mandatory, data to be sent to the server
- mode      string      mandatory, a mode of the request ("delete", "update", "insert")

@returns: 
- param     promise        "promise" of the data object


@example:
proxy.save({ a: "bad" }, "delete").then(function() {
   console.log("'Bad' is deleted!");
});

@template:	api_method