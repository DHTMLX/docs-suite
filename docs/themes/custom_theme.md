---
sidebar_label: Custom theme
title: JavaScript Helpers - Custom theme
description: You can explore the custom theme of DHTMLX Suite in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Custom theme

You can easily configure your own theme via overriding values of the internal CSS variables:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* font */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* end font */
        /* border */
        --dhx-border-color: #007a99;
        /* end border */
        /* color scheme */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;
        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;
        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;
        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;
        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* end color scheme */

        /* theme colors */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* end theme colors */

        /* DHTMLX Grid service variables*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* end DHTMLX Grid service variables*/

        /* DHTMLX Toolbar service variables*/
        --dhx-s-toolbar-background: #002229;
        /* end DHTMLX Toolbar service variables */
    }
</style>
~~~

**Related sample:** [Custom themes](https://snippet.dhtmlx.com/1eh4ks4f?mode=wide)