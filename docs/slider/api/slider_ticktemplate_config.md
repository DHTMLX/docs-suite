---
sidebar_label: tickTemplate
title: JavaScript Slider - tickTemplate Config 
description: You can explore the tickTemplate config of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tickTemplate

@short: Optional. Sets a template for rendering values on the scale

@signature: {'tickTemplate?: (position: number) => string;'}

@example:
const slider = new dhx.Slider("slider_container", { 
	// v is the value of majorTick
    tickTemplate: function(v){
        return v + "°";
    } 
});

@descr:

**Related sample**: [Slider. Custom scale](https://snippet.dhtmlx.com/jsfxnplp)

[comment]: # (@related: slider/initializing_slider.md#configuration-properties slider/configuring_slider.md#scale-settings)
