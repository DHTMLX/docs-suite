---
sidebar_label: Calendar API
title: Calendar API
---          

## Constructor

~~~js
var calendar = new dhx.Calendar("calendar_container",{
    weekNumbers: true
});
~~~

Parameters:

- the HTML container of dhtmlxCalendar
- optional, an object with configuration settings (check below)

## Methods

### setValue

- short: selects a date in the calendar
- params:
	- date  Date    the date to select
- returns: 
	- success 	boolean		defines, whether a date has been successfully added into the calendar
- example:

~~~js
// selects the current date
calendar.setValue(new Date());
~~~
- relatedapi: getValue

### getValue

- short: returns the selected date
- params:
	- asDate	boolean		defines whether a date will be returned as a Date object
- returns:
	- date		Date,string		the selected date
- example:

~~~js
var date = calendar.getValue(true); // -> Fri Jan 11 2019 18:09:15 GMT+0300 
~~~
- relatedapi: setValue

### show

- short: opens the calendar in one of the three modes ("calendar", "month", "year")
- params:
	- date	 Date    the date that should be shown in the calendar
	- mode   string  the mode in which the calendar will be opened 
- example:

~~~js
calendar.show(new Date(2020,11,12));
~~~

- descr:
The **modes** are:

- **"calendar"** - shows the days of a month, the default mode
- **"month"** - allows selecting a month of a year
- **"year"** - allows selecting a year
- **"timepicker"** - allows showing calendar in the timepicker mode

~~~js
// shows the month of the specified date
calendar.show(new Date(2020,11,12),"month");

// shows the current month
calendar.show(null,"month");

// shows the current year together with previous/next years
calendar.show(new Date(2020,11,12),"year");

// shows the current year
calendar.show(null,"year");

// shows calendar in the timepicker mode
calendar.show(null,"timepicker");
~~~

### destructor

- short: releases occupied resources
- example:

~~~js
calendar.destructor();
~~~

### link

- short: links a calendar to another calendar for selecting a date range
- parameter:
	 - calendar2 		object		an object of a calendar to link to
- example:

~~~js
calendar.link(calendar2);
~~~
	

### unlink

- short: unlinks two linked calendars
- parameter:
	- calendar2 		object		a linked calendar
- example:

~~~js
calendar.unlink(calendar2);
~~~


## Events

### Change

- short:fires if change of date selection occurs
- params:
	- date  		Date    	the newly selected date;
	- oldDate   	Date    	the previously selected date;
	- click 		boolean 	defines whether the change happened because of a click on a date (*true*), or due to an API call (*false*) 
- example:

~~~js
calendar.events.on("Change",function(date, oldDate, click){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
~~~

### BeforeChange

- short:fires before change of date selection occurs
- params:
	- date  		Date    	the newly selected date
	- oldDate  	 	Date    	the previously selected date
	- click 		boolean 	defines whether the change happened because of a click on a date (*true*), or due to an API call (*false*)  
- example:

~~~js
calendar.events.on("BeforeChange",function(date, oldDate, click){
    if (date > new Date())
        return false;
});
~~~

- descr:
You can block selection of particular dates by returning *false* from the event handler.

### DateHover

- short:fires when the mouse pointer is over a date
- params:
	- e 		Event		a native event object
	- date  	Date    	the date under the pointer
- example:

~~~js
calendar.events.on("DateHover", function(e, date) {
    dhx.tooltip(date, {node: e.target, position: "bottom"});
});
~~~

## Properties

### value

- short: selects the day (adds a round blue marker); 
- type:Date
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,1,10)
});
~~~
- descr:
If the property is not specified in the configuration object, nothing is selected in the calendar on initialization.

### date

- short: defines the date that will be opened when the calendar is created
- type:Date
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(),
    date: new Date(2018, 0, 1)
});
~~~
- descr:
By default, it is either the same as **value**, or shows the current date, if **value** is not specified.


### css

- short: adds style classes to Calendar
- type: string
- example: 

~~~js
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>
 
var calendar = new dhx.Calendar({
    css:"my_first_class my_second_class"
});
~~~

### mark

- short: adds a CSS class to specific days 
- type:function
- example:

~~~js
<style>
.third {
    background: orange;
    border-radius: 50%;
}
</style>

