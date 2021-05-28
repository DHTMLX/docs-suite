---
sidebar_label: yearSelected
title: JavaScript Calendar - yearSelected Event 
hide_title: true
description: You can explore the yearSelected event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# yearSelected

@short: fires after a year was selected in the calendar

@signature: {'yearSelected: (year: number) => void;'}

@params:
`year: number` - the number of the selected year

@example:
calendar.events.on("YearSelected", function(year) {
    console.log("Selected year: " + year);
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)
