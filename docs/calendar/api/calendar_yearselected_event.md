---
sidebar_label: yearSelected
title: yearSelected
---          

@short: fires after a year was selected in the calendar

@signature: yearSelected: (year: number) => void;

@params:
- year      number      the number of the selected year


@example:
calendar.events.on("YearSelected", function(year) {
    console.log("Selected year: " + year);
});


@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events

