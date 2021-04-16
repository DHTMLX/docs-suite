---
sidebar_label: addRowCss
title: addRowCss
---          

@short: adds a style to a row

@signature: addRowCss(id: string | number, css: string): void;

@params:
- id 		string | number 		the id of a row
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

@related: treegrid/customization.md#stylingrows

@relatedsample: https://snippet.dhtmlx.com/kort67nu	TreeGrid. Add row css

@changelog:
