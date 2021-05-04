---
sidebar_label: template
title: template
---          

@short:  

@signature: 



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

**Related sample**: [Tree. Editable](https://snippet.dhtmlx.com/f70t1c9y)

@changelog: added in v7.2
