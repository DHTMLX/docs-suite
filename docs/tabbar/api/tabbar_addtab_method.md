---
sidebar_label: addTab
title: addTab
---          


@short: adds a new tab into a tabbar


@signature: addTab(object view,, index: number): void; 

<!-- void addTab(object view,number index);
addTab(config: ITabbarConfig, index: number): any; -->

@params:
- view 		object		an object of a tab 
- index 	number		the position to add a tab into

@example:
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);


@template: api_method
@descr:
The **view** object may include the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>tab</b></td>
			<td>the name of a tab</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tabCss</b></td>
			<td>the name of the CSS class used for a tab</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>the name of the CSS class used for a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>the header of a cell</td>
		</tr>
    </tbody>
</table>

@relatedapi: tabbar/api/tabbar_removetab_method.md

@changelog: added in v6.4

@related: tabbar/work_with_tabbar.md#addingremovingtabs

@relatedsample: https://snippet.dhtmlx.com/ekke2q8t	Tabbar. Add Tab