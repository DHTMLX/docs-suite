---
sidebar_label: isFolder
title: JavaScript Tree - isFolder Config 
description: You can explore the isFolder config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isFolder

@short: Optional. Defines whether an item should be rendered as a folder

@signature: {'isFolder?: (obj: any) => boolean;'}

@example:
const tree = new dhx.Tree("tree_container", {
    isFolder: function() {
        return true;
    }
});


@descr:
**Related sample:** [Tree. Custom folders](https://snippet.dhtmlx.com/cp43eyra?tag=tree)

The config option can be used to create custom folders in a tree.

