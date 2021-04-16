---
sidebar_label: getProperties
title: getProperties
---          

@short: returns an object with the available configuration attributes of the control

@returns:
param   object      an object with the available attributes of the control and their values


@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "slider",
            name:"slider",
            label: "slider",
            labelWidth: "50px",
            min: 0,
            max: 100
        }
    ]
});

form.getItem("slider").getProperties();

// -> the returned object

{
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	inverse: false,
	label: "slider",
	labelPosition: "top",
	labelWidth: "50px",
	majorTick: undefined,
	max: 100,
	min: 0,
	mode: "horizontal",
	padding: 0,
	range: false,
	step: 1,
	tick: undefined,
	tickTemplate: undefined,
	tooltip: true,
	width: "content"
}

@template: api_method
@descr:
The returned object of the **Slider** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
    <tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Slider control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>min</b></td>
			<td>(<i>number</i>) the minimal value of slider, 0 by default</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>max</b></td>
			<td>(<i>number</i>) the maximal value of slider, 100 by default</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>step</b></td>
			<td>(<i>number</i>) the step the slider thumb will be moved with, 1 by default</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>mode</b></td>
			<td>(<i>string</i>) the direction of the Slider scale, "horizontal" by default</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables prompt messages with ticks values on hovering over the slider thumb, true by default</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>range</b></td>
			<td>(<i>boolean</i>) enables/disables the possibility to select a range of values on the slider</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>inverse</b></td>
			<td>(<i>boolean</i>) enables/disables the inverse slider mode</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>tick</b></td>
			<td>(<i>number</i>) sets the interval of steps for rendering the slider scale</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>majorTick</b></td>
			<td>(<i>number</i>) sets interval of rendering numeric values on the slider scale</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>tickTemplate</b></td>
			<td>(<i>function</i>) sets a template for rendering values on the scale</td>
		</tr>
  </tbody>
</table>





@changelog: added in v7.0


