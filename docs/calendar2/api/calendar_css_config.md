---
sidebar_label: css
title: css
---          

@short: adds style classes to Calendar

@signature: css?: string;

@example:
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



@descr:
**Related sample**: [Calendar. Styling (custom CSS)](https://snippet.dhtmlx.com/2045cbe1)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Calendar: 

~~~js
var calendar = new dhx.Calendar({
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~



@related:
calendar/customization.md#stylingcalendar
calendar/how_to_start.md#initialize-calendar