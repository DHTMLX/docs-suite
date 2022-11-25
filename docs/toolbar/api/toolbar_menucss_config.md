---
sidebar_label: menuCss
title: JavaScript Toolbar - menuCss Config 
description: You can explore the menuCss config of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# menuCss

@short: adds style classes to all containers of Toolbar controls with nested items 

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

const toolbar = new dhx.Toolbar("toolbar_container", {
    menuCss:"my_first_class my_second_class"
});

@descr:
