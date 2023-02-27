---
sidebar_label: updateUrl()
title: DataProxy - updateUrl Method 
description: You can explore the updateUrl method of DataProxy in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# updateUrl()

@short: updates the initial URL and parameters that were specified when initializing proxy

@signature: {'updateUrl?: (url?: string, params?: any) => void;'}

@params:
- `url: string` - optional, a new URL. If not specified, the currently existing URL will be used.
- `params: object` - optional, a configuration object with new parameters. If not specified, clears parameters set earlier.

@example:
proxy.updateUrl("https://newCustomUrl.com", { a: "customParam", b: 2 });
// url: https://newCustomUrl.com?a=customParam&b=2
