---
sidebar_label: autoload
title: autoload
---          

@short: defines that the structure of a tree is being built while opening items

@signature: {'autoload?: string;'}

@example: 
var tree = new dhx.Tree("tree_container", {autoload: "/backend/autoload"});
tree.data.load("/backend/autoload?id=tree");



@descr: 
    
**Related sample**: [Tree. Autoload](https://snippet.dhtmlx.com/ahrblf1m)

Here is an example of sending an HTTP GET request to the server using the Express library:

~~~js
app.get("/backend/autoload", (req, res) => {
    const currentData = treeData.filter(i => i.parent === req.query.id);
    return res.send(currentData);
})
~~~

@related: tree/initialization_of_dhtmlxtree.md#initialize-tree