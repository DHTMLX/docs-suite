---
sidebar_label: DatePicker
title: JavaScript Calendar - DatePicker 
description: You can explore the DatePicker of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# DatePicker

Put DHTMLX Calendar inside a popup to create a date picker. 

![Calendar used as a date picker popup attached to a date input field in DHTMLX Suite](/img/calendar/date_picker.png)

Follow the steps below:

1\. Create an input field for the date and give it the id `date-input`:

~~~html
<input type="text" id="date-input" style="width: 200px;" readonly/>
~~~

2\. Use the `Calendar` and `Popup` constructors to create the two objects. Note that `Calendar` takes `null` instead of a container:

~~~js
const calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});
const popup = new dhx.Popup();
~~~

3\. Call the [](popup/api/popup_attach_method.md) method of `Popup` to attach the calendar:

~~~js
popup.attach(calendar);
~~~

4\. Add a click handler to the `date-input` field. Inside the handler, call the [](popup/api/popup_show_method.md) method of `Popup` to open the popup:

~~~js
const dateInput = document.getElementById("date-input");
dateInput.addEventListener("click", function() {
    popup.show(dateInput);
});
~~~

5\. Close the popup with the [](popup/api/popup_hide_method.md) method of `Popup`. For example, close it when the user selects a new date:

~~~js
calendar.events.on("change", function() {
    dateInput.value = calendar.getValue();
    popup.hide();
});
~~~

**Related sample**: [Calendar. Date picker](https://snippet.dhtmlx.com/mj7jr6ro)
