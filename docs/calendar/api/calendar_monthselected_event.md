---
sidebar_label: monthSelected
title: monthSelected
---          

@short: fires after a month was selected in the calendar
todoanton any приходит из d.ts
@signature: {'monthSelected: (month: number) => any;'}

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


