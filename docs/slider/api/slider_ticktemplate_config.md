---
sidebar_label: tickTemplate
title: tickTemplate
---          

@short: sets a template for rendering values on the scale

@signature: tickTemplate?: (position: number) => string;

@example: 
var slider = new dhx.Slider("slider_container", { 
	// v is the value of majorTick
    tickTemplate: function(v){
        return v + "°";
    } 
});


@template:	api_config
@descr: 


@related: slider/initializing_slider.md#configurationproperties
slider/configuring_slider.md#scalesettings

@relatedsample: https://snippet.dhtmlx.com/jsfxnplp	Slider. Custom Scale