---
sidebar_label: controls
title: JavaScript Calendar - controls Config 
description: The controls property adds a toolbar with the clear, today, and timepicker controls to the DHTMLX JavaScript Calendar. Learn how to render the default set or list the controls in your own order, and check the code examples in the DHTMLX Suite docs.
---

# controls

@short: Optional. Adds a toolbar with the clear, today, and timepicker controls to the calendar

#### Usage

~~~ts
type TCalendarControls = "clear" | "today" | "timepicker" | "spacer";

export interface ICalendarConfig {
  // ... existing config
  timePicker?: boolean;
  controls?: boolean | TCalendarControls[];
}
~~~

@default: false

@descr:

The property takes either a boolean value or an array of control names:

<table>
    <tbody>
        <tr>
            <td><b>true</b></td>
            <td>renders the default set of controls, which is equal to <b>["spacer", "clear", "today"]</b></td>
        </tr>
        <tr>
            <td><b>false</b></td>
            <td>the controls are not rendered, no related markup is added to the DOM. The same applies when the property is not specified. A timepicker enabled via the <b>timePicker</b> property is still displayed</td>
        </tr>
        <tr>
            <td><b>array</b></td>
            <td>renders the listed controls in the specified order</td>
        </tr>
    </tbody>
</table>

The array can include the following controls:

<table>
    <tbody>
        <tr>
            <td><b>"clear"</b></td>
            <td>resets the selected date</td>
        </tr>
        <tr>
            <td><b>"today"</b></td>
            <td>sets the selected date to today and navigates the calendar to the current month</td>
        </tr>
        <tr>
            <td><b>"timepicker"</b></td>
            <td>shows the current time and opens the time selection view. It is equivalent to setting <b>timePicker: true</b></td>
        </tr>
        <tr>
            <td><b>"spacer"</b></td>
            <td>fills in the empty space between the elements of the toolbar</td>
        </tr>
    </tbody>
</table>

The names of controls are case-insensitive, so **"today"**, **"Today"** and **"TODAY"** are treated as the same control. Unknown names are ignored.

:::note
Listing the **"timepicker"** control enables the [timePicker](calendar/api/calendar_timepicker_config.md) property as well. If both ways of adding a timepicker are used at once, it is rendered once.
:::

#### Example

~~~jsx
// renders the default set of controls
const calendar = new dhx.Calendar("calendar_container", {
    controls: true
});

// renders the "Today" button only
const calendar = new dhx.Calendar("calendar_container", {
    controls: ["today"]
});

// renders the timepicker together with the default set of controls
const calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    controls: true
});

// adds the timepicker via the controls array
const calendar = new dhx.Calendar("calendar_container", {
    controls: ["timepicker", "spacer", "clear", "today"]
});

// renders the timepicker once, though it is enabled in two ways
const calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    controls: ["timepicker", "today"]
});

// the names of controls are case-insensitive
const calendar = new dhx.Calendar("calendar_container", {
    controls: ["TODAY", "Clear", "Spacer"]
});
~~~

**Related sample**: [Calendar. Controls](https://snippet.dhtmlx.com/guakfjw0?mode=wide)

**Related article**: [Controls](calendar/configuring.md#controls)

@changelog: added in v9.4
