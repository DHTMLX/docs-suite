---
sidebar_label: beforeChange
title: beforeChange
---          

@short: fires before the change of date selection

@signature: beforeChange: (date: Date, oldDate: Date, byClick: boolean) => boolean | void;

@params:
- date  		Date    	the newly selected date
- oldDate  	 	Date    	the previously selected date
- byClick 		boolean 	defines whether the change happened because of a click on a date (true), or due to an API call (false)

@returns:
- result		boolean		true - to allow changing date selection, false - to prevent changing date selection

@example:
calendar.events.on("BeforeChange",function(date, oldDate, click){
	if (date > new Date())
    	return false;
});


@template: api_event
@descr:
You can block selection of particular dates by returning *false* from the event handler.

@related:
calendar/handling_events.md

@relatedsample:
https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events

@relatedapi:calendar/api/calendar_change_event.md