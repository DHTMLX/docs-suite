---
sidebar_label: CSS classes of base elements
title: CSS classes of base elements
---          

The DHTMLX library provides a set of CSS classes that you can add to HTML elements to style them in your web project outside DHTMLX widgets. 

The principle of these CSS classes' naming is based on the [BEM](https://en.bem.info/methodology/) methodology. 

Therefore, a class name includes three parts: 

- *Block name*
- *Element name*
- *Modifier name*

Block names and element names are separated by a double underscore: *block__element*. 

Block and elements' names are separated from modifier names by a double hyphen: *block--modifier*, *block__element--modifier*.

{{note The **'dhx'** prefix is used at the beginning of all class names in the DHTMLX library}}


**The full list of CSS classes of the DHTMLX library you can use to style HTML elements is described below.**

## Form group

### Block 

- <b>dhx_form-group</b> - Use this class to apply the same formatting to different HTML elements at once.  It includes modifiers for manipulating the appearance and state of a layout.


### Modifiers

- <b>dhx_form-group--no-message-holder</b> - Removes the bottom margin where a text for <br/> a premessage could be placed

- <b>dhx_form-group--disabled</b> - A form-group has a disabled state. <br/> It can't be activated (selected, clicked on, typed into) <br/> or accept focus.

- <b>dhx_form-group--hidden</b> -  Hides a form group visually

- <b>dhx_form-group--required</b> - Adds the required mark to a label <br/> inside a form group

- <b>dhx_form-group--state_error</b> - Marks the content  of input/label red. <br/> Indicates error

- <b>dhx_form-group--state_success</b> - Marks the content of input/label green. <br/>  Indicates success

- <b>dhx_form-group--label_sr</b> - Hides a label inside a form group visually

- <b>dhx_form-group--inline</b> - Puts a  label and an input in one line

- <b>dhx_form-group--textarea</b> - Add this class to the form group, <br/> which contains a &lt;textarea&gt; element, to style it 


Here's what markup looks like using a form-group example:

~~~html 
<!-- Form-group block -->
<div class="dhx_form-group ">
	<!-- Label block -->
	<label for="input" class="dhx_label ">I am label</label>
	<!-- 'wrapper' element in the 'input' block-->
	<div class="dhx_input__wrapper">
		<!-- 'container' element in the 'input' block-->
		<div class="dhx_input__container">
			<!-- Style the input-->
			<input id="input" 
					placeholder="I am input" 
					class="dhx_input" 
					autocomplete="off"
			>
		</div>
	</div>
</div>
~~~

## Button

### Block

- <b>dhx_button</b> - Add this class to a &lt;button&gt; element to reset/normalize default browser styles.

### Elements

- <b>dhx_button__icon</b> - Container for an icon

- <b>dhx_button__text</b> - Container for button text/value

- <b>dhx_button__loading</b> - Use this class to create a container for the loading mode

- <b>dhx_button__loading-icon</b> - Use this class together with the "dhx_button__loading" <br/> class to create an icon container for the loading mode 

### Modifiers

- <b>dhx_button--circle</b> - Use this class either to add rounded corners to a button with value <br/> or to create a circular button that contains only an icon

- <b>dhx_button--width_full</b> - Add this class to adjust the width of a button to the width <br/> of its container

- <b>dhx_button--disabled</b> - Use this class to change the button view to disabled. <br/> Instead of this class you can add the *disabled* attribute.

- <b>dhx_button--loading</b> - Apply the *loading* modifier to switch the button to the loading state. <br/> Both the "dhx_button__loading" and "dhx_button__loading-icon" <br/> elements must be applied.

- <b>dhx_button--size_small</b> - Use this class to add a small button

- <b>dhx_button--size_medium</b> - Use this class to add a medium button

- <b>dhx_button--view_flat</b> - Use this class to create a flat button 

- <b>dhx_button--view_link</b> - Use this class to create a link button 

