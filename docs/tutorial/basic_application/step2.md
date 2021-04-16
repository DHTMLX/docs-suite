---
sidebar_label: Step 2. Specify the Layout
title: Step 2. Specify the Layout
---          

Our application will have the following structure:

- Toolbar
- Grid with a list of users
- Chart

<img style="margin: 19px;  display: block;" src="tutorial/basic_application/layout_002.png"/>

To set the main scheme of our app we should start by initializing the Layout. Later we will attach the rest of the components to it.

<div style="font-weight:bold; color: rgb(65, 65, 65); padding-top: 10px; font-size: 15px;">To specify the app's layout:</div>

1\. Create an HTML container where the layout will be placed later.

~~~html title="index.html"
<div id="layout"></div>
~~~

2\. Create a Layout object and place it into the HTML container that we’ve just created. 

{{snippet
'index.html' file 
}}
~~~js title="script.js"
var layout = new dhx.Layout("layout", {  
    height: "700px", // it’s important to set the height of the layout
    width: "1600px",
    rows: [
		{    
        	id: "toolbar-cell", //here the toolbar will be placed
            gravity: false, //remove automatic cell stretching
        }, 
        {
            cols: [ 
                {
                    id: "grid-cell", //here the grid will be placed
                    width: "65%" // width in % for this cell
                },
                {
                    css: "dhx_widget--bg_gray", 
                    // pass the css class to make the background gray
                    id: "chart-cell", //here the chart will be placed
                    width: "35%", // width in% for this cell
                    padding: "20px" // padding inside the cell
				}
			]
		}
	]
});
~~~
<i> We divide the layout into two rows. The first row will contain a toolbar. The second row will be divided into two columns: one for Grid and another for Chart. </i>

You can read more information about [Configuration of a cell](layout/configuration.md#configurationofcell) and  about [Styling of Layout cells](layout/customization.md#stylinglayoutcells).


<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step3.md"></a>
</div>
