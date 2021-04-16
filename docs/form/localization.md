---
sidebar_label: Localization
title: Localization
---          

You can apply different languages to the interface of dhtmlxForm, specifically to its SimpleVault control. You just need to translate the corresponding strings for Form labels and apply a ready locale to the component.

Default locale
------------

The default (English) locale for Form looks like this:

~~~js
var en = {
	simpleVaultText: "Drag & drop files or folders here or",
	simpleVaultLabel: "browse files"
};
~~~

Custom locale
------------

To use a different locale, your need to:

- define necessary language settings: provide translation for all text labels (in the SimpleVault control), e.g. the German locale looks like this:

~~~js
var de = {
    simpleVaultText: "Drag & Drop Dateien oder Ordner hier oder",
	simpleVaultLabel: "Suchen Sie Dateien durch"
};
~~~

- apply the language settings by calling the **dhx.i18n.setLocale()** method before Form initialization:

~~~js
dhx.i18n.setLocale("form", de);
var form = new dhx.Form("form_container");
~~~

{{editor	https://snippet.dhtmlx.com/x8n18cr4	Form. Localization}}


