---
sidebar_label: eachChild
title: eachChild
---          

@short: iterates through child items of a control

@signature: {'eachChild(id: Id, callback: DataCallback<T>, direct?: boolean, checkItem?: (item: IDataItem) => boolean): void;'}

@params:
- id 		string		 the ID of a control
- callback        function     the function that will be applied to every child of the item  

@example:
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();

@template: api_method
