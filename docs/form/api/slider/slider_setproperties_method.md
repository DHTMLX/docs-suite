---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Slider Method 
description: You can explore the setProperties method of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(propertyConfig: ISliderProps): void;'}

@params:
- `propertyConfig: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("slider").setProperties({ 
    min: 5, max: 20, 
    step: 5, 
    tooltip: false
});

@descr:

The method invokes the [](form/api/slider/slider_afterchangeproperties_event.md) and [](form/api/slider/slider_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **Slider** control:

<table>
	<tbody>
    <tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    <tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Slider control</td>
		</tr>	
    <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    <tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    <tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
    <tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
    <tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    <tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
    <tr>
			<td><b>min</b></td>
			<td>(<i>number</i>) the minimal value of slider, 0 by default</td>
		</tr>
    <tr>
			<td><b>max</b></td>
			<td>(<i>number</i>) the maximal value of slider, 100 by default</td>
		</tr>
    <tr>
			<td><b>step</b></td>
			<td>(<i>number</i>) the step the slider thumb will be moved with, 1 by default</td>
		</tr>
    <tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the direction of the Slider scale, "horizontal" by default</td>
		</tr>
    <tr>
			<td><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables prompt messages with ticks values on hovering over the slider thumb, true by default</td>
		</tr>
    <tr>
			<td><b>range</b></td>
			<td>(<i>boolean</i>) enables/disables the possibility to select a range of values on the slider</td>
		</tr>
    <tr>
			<td><b>inverse</b></td>
			<td>(<i>boolean</i>) enables/disables the inverse slider mode</td>
		</tr>
    <tr>
			<td><b>tick</b></td>
			<td>(<i>number</i>) sets the interval of steps for rendering the slider scale</td>
		</tr>
    <tr>
			<td><b>majorTick</b></td>
			<td>(<i>number</i>) sets interval of rendering numeric values on the slider scale</td>
		</tr>
    <tr>
			<td><b>tickTemplate</b></td>
			<td>(<i>function</i>) sets a template for rendering values on the scale</td>
		</tr>
  </tbody>
</table>

@changelog: added in v7.0
