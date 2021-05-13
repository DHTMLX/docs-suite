---
sidebar_label: tickTemplate
title: tickTemplate
---          

@short: sets a template for rendering values on the scale

@signature: {'tickTemplate?: (position: number) => string;'}

@example: 
var slider = new dhx.Slider("slider_container", { 
	// v is the value of majorTick
    tickTemplate: function(v){
        return v + "°";
    } 
});



@descr: 

**Related sample**: [Slider. Custom Scale](https://snippet.dhtmlx.com/jsfxnplp)

@related: slider/initializing_slider.md#configuration-properties
slider/configuring_slider.md#scale-settings

