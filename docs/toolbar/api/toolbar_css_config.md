---
sidebar_label: css
title: css
---          

@short: adds style classes to Toolbar

@signature: {'css?: string;'}

@example:
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var toolbar = new dhx.Toolbar({
    css: "my_first_class my_second_class"
});

@descr:

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Toolbar:

~~~js
var toolbar = new dhx.Toolbar("toolbar", {
	css: "dhx_widget--bg-gray"
});
~~~
