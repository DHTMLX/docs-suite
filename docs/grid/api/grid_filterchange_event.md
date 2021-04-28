---
sidebar_label: filterChange
title: filterChange
---          

@short: fires on typing text in an input of a column's header
todoanton вроде string | number
@signature: {'filterChange: (value: string, colId: string, filterId: fixedRowContent) => void;'}
<!-- void filterChange(string|number value,string|number colId,string filter){ ... }; -->

@params:
- value		string,number		an entered value
- colId		string,number		the id of a column
- filterId	string				the type of a filter: "inputFilter" or "selectFilter"

@example:
grid.events.on("FilterChange", function(value,colId,filter){
    console.log("You've entered "+value+" into the "+colId+" column");
});

@template: api_event
@descr:

@changelog: added in v6.3

