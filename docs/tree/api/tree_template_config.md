---
sidebar_label: template
title: JavaScript Tree - template Config 
description: You can explore the template config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. Specifies a template for Tree items

@signature: template?: (item: object, isFolder: boolean) => string | null;

@params:
The template function takes two parameters:

- `item` - an object of a Tree item
- `isFolder` - defines whether an item is a folder

and returns either a string or null.

**Tip.** The callback function together with the isFolder parameter allows you to specify a template for child items only.

@example:
const tree = new dhx.Tree("tree_container", {
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

**Related sample**: [Tree. Handling events in template](https://snippet.dhtmlx.com/hg3f50td)

@changelog: added in v7.2
