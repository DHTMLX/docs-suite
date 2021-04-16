---
sidebar_label: filterChange
title: filterChange
---          

@short: fires on typing text in an input of a column's header

@signature: filterChange: (value: string | number, colId: string | number, filterId: "inputFilter" | "selectFilter" | "comboFilter") => void;

@params:
- value		string,number		an entered value
- colId		string,number		the id of a column
- filter	string				the type of a filter: "inputFilter", "selectFilter", "comboFilter"

@example:
grid.events.on("FilterChange", function(value,colId,filter){
    console.log("You've entered "+value+" into the "+colId+" column");
});

@template: api_event
@descr:

@changelog: added in v6.3
