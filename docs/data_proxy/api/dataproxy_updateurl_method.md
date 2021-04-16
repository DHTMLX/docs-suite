---
sidebar_label: updateUrl
title: updateUrl
---    

@short: updates the initial URL and parameters that were specified when initializing proxy

@params:
- url       string      optional, a new URL. If not specified, the currently existing URL will be used.
- params    object      optional, a configuration object with new parameters. If not specified, clears parameters set earlier.

@example:
~~~js
proxy.updateUrl("https://newCustomUrl.com", { a: "customParam", b: 2 });
// url: https://newCustomUrl.com?a=customParam&b=2
~~~

@template:	api_method