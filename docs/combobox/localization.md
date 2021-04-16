---
sidebar_label: Localization
title: Localization
---          

You can apply different languages to the interface of dhtmlxCombo. You just need to translate the corresponding strings for Combobox labels and apply a ready locale to the component.

Default locale
------------

The default locale for Combobox looks like this:

~~~js
var en = {
	notFound: "Not Found",
	selectAll: "Select All",
	unselectAll: "Unselect All",
	selectedItems: "selected items"
};
~~~

Custom locale
------------

To use a different locale, your need to:

- define necessary language settings - names of buttons and labels:

~~~js
var de = {
	notFound: "nicht gefunden",
	selectAll: "alle auswählen",
	unselectAll: "deaktivieren Sie Alle",
	selectedItems: "ausgewählte Elemente"
}
~~~

- apply the language settings by calling the **dhx.i18n.setLocale()** method before Combobox initialization:

~~~js
dhx.i18n.setLocale("combo", de);
var combo = new dhx.Combobox("combo_container");
~~~

{{editor    https://snippet.dhtmlx.com/cnj0j9g0	Combobox. Localization}}



