---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **calendar.events.on()** method of the *events* module:

~~~js
calendar.events.on("Change",function(date, oldDate, click){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
~~~

For example, Calendar can be attached to an input that will display the date selected in Calendar:

~~~html
<input type="text" id="date" />
~~~

~~~js
var calendar = new dhx.Calendar("calendar_container");
calendar.events.on("Change",(date)=>{ 
    document.getElementById("date").value = date.getFullYear() +
        "-" + (date.getMonth() + 1) + "-" +date.getDate();
});
~~~

Several handlers can be attached to one event, and all of them will be executed.

{{note The names of events are case-insensitive.}}

{{editor    https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events}}

## Detaching event listeners

To detach an event listener, use **calendar.events.detach()**:

~~~js
calendar.events.on("Change",function(date, oldDate, click){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
calendar.events.detach("Change");
~~~

## Calling events

To call an event, use **calendar.events.fire()**:

~~~js
calendar.events.fire("name",args);
// where args is an array of arguments
~~~


## The list of events

You can find the full list of events in the Calendar API.

https://docs.dhtmlx.com/suite/calendar__api__calendar_yearselected_event.html

https://docs.dhtmlx.com/suite/calendar__api__calendar_monthselected_event.html


