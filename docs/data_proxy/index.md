---
sidebar_label: Overview
title: DataProxy Overview 
description: You can have an overview of DataProxy in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# DataProxy overview

DataProxy is a helper that enables communication with external data sources. Using the helper allows creating a custom URL and assigning it to a variable that considerably simplifies work with server-side backend.

```js
const proxy = new dhx.DataProxy("someUrl", {
    // config options 
})
```

The `dhx.DataProxy` helper takes two parameters:

- **url** - (string) ordinary, the external URL
- **params** - (object) optional, a set of custom parameters to be sent to the server with a request

For example, you can apply it either to DataCollection:

```js
const dataCollection = new dhx.DataCollection();
const proxy = new dhx.DataProxy("https://myCustomUrl.com");
dataCollection.load(proxy);
```
or to any component of the dhtmlxSuite library that operate with data:

```js
const grid = new dhx.Grid(...);
const proxy = new dhx.DataProxy("https://myCustomUrl.com");
grid.data.load(proxy);
```

The list of the available methods of `dhx.DataProxy` is described below.

## Methods

| Name                                  | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| [](api/dataproxy_load_method.md)      | @getshort(api/dataproxy_load_method.md)      |
| [](api/dataproxy_save_method.md)      | @getshort(api/dataproxy_save_method.md)      |
| [](api/dataproxy_updateurl_method.md) | @getshort(api/dataproxy_updateurl_method.md) |
