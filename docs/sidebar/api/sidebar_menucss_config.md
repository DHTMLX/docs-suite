---
sidebar_label: menuCss
title: menuCss
---          

@short: adds style classes to all containers of Sidebar controls with nested items 

@signature: menuCss?: string;

@example: 
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var sidebar = new dhx.Sidebar("sidebar", {
    menuCss:"my_first_class my_second_class"
});


@template:	api_config
@descr: 



