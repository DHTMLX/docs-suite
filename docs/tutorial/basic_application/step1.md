---
sidebar_label: Step 1. Include DHTMLX Files 
title: Step 1. Include DHTMLX Files 
---          

Let's start our tutorial with preparing a file for our future app: 

1\. Create  a folder with the name <i>"contact_manager"</i> in the root directory of your local web server.

2\. Create the <i>"index.html" </i> file in the "contact_manager" folder.

<img style="border-radius:8px; margin: 30px;  display: block;" src="tutorial/basic_application/file.png"/>

Now we need to include ".js" and ".css" files of the DHTMLX Suite library to the main file of our future app.
You can use CDN links to do this.

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
