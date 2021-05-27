---
sidebar_label: tickTemplate
title: JavaScript Slider - tickTemplate Config 
hide_title: true
description: You can explore the tickTemplate config of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# tickTemplate

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

[comment]: # (@related: slider/initializing_slider.md#configuration-properties slider/configuring_slider.md#scale-settings)
