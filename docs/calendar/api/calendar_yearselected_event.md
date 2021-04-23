---
sidebar_label: yearSelected
title: yearSelected
---          

@short: fires after a year was selected in the calendar
todoanton any приходит из d.ts
@signature: {'yearSelected: (year: number) => any;'}

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

