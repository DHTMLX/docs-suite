---
sidebar_label: template
title: JavaScript Tree - template Config 
description: You can explore the template config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# template

@short: specifies a template for Tree items

@signature: template?: (item: ITreeItem, isFolder: boolean) => string | null;

@example:
const tree = new dhx.Tree("tree", {
    template: ({ value }, isFolder) => {
        const template = `
            <div class="dhx_tree_template">
                <span class="dhx_tree_template__value">${value}</span>
                <div class="dhx_tree_template__rows">
                    <button class="dhx_tree_template__button remove">
                        <i class="far fa-trash-alt dhx_tree_template__icon dhx_tree_template__icon--danger"></i>
                    </button>
                </div>
            </div>
        `
        return isFolder ? null : template;
    }
});
@examplestop:

**Related sample**: [Tree. Template](https://snippet.dhtmlx.com/f70t1c9y)

The template function takes two parameters and returns a string or null.

- `item` - *object*, an object of a Tree item
- `isFolder` - *boolean*, defines whether an item is a folder

You can specify a template for child items only with a help of the callback function and parameter isFolder.

@changelog: added in v7.2
