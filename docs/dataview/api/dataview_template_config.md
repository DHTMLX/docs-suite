---
sidebar_label: template
title: template
---          

@short: specifies a template for DataView items

@signature: template?: (item: any) => string;

@example: 
var dataview = new dhx.DataView("dataview", {
	itemsInRow: 4, 
    template: function(item) {
		var template = "<div class='item_wrap'>";
		template += "<img class='image' src=" + "..images/" + item.thumbnailName + " />";
		template += "<h2 class='title'>" + item.value + "</h2>";
		template += "<p class='description'>" + item.shortDescription + "</p>";
		template += "</div>";
		return template;
	}
});


@template:	api_config
@descr: 
The template function takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>(<i>object</i>) an object of a data item</td>
		</tr>
    </tbody>
</table>

@relatedsample:
https://snippet.dhtmlx.com/d6l6grr7	Dataview. Render Template

@related: dataview/configuration.md#templatefordataviewitems

@relateapi: dataview/api/dataview_eventhandlers_config.md