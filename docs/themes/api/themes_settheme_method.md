---
sidebar_label: setTheme()
title: Themes - setTheme Method 
description: You can explore the setTheme method in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setTheme()

@short: sets the theme by its name

@signature: {'setTheme(theme: string, container?: string | HTMLElement): void;'}

@params:
- `theme: string` - required, the name of the theme. It can be:
    - the name of the Suite theme: *"light" | "contrast-light" | "dark" | "contrast-dark"*
    - the name of a [custom theme](themes/custom_theme.md)
    - *"light"* - by default
- `container: string | HTMLElement` - optional, the container to which the theme must be applied. It can be:
    - an HTMLElement
    - a string value with ID of the container or ID of a Layout cell
    - *document.documentElement* - by default

@descr:

#### Examples

~~~js {15,18} title="Example 1"
const layout = new dhx.Layout("layout", {
    type: "space",
    cols: [
        { id: "cell-1" },
        { id: "cell-2" },
    ]
});

const form_1 = new dhx.Form(null, config);
layout.getCell("cell-1").attach(form_1);

const form_2 = new dhx.Form(null, config);
layout.getCell("cell-2").attach(form_2);

dhx.setTheme("dark", "cell-2"); // apply the "dark" theme to the Layout cell with the "cell-2" ID

//or
dhx.setTheme("dark"); // apply the "dark" theme to the body
~~~

~~~html {8} title="Example 2"
<div id="container-1"></div>
<div id="container-2"></div>

<script>
    const form_1 = new dhx.Form("container-1", config);
    const form_2 = new dhx.Form("container-2", config);

    dhx.setTheme("dark", "container-2");//apply the "dark" theme to the container with the "container-2" ID
</script>
~~~

~~~html {9} title="Example 3"
<div id="container-1"></div>
<div id="container-2"></div>

<script>
    const form_1 = new dhx.Form("container-1", config);
    const form_2 = new dhx.Form("container-2", config);
    
    const container = document.getElementById("container-2");
    dhx.setTheme("dark", container); //apply the "dark" theme to the container specified via an HTMLElement
</script>
~~~

@descr:

**Related article:** [Themes overview](themes.md)

**Related samples:**

- [Suite. Light, Dark, Light High Contrast, and Dark High Contrast themes (skins)](https://snippet.dhtmlx.com/85fbitnu)
- [Suite. Custom themes (skins)](https://snippet.dhtmlx.com/1eh4ks4f)
- [Suite. Set themes for the container](https://snippet.dhtmlx.com/d2she1z9)
- [Suite. Themes configurator](https://snippet.dhtmlx.com/kw89q481)
- [Suite. Dynamic color change in themes](https://snippet.dhtmlx.com/14vfe69t)