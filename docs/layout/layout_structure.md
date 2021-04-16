---
sidebar_label: Layout Structure
title: Layout Structure
---          

You can use dhtmlxLayout to build the necessary composition of blocks to arrange parts of your application. There are three common types of layout:

- horizontal layout

This type of layout contains several [](layout/api/layout_rows_config.md) of cells which are placed horizontally.

~~~js
var layout = new dhx.Layout("layout_container", {                                  
	rows: [
       { header: "The header of the row 1" },
       { header: "The header of the row 2" },
       { header: "The header of the row 3" },
       { header: "The header of the row 4" }
    ]                                        
});
~~~


- vertical layout

This type of layout includes a set of [columns](layout/api/layout_cols_config.md) of cells that are located vertically. 

~~~js
var layout = new dhx.Layout("layout_container", {   
	cols: [
		{ header: "The header of the column 1" },
		{ header: "The header of the column 2" },
		{ header: "The header of the column 3" },
        { header: "The header of the column 4" }
	]
});
~~~

- mixed layout

In this layout type **both rows and columns** are used, i.e. a row may include several columns and a column may have rows inside.

~~~js
var layout = new dhx.Layout("layout_container", {   
	rows: [
        {
            cols: [
                {
                    header: "Block 1"                        
                },
                {
                    header: "Block 2"               
                }
            ]
        },
        {
            rows: [
                {
                    header: "Block 3"                                       
                },
                {
                    header: "Block 4"                                                
                }
            ]
        }
    ]
});
~~~



