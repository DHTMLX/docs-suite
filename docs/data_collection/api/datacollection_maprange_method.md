---
sidebar_label: mapRange
title: mapRange
---          

@short: returns a new array of the items correspond to the specified parameters

@params:
- from			number		the initial position of an item in the range
- to            number      the final position of an item in the range
- handler       function    a function that will be called for each item from the specified range

@returns:
- items         array       a new array of matching item objects     

@example:
var result = diagram.data.mapRange(0, 20, function(item, index) {
    console.log(item.id, index);
});

@template: api_method
@descr: