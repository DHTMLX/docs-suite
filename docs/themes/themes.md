---
sidebar_label: Themes
title: JavaScript Helpers - Themes
description: You can explore themes of DHTMLX Suite in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Themes overview

## Suite themes

The DHTMLX Suite library includes four predefined themes:

- [Default theme](themes/default_theme.md) (`"light"`)
- [Dark theme](themes/dark_theme.md) (`"dark"`)
- [Light high contrast theme](themes/contrast_light_theme.md) (`"contrast-light"`)
- [Dark high contrast theme](themes/contrast_dark_theme.md) (`"contrast-dark"`)

The Suite themes follow international accessibility standards. The high contrast themes help users with vision impairments. For more detail, read the [Accessibility support](common_features/accessibility_support.md) article.

You can try all themes in the example below:

<iframe src="https://snippet.dhtmlx.com/85fbitnu?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Custom themes

If the base Suite themes don't fit your project, you can configure your own color theme. For more information, read the [Custom theme](themes/custom_theme.md) article.

## Set a theme {#setting-themes}

You can apply a Suite theme or a custom theme in one of the following ways:

- Change the `data-dhx-theme` attribute of the component container:

~~~html title="index.html"
<!-- component container -->
<div data-dhx-theme="dark" style="height: 100%" id="chart"></div>
~~~

- Change the `data-dhx-theme` attribute of the root element:

~~~js title="index.js"
// your code here

document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

- Call the [`dhx.setTheme()`](themes/api/themes_settheme_method.md) method:

<iframe src="https://snippet.dhtmlx.com/d2she1z9?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="800"></iframe>



