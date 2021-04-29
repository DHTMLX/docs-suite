---
sidebar_label: attachHTML
title: attachHTML
---

@short: attaches an HTML content into a Container control

@signature:

@example: const form = new dhx.Form("form", {
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
