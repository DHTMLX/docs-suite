---
sidebar_label: How to create Date picker
title: How to create Date picker
---

You can use DHTMLX Calendar as a date picker by putting it inside a popup. 

First, you should create a popup and then attach a calendar into it. Follow the steps below.

1\. Create an input to enter a date into and give it the id "date-input".

2\. Use corresponding object constructors to create a calendar and a popup objects. Note that in this case *null* is used instead of container for Calendar.

3\. Attach the calendar to the popup using the [](popup/api/popup_attach_method.md) method of Popup.

4\. Use the [](popup/api/popup_show_method.md) method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input.

5\. Define the logic of closing the popup with calendar using the [](popup/api/popup_hide_method.md) method of Popup. For example, on selecting a new date in the calendar.

<iframe src="https://snippet.dhtmlx.com/mj7jr6ro?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>
