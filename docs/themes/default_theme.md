---
sidebar_label: Default theme
title: JavaScript Helpers - Default theme
description: You can explore the default theme of DHTMLX Suite in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Default theme

The [default ("light")](themes.md#suite-themes) theme is configured on the base of the CSS variables which are listed below:

~~~css
:root, [data-dhx-theme] {
	/* base colors */
	--dhx-color-white: #fff;
	--dhx-color-gray-100: #e6e6e6;
	--dhx-color-gray-200: #ccc;
	--dhx-color-gray-300: #b3b3b3;
	--dhx-color-gray-400: #999;
	--dhx-color-gray-500: #808080;
	--dhx-color-gray-600: #666;
	--dhx-color-gray-700: #4d4d4d;
	--dhx-color-gray-800: #333;
	--dhx-color-gray-900: #1a1a1a;
	--dhx-color-black: #000;
	/* end base colors */

	/* font */
	--dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

	--dhx-font-weight-regular: 400; 
	--dhx-font-weight-medium: 500; 
	--dhx-font-weight-bold: 700;

	--dhx-font-size-small: 12px;
	--dhx-font-size-normal: 14px;
	--dhx-font-size-large: 16px;

	--dhx-line-height-small: 16px;
	--dhx-line-height-normal: 20px;
	--dhx-line-height-large: 24px;

	--dhx-font-color-primary: rgba(0, 0, 0, .7);
	--dhx-font-color-secondary: rgba(0, 0, 0, .5);
	--dhx-font-color-additional: rgba(0, 0, 0, .3);
	--dhx-font-color-disabled: rgba(0, 0, 0, .3);

	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-color-white);
	/* end font */

	/* icon */
	--dhx-icon-size-small: 16px;
	--dhx-icon-size-normal: 20px;
	--dhx-icon-size-large: 24px;
	/* end icon */

	/* border */
	--dhx-border-width: 1px;
	--dhx-border-radius: 2px;
	--dhx-border-color: rgba(0, 0, 0, .1);
	--dhx-border-color-focused: rgba(0, 0, 0, .3);
	--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	/* end border */

	/* border shadow */
	--dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
	--dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
	--dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

	--dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
	/* end border shadow */

	/* transitions */
	--dhx-transition-time: 0.2s;
	--dhx-transition-in: ease-in;
	--dhx-transition-out: ease-out;
	/* end transitions */

	/* z-index */
	--dhx-z-index-up: 1;
	--dhx-z-index-force-up: 10;
	--dhx-z-index-overlay: 999;
	--dhx-z-index-overlay-total: 2147483647;
	/* end z-index */

	/* only service color schema */
	--dhx-l-contrast-offset: 0%; /* lightness contrast theme offset */
	--dhx-l-h-offset: 10%; /* lightness hover offset */
	--dhx-s-d-offset: 30%; /* saturation disable offset */
	--dhx-l-d: 70%; /* lightness disable value */
	--dhx-a-l-h: .15; /* alpha light hover value */
	--dhx-a-l-a: .3; /* alpha light active value */
	/* only service */

	/* color scheme */
	--dhx-h-primary: 200;
	--dhx-s-primary: 98%;
	--dhx-l-primary: 40%;

	--dhx-h-secondary: 0;
	--dhx-s-secondary: 0%;
	--dhx-l-secondary: 30%;

	--dhx-h-danger: 0;
	--dhx-s-danger: 100%;
	--dhx-l-danger: 60%;

	--dhx-h-success: 154;
	--dhx-s-success: 89%;
	--dhx-l-success: 37%;

	--dhx-h-background: 0;
	--dhx-s-background: 0%;
	--dhx-l-background: 100%;
	--dhx-a-background: 0.5;
	/* end color scheme */

	/* theme colors */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
	--dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
	--dhx-background-overlay-light: rgba(255, 255, 255, .5);

	--dhx-tooltip-background-dark: var(--dhx-color-gray-800);
	--dhx-tooltip-background-light: var(--dhx-color-white);

	--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

	--dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-active: var(--dhx-color-primary);
	--dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-active: var(--dhx-color-secondary);
	--dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-active: var(--dhx-color-danger);
	--dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-active: var(--dhx-color-success);
	--dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
	/* end theme colors */

	/* DHTMLX Toolbar service variables*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* end DHTMLX Toolbar service variables */

	/* DHTMLX Grid service variables*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* end DHTMLX Grid service variables*/

	/* DHTMLX Calendar service variables*/
	--dhx-s-calendar-muffled: .6;
	/* end DHTMLX Calendar service variables*/

	/* DHTMLX Slider service variables*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* end DHTMLX Slider service variables*/
}
~~~

## Changing Suite themes

You may notice that CSS variables of the default theme include variables of the color scheme:

~~~js
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
Color values are specified in the [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) format, where:

- *hue* is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue;
- *saturation* is a percentage value; 0% means completely unsaturated (gray) and 100% is completely saturated;
- *lightness* is a percentage value; 100% is white, 0% is black, and 50% is "normal".
:::

Due to the use of these CSS variables, color scheme is calculated automatically. It means, that if you change some value for the variable from the color scheme in the root, values for the *"contrast-light"*, *"dark"*, and *"contrast-dark"* themes will be recalculated automatically in real time. 

For instance, you can override the primary colors for all Suite themes at once in the following way:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

In addition, values of variables, which are calculated on the base of the primary color, will be recalculated accordingly. For example, the value of the focused color is calculated as follows:

~~~js
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~