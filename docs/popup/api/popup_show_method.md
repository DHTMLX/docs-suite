---
sidebar_label: show
title: show
---          

@short: shows a Popup

```todoapi 
void show(HTMLElement element,object config);
show(node: HTMLElement, config?: IShowConfig, attached?: any): void;
```

@params:
- element 		HTMLElement		 mandatory, the container to place a popup in
- config 		object			 optional, the configuration object of a popup


@example:
<div id="popup_container"></div>

var popup = new dhx.Popup();
 
popup.show("popup_container");


@template: api_method
@descr:
The **config** object can contain the properties below:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>centering</b></td>
			<td>(<i>boolean</i>) defines whether a popup should be centered relative to the element, <i>true</i> by default</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>auto</b></td>
			<td>(<i>boolean</i>) enables autopositioning of a popup, i.e. it will be shown at that side of an element which provides enough space for a popup</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>mode</b></td>
			<td>(<i>string</i>) the position relative to the element to show a popup at: "left", "right", "bottom" (default), "top"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>indent</b></td>
			<td>(<i>number</i>) the offset of a popup relative to the element</td>
		</tr>
    </tbody>
</table>


@relatedapi:
popup/api/popup_hide_method.md

@relatedsample: 
https://snippet.dhtmlx.com/bz1ekc71	Popup. Auto Positioning
https://snippet.dhtmlx.com/bu4uj2ik	Popup.Show position

@related:popup/work_with_popup.md#hidingshowingpopup

@changelog:
- the **indent** property of the **config** parameter is added in v6.1

