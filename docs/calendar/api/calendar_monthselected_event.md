---
sidebar_label: monthSelected
title: JavaScript Calendar - monthSelected Event 
description: You can explore the monthSelected event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# monthSelected

@short: fires after a month was selected in the calendar

@signature: {'monthSelected: (month: number) => void;'}

@params:
- `month: number` - the number of the selected month (from 0 to 11)

@example:
calendar.events.on("monthSelected", function(month) {
   console.log("Selected month: " + (month + 1));
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)
