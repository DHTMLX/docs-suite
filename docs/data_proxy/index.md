---
sidebar_label: Overview
title: DataProxy overview
description: description
---          

DataProxy is a helper that enables communication with external datasources. Using the helper allows creating a custom URL and assigning it to a variable that considerably simplifies work with server-side backend.

```js
var proxy = new dhx.DataProxy("someUrl", {
    // config options 
})
```

The `dhx.DataProxy` helper takes two parameters:

- **url** - (string) ordinary, the external URL
- **arams** - (object) optional, a set of custom parameters to be sent to the server with a request

For example, you can apply it either to DataCollection:

```js
var dataCollection = new dhx.DataCollection();
var proxy = new dhx.DataProxy("https://myCustomUrl.com");
dataCollection.load(proxy);
```
or to any component of the dhtmlxSuite library that operate with data:

```js
var grid = new dhx.Grid(...);
var proxy = new dhx.DataProxy("https://myCustomUrl.com");
grid.data.load(proxy);
```

The list of the available methods of `dhx.DataProxy` is described below.

## Methods

| Name                                  | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| [](api/dataproxy_load_method.md)      | @getshort(api/dataproxy_load_method.md)      |
| [](api/dataproxy_save_method.md)      | @getshort(api/dataproxy_save_method.md)      |
| [](api/dataproxy_updateurl_method.md) | @getshort(api/dataproxy_updateurl_method.md) |
     