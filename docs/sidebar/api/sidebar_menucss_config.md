---
sidebar_label: menuCss
title: JavaScript Sidebar - menuCss Config 
description: You can explore the menuCss config of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# menuCss

@short: Optional. Adds style classes to all containers of Sidebar controls with nested items 

@signature: {'menuCss?: string;'}

@example:
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

const sidebar = new dhx.Sidebar("sidebar_container", {
    menuCss:"my_first_class my_second_class"
});

@descr:
