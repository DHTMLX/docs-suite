---
sidebar_label: Step 3. Add a Toolbar
title: Step 3. Add a Toolbar
---          

import styles from '@site/src/css/tutorial.module.scss';

To add a toolbar to the page, we take three steps:

1\. Create a toolbar with the constructor:

~~~js
const toolbar = new dhx.Toolbar(null, {css: "dhx_widget--bordered dhx_widget--bg_gray"});
~~~

The constructor function takes two parameters: 

- The first parameter is the toolbar container. It is `null` because we attach the toolbar to the layout, not to an HTML container.

- The second parameter is the configuration object of the toolbar. Here we set CSS classes that make the background gray and add a border to the toolbar.

2\. To configure the toolbar buttons, we define a JSON structure for them and pass it to the `toolbar.data.parse()` method:

~~~js
const toolbar = new dhx.Toolbar();
toolbar.data.parse([
    {
      "id": "load",
      "icon": "mdi mdi-download",
      "value": "Load"
    },
    {
      "id": "clear",
      "icon": "mdi mdi-delete",
      "value": "Clear"
    }
      // more buttons

]); 
~~~

You can add other buttons the same way.

3\. Attach the toolbar to the `"toolbar-cell"` cell of the layout with the `attach()` method of the cell:

~~~js
layout.cell("toolbar-cell").attach(toolbar);
~~~

<div className={styles.image}>

![Toolbar with Load and Clear buttons attached above empty grid and chart cells in DHTMLX Suite](/img/tutorial/basic_application/toolbar_003.png)

</div>

<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step4.md"></a>
</div>
