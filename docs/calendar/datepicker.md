---
sidebar_label: DatePicker
title: JavaScript Calendar - DatePicker 
description: You can explore the DatePicker of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# DatePicker

You can use DHTMLX Calendar as a date picker by putting it inside a popup. 

![Date picker](./../assets/calendar/date_picker.png)

First, you should create a popup and then attach a calendar into it. Follow the steps below:

1\. Create an input to enter a date into and give it the id "date-input":

~~~html
<input type="text" id="date-input" style="width: 200px;" readonly/>
~~~

2\. Use corresponding object constructors to create a calendar and a popup objects. Note that in this case *null* is used instead of container for Calendar:

~~~js
const calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});
const popup = new dhx.Popup();
~~~

3\. Attach the calendar to the popup using the [](../popup/api/popup_attach_method.md) method of Popup:

~~~js
popup.attach(calendar);
~~~

4\. Use the [](../popup/api/popup_show_method.md) method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input:

~~~js
const dateInput = document.getElementById("date-input");
dateInput.addEventListener("click", function() {
	popup.show(dateInput);
});
~~~

5\. Define the logic of closing the popup with calendar using the [](../popup/api/popup_hide_method.md) method of Popup. For example, on selecting a new date in the calendar:

~~~js
calendar.events.on("change", function() {
	dateInput.value = calendar.getValue();
	popup.hide();
});
~~~

**Related sample**: [Calendar. Date picker](https://snippet.dhtmlx.com/mj7jr6ro)
