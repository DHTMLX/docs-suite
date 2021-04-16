---
sidebar_label: palette
title: palette
---          

@short: contains arrays of colors you want to show in a colorpicker

@signature: paletteOnly?: boolean;

@default: false

@example: 
var colorpicker = new dhx.Colorpicker("colorpicker_container", {
	grayShades: false,
	palette: [
    	["#ffffc0", "#ffff9c", "#ecd078", "#a59154", "#5e5330"],
    	["#ff916b", "#ff7657", "#d95b43", "#973f2e", "#56241a"],
    	["#ff4169", "#f93555", "#c02942", "#861c2e", "#4c101a"],
    	["#863958", "#6d2e47", "#542437", "#3a1926", "#210e16"],
    	["#84bec3", "#6b9a9e", "#53777a", "#3a5355", "#212f30"]
	]
});


@template:	api_config
@descr: 
This is the **default** array of colors of the ColorPicker:

~~~js
var palette = [
	["#D4DAE4","#B0B8CD","#949DB1","#727A8C","#5E6677","#3F4757","#1D2534"],
	["#FFCDD2","#FE9998","#F35C4E","#E94633","#D73C2D","#CA3626","#BB2B1A"],
	["#F9E6AD","#F4D679","#EDB90F","#EAA100","#EA8F00","#EA7E00","#EA5D00"],
	["#BCE4CE","#90D2AF","#33B579","#36955F","#247346","#1D5B38","#17492D"],
	["#BDF0E9","#92E7DC","#02D7C5","#11B3A5","#018B80","#026B60","#024F43"],
	["#B3E5FC","#81D4FA","#29B6F6","#039BE5","#0288D1","#0277BD","#01579B"],
	["#AEC1FF","#88A3F9","#5874CD","#2349AE","#163FA2","#083596","#002381"],
	["#C5C0DA","#9F97C1","#7E6BAD","#584A8F","#4F4083","#473776","#3A265F"],
	["#D6BDCC","#C492AC","#A9537C","#963A64","#81355A","#6E3051","#4C2640"],
	["#D2C5C1","#B4A09A","#826358","#624339","#5D4037","#4E342E","#3E2723"]
];
~~~


@related: colorpicker/how_to_start.md#initializecolorpicker
colorpicker/configuration.md

@relatedsample: https://snippet.dhtmlx.com/j5gisdew	Colorpicker. Custom Palette Colors