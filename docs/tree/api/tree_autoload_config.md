---
sidebar_label: autoload
title: JavaScript Tree - autoload Config 
description: You can explore the autoload config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# autoload

@short: defines that the structure of a tree is being built while opening items

@signature: {'autoload?: string;'}

@example:
const tree = new dhx.Tree("tree_container", {autoload: "/backend/autoload"});
tree.data.load("/backend/autoload?id=tree");

@descr:

**Related sample**: [Tree. Autoload](https://snippet.dhtmlx.com/ahrblf1m)

:::info
To control the process of auto-load, use the related [beforeAutoLoad](tree/api/tree_beforeautoload_event.md) and [afterAutoLoad](tree/api/tree_afterautoload_event.md) events
:::

<br>

Here is an example of sending an HTTP GET request to the server using the Express library:

~~~js
app.get("/backend/autoload", (req, res) => {
    const currentData = treeData.filter(i => i.parent === req.query.id);
    return res.send(currentData);
})
~~~

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree)
