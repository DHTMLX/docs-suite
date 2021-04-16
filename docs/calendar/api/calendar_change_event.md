---
sidebar_label: change
title: change
---          

@short: fires on change of date selection

@signature: change: (date: Date, oldDate: Date, byClick: boolean) => void;

@params:
- date  		Date    	the newly selected date
- oldDate   	Date    	the previously selected date
- click 		boolean 	defines whether the change happened because of a click on a date (true), or due to an API call (false)


@example:
calendar.events.on("Change",function(date, oldDate, click){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});


@template: api_event
@descr:

@relatedapi:calendar/api/calendar_beforechange_event.md

@related:
calendar/handling_events.md

@relatedsample:
https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events