---
sidebar_label: Localization
title: Localization
---          

dhtmlxColorPicker allows you to apply different languages to its interface. You just need to translate the corresponding strings for ColorPicker labels and tooltips and apply a ready locale to the component.


Default locale
------------

The default locale for ColorPicker looks like this:

~~~js
var en = {
	cancel: "Cancel",
	select: "Select",
	rightClickToDelete: "Right click to delete",
	customColors: "Custom colors",
	addNewColor: "Add new color"
};
~~~

Custom locale
------------

To use a different locale, your need to:

- define necessary language settings: provide translations for the labels of colors' elements in all available formats as well as for the buttons:

~~~js
var de = {
	cancel: "Abbrechen",
	select: "Wählen",
	rightClickToDelete: "Rechtsklick zu entfernen",
	customColors: "Seine Farben",
	addNewColor: "Neue Farbe hinzufügen"
}
~~~

- apply the language settings by calling the **dhx.i18n.setLocale()** method before ColorPicker initialization:

~~~js
dhx.i18n.setLocale("colorpicker", de);
var colorpicker = new dhx.ColorPicker();
~~~

{{editor    https://snippet.dhtmlx.com/l870h1gh	Colorpicker. Localization}}