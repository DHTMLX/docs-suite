---
sidebar_label: sort
title: sort
---          

@short: sorts data items in a component

@params:
- rule		object		an object with parameters for sorting
- config	object		defines the parameter of sorting

@example:
grid.data.sort({
    by:"a",
    dir:"desc",
    as: function(item){
        return item.toUpperCase(); 
    }
});

// cancels applied sorting rules
grid.data.sort();

@template: api_method
@descr:
The **rule** object has the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>by</b></td>
			<td>(<i>string</i>) the id of a data field (a column of Grid)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>dir</b></td>
			<td>(<i>function</i>) the direction of sorting "asc" or "desc"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>as</b></td>
			<td>(<i>function</i>) a function that specifies the type to sort data as</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>rule</b></td>
			<td>(<i>function</i>) optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)</td>
		</tr>
    </tbody>
</table>

{{note Calling the method without parameters will discard all applied sorting rules.}}

The **config** parameter may contain one property:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>smartSorting</b></td>
			<td>(<i>boolean</i>) specifies whether a sorting rule should be applied each time after changing the data set
            </td>
		</tr>
    </tbody>
</table>	

~~~js
grid.data.sort({
    by:"a",
    dir:"desc",
    as: function(item){
        return item.toUpperCase(); 
    },
	{
		smartSorting: true /*!*/
	}
});
~~~

### Custom sorting

To set a custom function for sorting you need to specify the **rule** attribute in a passed object. For example:

~~~js
grid.data.sort({
    rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

@relatedsample: https://snippet.dhtmlx.com/lz351u47	Data. Sort

@changelog: 
The **config** parameter is added in v7.0. 