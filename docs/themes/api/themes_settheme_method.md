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

~~~js {22,25} title="Example 1"
const layout = new dhx.Layout("layout", {
    type: "space",
    cols: [
        {
            id: "cell-1",
        },
        {
            id: "cell-2",
        },
    ]
});

const form_1 = new dhx.Form(null, config);
layout.getCell("cell-1").attach(form_1);

const form_2 = new dhx.Form(null, config);
layout.getCell("cell-2").attach(form_2);

form_1.validate();
form_2.validate();

dhx.setTheme("dark"); // apply "dark" theme to the default container

// or
dhx.setTheme("dark", "cell-2"); // apply "dark" theme to Layout cell with "cell-2" ID
~~~

~~~html {13} title="Example 2"
<section class="dhx_sample-container">
    <div id="container-1" style="height: 100%; width: 45%; padding: 10px;"></div>
    <div id="container-2" style="height: 100%; width: 45%; padding: 10px;"></div>
</section>

<script>
const form_1 = new dhx.Form("container-1", config);
const form_2 = new dhx.Form("container-2", config);

form_1.validate();
form_2.validate();

dhx.setTheme("dark", "container-2"); // apply "dark" theme to container with "container-2" ID
</script>
~~~

~~~html {14} title="Example 3"
<section class="dhx_sample-container">
    <div id="container-1" style="height: 100%; width: 45%; padding: 10px;"></div>
    <div id="container-2" style="height: 100%; width: 45%; padding: 10px;"></div>
</section>

<script>
    const form_1 = new dhx.Form("container-1", config);
    const form_2 = new dhx.Form("container-2", config);
    
    form_1.validate();
    form_2.validate();
    
    const container = document.getElementById("container-2");
    dhx.setTheme("dark", container); // apply "dark" theme to container specified via HTMLElement
</script>
~~~

@descr:

**Related article:** [Themes overview](themes.md)

**Related samples:**

```todo
add links to samples
```