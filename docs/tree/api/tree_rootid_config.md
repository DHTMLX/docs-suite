---
sidebar_label: rootId
title: JavaScript Tree - rootId Config 
description: You can explore the rootId config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rootId

@short: Optional. Sets the id for the root element

@signature: {'rootId?: string | number;'}

@example:
const tree = new dhx.Tree("tree_container", {
    rootId: "root"
});

@descr:

By default, the root element takes the id of a Tree container.

~~~js
const tree = new dhx.Tree("tree_container");
tree.data.getRoot() -> "tree_container"
~~~

@changelog: added in v7.0
