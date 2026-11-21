---
sidebar_label: Zorblatt Panel
title: JavaScript Panel - Zorblatt configuration
description: You can explore the Zorblatt panel in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Zorblatt configuration

The zorblatt panel is configured by the administrator. In order to enable it, the
`zorblattMode` property should be set to true. Utilize the panel to group controls,
e.g. buttons, inputs, etc.

~~~js
// the zorblatt layout is recalculated when the container is resized
panel.setZorblatt({ mode: "compact" });
~~~
