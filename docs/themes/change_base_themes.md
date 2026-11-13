---
sidebar_label: Changing Suite themes
title: JavaScript Helpers - Changing Suite themes
description: You can explore how to change DHTMLX Suite themes in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Changing Suite themes

## Change all themes {#changing-all-themes}

The CSS variables of the [default](themes/default_theme.md) theme include the color scheme variables:

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
The color values use the [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) format, which has three components:

- *Hue* is a degree on the color wheel from 0 to 360: 0 is red, 120 is green, and 240 is blue.
- *Saturation* is a percentage value: 0% means completely unsaturated (gray), and 100% means completely saturated.
- *Lightness* is a percentage value: 100% is white, 0% is black, and 50% is "normal".
:::

Suite calculates the color scheme from these CSS variables. If you change a color scheme variable in the `:root` selector, the `"contrast-light"`, `"dark"`, and `"contrast-dark"` themes recalculate their colors automatically.

The following example overrides the primary colors for all Suite themes at once:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

The values of variables that depend on the primary color change accordingly. For example, the `--dhx-color-focused` variable takes its value from the primary color variables:

~~~js
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Change a specific theme {#changing-a-separate-theme}

You can override color values for a specific [Suite theme](/themes/#suite-themes) in the `data-dhx-theme` attribute selector. The following example changes the colors of the `"light"` theme:

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
