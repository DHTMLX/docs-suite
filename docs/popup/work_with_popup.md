---
sidebar_label: Work with Popup
title: Work with Popup
---          



Hiding/showing Popup
-------------

You can hide and show a popup using the [hide()](popup/api/popup_hide_method.md) and [show()](popup/api/popup_show_method.md) methods. The **show()** method takes the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>element</b></td>
			<td>(<i>HTMLElement</i>) mandatory, the container to place a popup in</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) optional, the configuration object of a popup. Can contain the properties below:
            <ul>
                <li><b>centering</b> - (<i>boolean</i>) defines whether a popup should be centered relative to the element, <i>true</i> by default</li>
                <li><b>auto</b> - (<i>boolean</i>) enables autopositioning of a popup, i.e. it will be shown at that side of an element which provides enough space for a popup</li>
                <li><b>mode</b> - (<i>string</i>) the position relative to the element to show a popup at:"left","right","bottom" (default),"top"</li>
                <li><b>indent</b> - (<i>number</i>) the offset of a popup relative to the element</li>
            </ul></td>
		</tr>
    </tbody>
</table> 
    
This method should be called each time you need to render a popup on a page.

    
```js
	popup.show("popup_container");
```

This is how you can hide a popup:

~~~js
popup.hide();
~~~

{{editor	https://snippet.dhtmlx.com/aqzy536h	Popup. Show/Hide}}

Checking visibility of Popup
--------------

You can easily check whether a popup is visible with the help of the [isVisible()](popup/api/popup_isvisible_method.md) method. It returns *true*, if a popup is visible.

~~~js
popup.isVisible(); // -> true/false
~~~

{{editor	https://snippet.dhtmlx.com/f614sdm3	Popup. Is Visible}}

Attaching content
------------

You can easily attach some HTML content to a popup via the [attachHTML()](popup/api/popup_attachhtml_method.md) method. It takes as a parameter a string with HTML.

~~~js
var popup = new dhx.Popup();
popup.attachHTML("<h1>Hello, I'm popup</h1>");
popup.show("popup");
~~~

{{editor	https://snippet.dhtmlx.com/ajv5qqxq	Popup. Html Content}}

Attaching DHTMLX components
--------------

dhtmlxPopup allows attaching other components of the library using the [attach()](popup/api/popup_attach_method.md) method. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>name</b></td>
			<td>(<i>string</i>) the name of a component</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) optional, the configuration settings of a component</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
popup.attach("Timepicker"); 

popup.show();
~~~

{{editor	https://snippet.dhtmlx.com/7x6hlbqx	Popup. Attach Timepicker}}

