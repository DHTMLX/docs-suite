---
sidebar_label: beforeAutoLoad
title: JavaScript Tree - beforeAutoLoad Event 
description: You can explore the beforeAutoLoad event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeAutoLoad

@short: fires before auto-load of Tree data

@signature: {'beforeAutoLoad:({ id?: string | number }) => void | boolean;'}

@params:
`id: string | number` - the ID of a parent item for which child items should be loaded

@returns:
Return `false` to block the auto-load (for an item); otherwise, `true`.

@example:
tree.data.events.on("beforeAutoLoad", (id) => {
	console.log("beforeAutoLoad");
	console.log(id);
	// if (id === "Books") return false;
});

@descr:

:::note
If you block the auto-load for a folder, the folder will be defined as a file after you try to open it.

To prevent this behavior, change the logic of the folders' definition via the `isFolder` property:

~~~js {2}
const tree = new dhx.Tree("tree_container", {
    isFolder: obj => obj.items,
	autoload:"https://docs.dhtmlx.com/suite/backend/autoload"
});
~~~
:::

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v8.0
