---
sidebar_label: Changing Suite themes
title: JavaScript Helpers - Changing Suite themes
description: You can explore how to change DHTMLX Suite themes in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Changing Suite themes

## Changing all themes

You may notice that CSS variables of the [default](themes/default_theme.md) theme include variables of the color scheme:

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

## Changing a separate theme

If you want to override some color values for a separate [Suite theme](themes.md#suite-themes), you need to do this in the 'data-dhx-theme' attribute:

~~~html {1-27,39}
<style>
    [data-dhx-theme='light'] {
        /* border */
        --dhx-border-color: #ced4da;
        /* end border */

        /* color scheme */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* end color scheme */
    }
</style>

<script>
    const firstDate = new Date();
    const secondDate = new Date(Date.now() + 1000000000);
    
    const calendar = new dhx.Calendar("calendar", {
        range: true,
        value: [firstDate, secondDate],
        css: "custom dhx_widget--bordered"
    });
    
    dhx.setTheme("light");
</script>
~~~
