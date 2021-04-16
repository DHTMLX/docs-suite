---
sidebar_label: monthSelected
title: monthSelected
---          

@short: fires after a month was selected in the calendar

@signature: monthSelected: (month: number) => void;

@params:
- month     number      the number of the selected month (from 0 to 11)

@example:
calendar.events.on("MonthSelected", function(month) {
   console.log("Selected month: " + (month + 1));
});


@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events


