---
sidebar_label: Tree Collection API
title: Tree Collection API
---          

A set of API methods that allow you to work with data of a component with tree-line structure.

Methods
-------------

#### add()

adds an item to a component

parameters:

- **config** - (*object*)    the configuration of the added item
- **index** - (*number*)    defines the position of the item in the component
- **parent** -  (*string*)    the ID of the future parent item

~~~js
myToolbar.data.add({
    type:"button",
    icon:"dxi-plus",
    value:"New"
},1);
~~~

#### update()

changes an item

parameters:

- **id**  -  (*string*)    the ID of an item
- **item** - (*object*)    new properties for an item

~~~js
toolbar.data.update("add_btn",{ value:"Add new" });
~~~

#### parse()

loads a collection of items from a local source

parameter:

- **data** -  (*array*) the items of the component

~~~js
toolbar.data.parse([
    {
        type: "button",
        icon: "dxi-plus",
        value: "Tania",
        count: 11
    },
    {
        type: "separator"
    },			
    {
        type: "navItem",
        icon: "",
        value: "Language",
        items: [
            {
                icon: "dxi-printer",
                value: "English"
            },
            {
                icon: "dxi-printer",
                value: "日本語"
            }
        ]
    }
]);
~~~

#### serialize()

returns a collection of all items

~~~js
toolbar.data.serialize();
/*
[
    {
        "type":"iconButton",
        "icon":"dxi-menu",
        "id":"u1531484947674","parent":"_ROOT_u1531484947673"
    },
    {
        "type":"button",
        "icon":"dxi-plus",
        "value":"Tania",
        "count":11,
        "id":"u1531484947675","parent":"_ROOT_u1531484947673"
    }
]
*/
~~~

#### load()

loads items from a file

parameter:

- **path** - (*string*)    the path to the file

~~~js
myToolbar.data.load("[path to this file]/file.json");
~~~

#### loadItems()

loads child items of a control from a file

parameter:

- **id**  -  (*string*)    the ID of a control

~~~js
myToolbar.data.loadItems("menu_id");
~~~

#### refreshItems()

refreshes child items of a control

parameter:

- **id**  -  (*string*)    the ID of a control

~~~js
myToolbar.data.refreshItems("menu_id");
~~~

#### getItem()

gets an item by its ID

parameter:

- **id**  -  (*string*)  the ID of an item

~~~js
var add_btn = toolbar.data.getItem("add_btn");
~~~

#### getParent()

gets the ID of the parent of the control

parameter:

- **id**  -  (*string*)  the ID of a control

~~~js
var parentId = toolbar.data.getParent("add_btn");
~~~

#### getItems()

gets the child items of a control

parameter:

- **id**  -  (*string*)  the ID of a control

~~~js
var items = toolbar.data.getItems("menu1");
~~~

#### getLength()

counts child items of a control

parameter:

- **id**  -  (*string*)  the ID of a control

~~~js
toolbar.data.getLength("menu1");
~~~

#### map()

iterates through items

parameters:

- **cb** -   (*function*)    the function that will be applied to every item
- **id**  -  (*string*)  the ID of a control the child items of which will be included
- **direct** - (*boolean*) defines whether only direct children of the control will be included in the iteration

~~~js
toolbar.data.map((item)=>{
    //remove all icons
    item.icon = "";
});
toolbar.paint();
~~~

To work with all childs of a particular control, pass one more parameter to **map()** - the ID of the control:

~~~js
toolbar.data.map((item)=>{
    // disable items
    item.$disabled = true;
},"menu_1");
toolbar.paint();
~~~

If you want to iterate only through immediate children, set the third parameter to _false_:

~~~js
toolbar.data.map((item)=>{
    // add a css class to each item
    item.css = "highlight";
},"menu_1",false);
toolbar.paint();
~~~

#### eachChild()

iterates through child items of a control

parameters:

- **id**  -   (*string*)  the ID of the control
- **direct**  - (*boolean*) defines whether only direct child items will be included in the iteration

~~~js
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();
~~~

To access only the immediate children, add the **direct** parameter and set it to _false_:

~~~js
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
},false);
toolbar.paint();
~~~

#### haveItems()

checks whether an item has children

parameter:

- **id** -   (*string*)    the ID of a control

returns boolean

~~~js
if (toolbar.data.haveChilds("menu1"))
    //do something;
~~~

#### eachParent()

iterates through all the parent items (the immediate parent and its parent, etc until the parent is the component itself)

parameters:

- **id**  -   (*string*)  the ID of the item
- **cb** -   (*function*)  the function that will be applied to every parent of the item

~~~js
toolbar.data.eachParent("new_btn", item => console.log(item));
~~~

#### move()

moves items to different positions

parameters:

- **id** -   (*string*)  the ID of the item
- **index** - (*number*)  the new position 

~~~js
toolbar.data.move("profile_btn",-1);
~~~

{{note
The ID should always be a string, even if in the control configuration you've set it as a number.
}}

#### getId()

gets the ID of an item

parameter:

- **index** - (*number*) the position of an item on the toolbar (from 0)

~~~js
const id = toolbar.data.getId(2);
~~~

#### getIndex()

gets the current position of an item 

parameter:

- **id**  -  (*string*) the ID of an item

~~~js
toolbar.data.getIndex("add_btn");
~~~

#### copy()

adds a copy of an item and places it in the specified position

parameters:

- **id** -   (*string*)  the ID of the item
- **index** - (*number*)  the position of a copy
- **target**  - (*TreeCollection*)   a data collection where the copy will be stored
- **target_id** - (*string*)  (for menu options) the ID of a menuItem to which a copy of the menu option will be placed

~~~js
toolbar.data.copy("print_btn",2)
// another toolbar
toolbar2.data.copy("save_btn",1,toolbar1.data);
~~~

#### canCopy()

checks if it is possible to copy a control into some other control

parameters:

- **id**  -   (*string*)    the ID of the source control
- **targetId** -  (*string*)    the ID of the target control

#### remove()

removes an item

parameter:

- **id**    *string*  the ID of an item

~~~js
toolbar.data.remove("id");
~~~

#### removeAll()

clears the component of all controls

~~~js
toolbar.data.removeAll();
~~~

#### getRoot()

returns the ID of the master component

returns string

~~~js
toolbar.data.getRoot();
~~~

#### sort()

sorts controls according to some criteria

parameter:

- **by**   -  (*object*)    the parameters for sorting:
    - **by**  -  ( *string*)    the field of the item object
    - **dir**  - (*string*)    the direction of sorting ('asc' or 'desc')
- **rule** - (*function*)  a sorting rule; the function must have two parameters and return a number (-1,0,1)

~~~js
toolbar.data.sort({by:"type", dir:"desc"});
~~~

For more complex sorting, set these parameters:

~~~js
toolbar.data.sort({
    rule: (a,b) => (a.type < b.type) ? -1 : ( (a.type > b.type) ? 1 : 0 )
});
~~~

#### filter()

filters controls by some criteria

parameters:

- **conf** -  (*object*) optional, the criteria for filtering:
    - **by** - parameter
    - **as** - value

~~~js
toolbar.data.filter({ by:"type", match:"button" });
~~~

Without parameters cancels filtering:

~~~js
toolbar.data.filter();    // show all
~~~

#### restoreOrder()

restores the component to the state previous to sorting / filtering

~~~js
toolbar.restoreOrder();
~~~

#### exists()

checks if the control exists

parameter:

- **id**  -  (*string*)    the ID of the control

returns boolean

~~~js
if (toolbar.data.exists("item_id"))
    // do something
~~~



@todo: check and improve the list, make structure like in data collection, add events