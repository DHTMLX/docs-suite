---
sidebar_label: attachHTML()
title: JavaScript Form - attachHTML Container Method 
description: You can explore the attachHTML method of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attachHTML()

@short: attaches an HTML content into a Container control

@signature: attachHTML(html: string): void;

@params:
- `html: string` - the HTML code

@example: const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "container",
            name: "container",
        },
    ]
});

const html = "<p>Hello world</p>";
form.getItem("container").attachHTML(html);

@changelog: added in v7.2
