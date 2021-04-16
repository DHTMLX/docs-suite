---
sidebar_label: Properties
title: Datepicker properties
---

<table class="webixdoc_links">
    <tbody>
        <tr>
            <td class="webixdoc_links0"><b>type</b></td>
            <td>(<i>string</i>) the type of a control, set it to "datepicker"</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>name</b></td>
            <td>(<i>string</i>) the name of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>id</b></td>
            <td>(<i>string</i>) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>value</b></td>
            <td>(<i>Date|string</i>) the value of a datepicker</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>valueFormat</b></td>
            <td>(<i>string|Date</i>) defines the format of the value that will be returned while getting the current
                value of the control: "string" (default) or "Date"</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>width</b></td>
            <td>(<i>string|number|"content"</i>) the width of a control </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>height</b></td>
            <td>(<i>string|number|"content"</i>) the height of a control </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>padding</b></td>
            <td>(<i>string|number</i>) sets padding between a cell and a border of a DatePicker control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>css</b></td>
            <td>(<i>string</i>) adds style classes to a control </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>disabled</b></td>
            <td>(<i>boolean</i>) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>) </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>required</b></td>
            <td>(<i>boolean</i>) <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">defines whether a
                    control is required</a> </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>hidden</b></td>
            <td>(<i>boolean</i>) defines whether a control is hidden</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>helpMessage</b></td>
            <td>(<i>string</i>) adds a help message to a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>preMessage</b></td>
            <td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>successMessage</b></td>
            <td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>errorMessage</b></td>
            <td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>label</b></td>
            <td>(<i>string</i>) specifies a label for a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>labelWidth</b></td>
            <td>(<i>string|number</i>) sets the width of the label of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>hiddenLabel</b></td>
            <td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>labelPosition</b></td>
            <td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>validation</b></td>
            <td>(<i>function</i>) <a href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">the
                    validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to
                indicate the result of validation</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>icon</b></td>
            <td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> from
                the used icon font</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>placeholder</b></td>
            <td>(<i>string</i>) a tip for the input </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>editable</b></td>
            <td>(<i>boolean</i>) allows a user to enter the value of the control manually, false by default </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>mode</b></td>
            <td>(<i>string</i>) specifies the mode of displaying a calendar: "calendar" (default), "month", "year" </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>date</b></td>
            <td>(<i>Date|string</i>) defines the date that will be opened when the calendar is created, differs from the
                selected date (set by <b>value</b>) </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>mark</b></td>
            <td>(<i>function</i>) adds a CSS class to specific days </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>disabledDates</b></td>
            <td>(<i>function</i>) allows disabling some date intervals, day labels are dimmed </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>weekStart</b></td>
            <td>(<i>string</i>) sets the starting day of the week: "monday" or "sunday" (default) </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>weekNumbers</b></td>
            <td>(<i>boolean</i>) defines whether to show the numbers of weeks, <i>false</i> by default</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>timePicker</b></td>
            <td>(<i>boolean</i>) adds a timepicker into a calendar, <i>false</i> by default</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>timeFormat</b></td>
            <td>(<i>number</i>) defines the time format of a timepicker: 12-hour or 24-hour (12 or 24 (default),
                correspondingly)</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>dateFormat</b></td>
            <td>(<i>string</i>) defines the format of dates in the calendar, "%d/%m/%y" by default</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>thisMonthOnly</b></td>
            <td>(<i>boolean</i>) hides dates of the previous/next months relative to the currently displayed one</td>
        </tr>
    </tbody>
</table>
