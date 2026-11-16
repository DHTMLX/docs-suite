---
sidebar_label: Step 1. Include DHTMLX files 
title: Step 1. Include DHTMLX Files 
---          

import styles from '@site/src/css/tutorial.module.scss';

Let's create a folder and a file for the app:

1\. Create a folder named `contact_manager` in the root directory of your local web server.

2\. Create the `index.html` file in the `contact_manager` folder.

<div className={styles.image}>

![File explorer showing the contact_manager folder with an index file in DHTMLX Suite](/img/tutorial/basic_application/file.png)

</div>

Include the `.js` and `.css` files of the DHTMLX Suite library in the main file of the app.
You can use CDN links to do this:

~~~html
<!DOCTYPE html>
<html>
<head>
    <!-- meta block -->
    <title>Contact manager</title>
    <script src="https://cdn.dhtmlx.com/suite/edge/suite.js"></script> /*!*/
    <link rel="stylesheet" href="https://cdn.dhtmlx.com/suite/edge/suite.css"> /*!*/   
</head>
<body>
    <script type="text/javascript">
        //the code of your application
    </script>
</body>
</html>

~~~

<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step2.md"></a>
</div>
