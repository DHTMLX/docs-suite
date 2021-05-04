---
sidebar_label: addRowCss
title: addRowCss
description: description
---          

@short: adds a style to a row

@signature: addRowCss(id: string | number, css: string): void;

@params:
- id 		string,number 		the id of a row
- css 		string 				the name of the CSS class

@example:
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>

grid.addRowCss("2", "myCustomClass");

@template: api_method
@descr:

**Related sample**: [Grid. Add Row Css](https://snippet.dhtmlx.com/idvmge2d)

@related: grid/customization.md#styling-rows