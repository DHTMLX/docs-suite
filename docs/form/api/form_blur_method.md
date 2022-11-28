---
sidebar_label: blur()
title: JavaScript Form - blur Method 
description: You can explore the blur method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur()

@short: removes focus from a control of Form

@signature: blur(name: string): void;

@params:
- `name: string` -  optional, the name of a control. If the name is not specified, removes focus from the control that is currently in focus.

@example:
form.blur(); // removes focus from the control that is currently in focus

form.blur("checkbox"); // removes focus from the Checkbox control

@changelog: added in v.7.2