- <b>dhx_button--color_primary</b> - Blue button (#0288d1). <br/> Use this modifier together with the 'view' modifier

- <b>dhx_button--color_secondary</b> - Gray button (#4d4d4d). <br/> Use this modifier together with the 'view' modifier 

- <b>dhx_button--color_danger</b> - Red button (#ff5252). <br/> Use this modifier together with the 'view' modifier 

- <b>dhx_button--color_success</b> - Green button (#0ab169). <br/> Use this class together with the 'view' modifier 

Here is an example how you can specify a markup for a button:

~~~html
<!-- Create a link button with red color-->
<button type="button" 
		class="dhx_button dhx_button--color_danger dhx_button--view_link">
	<!-- The button has the "plus" icon-->	
	<span class="dhx_button__icon dxi dxi-plus"></span>
	<!-- The "Send text" button-->
	<span class="dhx_button__text">Send</span>
</button>
~~~

## Label

### Block

- <b>dhx_label</b> - Add this class to a &lt;label&gt; element inside a form group to style it

You can style a &lt;label&gt; element, as in:

~~~html
<label for="element-id" class="dhx_label">Email</label>
~~~

## Checkbox

### Block

- <b>dhx_checkbox</b> - Add this class to the "dhx_form-group" class inside a &lt;label&gt; element to create a label for a checkbox.

### Elements

- <b>dhx_checkbox__input</b> - Add this class to the &lt;input type='checkbox'&gt; element <br/> to hide a native browser checkbox but save its behavior

- <b>dhx_checkbox__visual-input</b> - Add this class to a &lt;span&gt; element to display <br/> a checkbox with its native browser behavior visually

You can change the appearance of a native browser checkbox by using a markup given below:

~~~html
<!-- Create a label for a checkbox 
	 	and put it and an input in one line inside the form-group-->
<label class="dhx_form-group dhx_checkbox dhx_form-group--inline" 
		style="margin-left: calc(116px);">
	<!-- Hide a native browser checkbox but save its behavior-->	
	<input type="checkbox" class="dhx_checkbox__input">
	<!-- Display the checkbox with its native browser behavior visually-->
	<span class="dhx_checkbox__visual-input"></span>
	<!-- Style the checkbox label-->
	<span class="dhx_label ">I am checkbox</span>
</label>
~~~

## Radiobutton

### Block

- <b>dhx_radiobutton</b> - Add this class to the "dhx_form-group" class inside a &lt;label&gt; element to create a label for a radiobutton.

### Elements

- <b>dhx_radiobutton__input</b> - Add this class to the &lt;input type='radiobutton'&gt; <br/> element to hide a native browser radiobutton but save its behavior

- <b>dhx_radiobutton__visual-input</b> - Add this class to a &lt;span&gt; element  to display <br/> a radiobutton with its native browser behavior visually

You can apply a markup to style a radiobutton, like this:

~~~html
<!-- Create a label for a radiobutton 
		and put it and an input in one line inside the form-group-->
<label class="dhx_form-group dhx_radiobutton dhx_form-group--inline" 
		style="margin-left: calc(116px);">
	<!-- Hide a native browser radiobutton but save its behavior-->	
	<input type="radiobutton" class="dhx_radiobutton__input">
	<!-- Display the radiobutton with its native browser behavior visually-->
	<span class="dhx_radiobutton__visual-input"></span>
	<!-- Style the radiobutton label-->
	<span class="dhx_label ">I am radiobutton</span>
</label>
~~~

## Input

### Block

- <b>dhx_input</b> - Add this class to an &lt;input type='text'&gt; element to style it

### Elements

- <b>dhx_input__wrapper</b> - Wrapper for an input container and caption

- <b>dhx_input__container</b> - Container for an input with icon

- <b>dhx_input__icon</b> - Container for an input icon

- <b>dhx_input__caption</b> - Container for an input caption

### Modifiers

- <b>dhx_input--icon-padding</b> - Apply this class to create a special padding inside <br/> an input where an icon will be placed

- <b>dhx_input--textarea</b> - Apply this class to style a &lt;textarea&gt; element

- <b>dhx_input--textinput</b> - Removes all borders from an &lt;input&gt; element

An example of the input markup is given below:

~~~html
<!-- Create a form-group and put an input and its label in one line-->
<div class="dhx_form-group dhx_form-group--inline">
	<!-- Create the label for the input and style it-->
	<label for="input" class="dhx_label" 
			style="min-width: 100px; max-width: 100px;">I am label</label>
	<!-- Create a wrapper for the input container inside form-group -->		
	<div class="dhx_input__wrapper">
		<!-- Create the container for the input with icon-->
		<div class="dhx_input__container">
			<!-- Put the "dxi-magnify" icon into the container-->
			<div class="dhx_input__icon dxi dxi-magnify"></div>
			<!-- Create the input with the padding for the icon-->
			<input id="input" placeholder="I am input" name="" 
					class="dhx_input dhx_input--icon-padding" autocomplete="off">
		</div>
		<!--Create "Message text" caption -->
		<span class="dhx_input__caption">Message text</span>
	</div>
</div>
~~~

## Select

### Block

- <b>dhx_select</b> - Add this class to a &lt;select&gt; tag to style it

The markup of select looks like this:

~~~html
<!-- Create a form-group and put an input and its label in one line-->
<div class="dhx_form-group dhx_form-group--inline">
	<!-- Create the label for the select and style it-->
	<label for="select_id" class="dhx_label" 
			style="min-width: 100px; max-width: 100px;">select</label>
	<!-- Create the wrapper for the input container inside form-group -->			
	<div class="dhx_input__wrapper">
		<!-- Create the container for the input with icon-->
		<div class="dhx_input__container">
			<!-- Put the "dxi-menu-down" icon into the container-->
			<span class="dhx_input__icon dxi dxi-menu-down"></span>
			<select id="select_id" >
				<option></option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		</div>
		<!--Create "Choose the number 5" caption -->
		<span class="dhx_input__caption">Choose the number 5</span>
	</div>
</div>
~~~

## Extra classes

The DHTMLX library also provides you with a set of CSS classes that you can apply to change look and feel of DHTMLX widgets. 

### List of CSS classes for styling a widget:

- <b>dhx_widget--bg_white</b> - Sets white background to a widget

- <b>dhx_widget--bg_gray</b> - Sets gray background to a widget

- <b>dhx_widget--bordered</b> - Sets borders on all sides of a widget

- <b>dhx_widget--border_top</b> - Sets a border on the top side of a widget

- <b>dhx_widget--border_bottom</b> - Sets a border on the bottom side of a widget

- <b>dhx_widget--border_left</b> - Sets a border on the left side of a widget

- <b>dhx_widget--border_right</b> - Sets a border on the right side of a widget

- <b>dhx_widget--border-shadow</b> - Adds a shadow border to a widget

- <b>dhx_widget--no-border_top</b> - Removes the top border of a  widget

- <b>dhx_widget--no-border_bottom</b> - Removes the bottom border of a widget

- <b>dhx_widget--no-border_right</b> - Removes the right border of a widget

- <b>dhx_widget--no-border_left</b> - Removes the left border of a widget


Here is an example of Ribbon customization:

~~~js
var ribbon = new dhx.Ribbon({
    css:"dhx_widget--bg_white"
});
~~~

### List of CSS classes for styling a Layout cell:

- <b>dhx_layout-cell--bg_white</b> - Sets white background to a layout-cell

- <b>dhx_layout-cell--bg_gray</b> - Sets gray background to a layout-cell

- <b>dhx_layout-cell--bordered</b> - Sets borders on all sides of a layout-cell

- <b>dhx_layout-cell--border_top</b> - Sets a border on the top side of a layout-cell

- <b>dhx_layout-cell--border_bottom</b> - Sets a border on the bottom side of a layout-cell

- <b>dhx_layout-cell--border_left</b> - Sets a border on the left side of a layout-cell

- <b>dhx_layout-cell--border_right</b> - Sets a border on the right side of a layout-cell

- <b>dhx_layout-cell--border-shadow</b> - Adds a shadow border to a layout-cell

- <b>dhx_layout-cell--no-border_top</b> - Removes the top border of a  layout-cell

- <b>dhx_layout-cell--no-border_bottom</b> - Removes the bottom border of a layout-cell

- <b>dhx_layout-cell--no-border_right</b> - Removes the right border of a layout-cell

- <b>dhx_layout-cell--no-border_left</b> - Removes the left border of a layout-cell


An example of customization of a Layout cell is given below:

~~~js
var layout = new dhx.Layout("layout", {
    css: "dhx_layout-cell--bordered",
        rows: [{
                id: "toolbar",
                html: "Header",
                css: "dhx_layout-cell--border_bottom layout-header",
                gravity: false,
                height: "60px"
        }]
});
~~~