var calendar = new dhx.Calendar("calendar_container",{
	mark : function(date){return date.getDate() % 4 == 1 ? "third" : ""}
});
~~~
- descr:
The function passed to the method receives one parameter:
	- date - Date - a date object

and must return a string with the name of the CSS class or an empty string.

### rangeMark

- short: adds a CSS class to a date range for linked calendars 
- type: function
- example:

~~~js
var calendar = new dhx.Calendar("calendar1", {
	rangeMark: function(date){// your logic here}
});

var calendar2 = new dhx.Calendar("calendar2", {
	rangeMark: function(date){// your logic here}
});

calendar.link(calendar2);
~~~

- descr:
The function passed to the method receives one parameter:
	- date - Date - a date object

? and must return a string with the name of the CSS class or an empty string.


### block

- short:allows disabling some date intervals, day labels are dimmed 
- type:function
- example:

~~~js
var block = [ new Date(2019,0,8), new Date(2019,0,10) ];

var calendar = new dhx.Calendar("calendar_container",{
	block : function(date) {
		return date > block[0] && date < block[1];
	}
});
~~~
- descr:
The function passed to the method receives one parameter:
	- date - Date - a date object

and must return a boolean value to define whether a passed date should be blocked (if *true*, the date is inactive).


### weekStart

- short:sets the starting day of the week 
- values:"monday"|"sunday"
- default:"sunday"
- type:string
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    weekStart:"monday"
});
~~~



### weekNumbers

- short:defines whether to show the numbers of weeks
- type:boolean
- default:false
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", { 
    weekNumbers: true
});
~~~


### view

- short: the mode of Calendar initialization
- type: string
- values: "calendar","year","month"
- default:"calendar"
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    view: "month"
});
~~~

### timePicker

- short: adds a timepicker into the calendar
- type:boolean
- default:false
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    timePicker: true      
});
~~~

- descr: You can define the format of displaying time in a timepicker via the **timeFormat** property
- relatedapi: timeFormat

### timeFormat

- short: defines the time format for a timepicker in the calendar
- type: number
- values:12|24
- default:24
- example:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    timeFormat: 12
});
~~~

- descr: The time format can be presented either in the 12-hour or in the 24-hour format.
- relatedapi:timePicker

### dateFormat

- short: defines the format of dates in the calendar
- type: string
- default: "%d/%m/%y"
- example:
~~~js
var calendar = new dhx.Calendar("calendar_container", {
   dateFormat:"%d.%m.%Y"
});
~~~
- descr:
dhtmlxCalendar uses the following characters for setting a date format:

| Character		|	Definition
|---------------|-----------------------------------------------|
|**%d**			|day as a number with leading zero, 01..31		|
|**%j**			|day as a number, 1..31							|
|**%D**			|short name of the day, Su Mo Tu...				|
|**%l**			|full name of the day, Sunday Monday Tuesday...	|
|**%m**			|month as a number with leading zero, 01..12	|
|**%n**			|month as a number, 1..12						|
|**%M**			|short name of the month, Jan Feb Mar...		|
|**%F**			|full name of the month, January February March...|
|**%y**			|year as a number, 2 digits						|
|**%Y**			|year as a number, 4 digits						|
|**%h**			|hours 12-format with leading zero, 01..12)		|
|**%g**			|hours 12-format, 1..12)						|
|**%H**			|hours 24-format with leading zero, 01..24		|
|**%G**			|hours 24-format, 1..24							|
|**%i**			|minutes with leading zero, 01..59				|
|**%s**			|seconds with leading zero, 01..59				|
|**%a**			|am or pm										|
|**%A**			|AM or PM										|
|**%u**			|milliseconds									|
|**%P**			|timezone offset								|


### hideOtherMonth


- short: hides dates of the previous/next months relative to the currently displayed one
- type: boolean
- default: false
- example:
~~~js
var calendar = new dhx.Calendar("calendar_container", {
   hideOtherMonth:true
});
~~~

### width

- short: sets the width of the calendar
- type: string
- default: "250px"
- example:
~~~js
var calendar = new dhx.Calendar("calendar_container", {
   width: "300px"
});
~~~


@todo:
- add links to related api, articles and samples


