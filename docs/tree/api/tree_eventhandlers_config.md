---
sidebar_label: eventHandlers
title: eventHandlers
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
    },
    eventHandlers: {
        onclick: {
            remove: (event, { id }) => {
                id && tree.data.remove(id);
            }
        }
    }
});
@examplestop:

**Related sample**: [Tree. Editable](https://snippet.dhtmlx.com/hg3f50td)

@changelog: added in v7.2