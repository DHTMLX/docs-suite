---
sidebar_label: Step 7. Display Data in the Chart
title: Step 7. Display Data in the Chart
---          

import styles from '@site/src/css/tutorial.module.scss';

Before we display data in the chart, we process the grid data.

## Process grid data

To do that, we'll create the `getCountUsers()` function:

~~~js
function getCountUsers(){     
    vipUser = grid.data.reduce(function(acc, item) {    
        return item.vip ? acc + 1 : acc;           
    }, 0);
    defUser = grid.data.getLength() - vipUser; 

    var pieData = []; 

    if (vipUser > 0) { 
        pieData.push( { value: vipUser, color: "#394E79", 
            text: "Premium Users" })
        }
    if  (defUser > 0) {
        pieData.push( { value: defUser, color: "#5E83BA", 
            text: "Default Users" })
        }            
    return pieData; //return the processed data for the chart
};
~~~

Let's look at its logic in detail.

First, we count the number of VIP users with the `reduce()` method of DataCollection:

~~~js
vipUser = grid.data.reduce(function(acc, item) {    
    return item.vip ? acc + 1 : acc;           
}, 0);
~~~

After that, we get the total number of users with the `getLength()` method of DataCollection and calculate the number of default users:

~~~js
defUser = grid.data.getLength() - vipUser;
~~~

Finally, we create an array and add data about the number of default and VIP users to it with the `push()` method:

~~~js
var pieData = []; // create an array

if (vipUser > 0) { 
    pieData.push( { value: vipUser, color: "#394E79", 
        text: "Premium Users" })
    }
if  (defUser > 0) {
    pieData.push( { value: defUser, color: "#5E83BA", 
        text: "Default Users" })
};           
~~~

The `getCountUsers()` function returns a dataset for the chart.

## Display data in the chart

Next, we show the processed data in the chart.

To display the data in the chart when it loads into the grid, we use the `Load` event of [DataCollection](/data_collection/). Inside the event handler, we call the `parse()` method to load the data into the chart:

~~~js
grid.data.events.on("Load", function(){
    chart.data.parse(getCountUsers());
});
~~~

When grid data changes, we should update the chart data as well. For this, we use the `Change` event of [DataCollection](/data_collection/):

~~~js
grid.data.events.on("Change", function(id,status,updatedItem){
    chart.data.parse(getCountUsers());
});
~~~

## Get the result

After you complete all the steps of the tutorial, you get a mini app that looks like this:

<div className={styles.image}>

![Contacts grid beside a pie chart showing default versus premium users in DHTMLX Suite](/img/tutorial/basic_application/chart.png)

</div>

<div id="tutorial_step">
    <a id="next_step" href="tutorial.md"></a>
</div>


