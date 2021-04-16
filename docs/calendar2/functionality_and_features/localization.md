---
sidebar_label: Calendar localization
title: Calendar localization
---

You can apply different languages to the interface of DHTMLX Calendar. You just need to translate the corresponding strings for Calendar labels and apply a ready locale to the component.

<iframe src="https://snippet.dhtmlx.com/yo6hnsk8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

https://snippet.dhtmlx.com/tn40a0w8 

## Default locale

The default locale for Calendar provides full and short names of months and full and short names of days of a week in English.

## Custom locale

To use a different locale, your need to:

- define necessary language settings: provide full and short names of months, as well as full and short names of days of a week;
- apply the language settings by calling the **dhx.i18n.setLocale()** method before Calendar initialization.

<iframe src="https://snippet.dhtmlx.com/3u7f1oug?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

https://snippet.dhtmlx.com/tn40a0w8 



## Вариант оформления 1 фрейм + 1 код блока со ссылкой


You can apply different languages to the interface of DHTMLX Calendar. You just need to translate the corresponding strings for Calendar labels and apply a ready locale to the component.

<iframe src="https://snippet.dhtmlx.com/yo6hnsk8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

https://snippet.dhtmlx.com/tn40a0w8 

## Default locale

The default locale for Calendar provides full and short names of months and full and short names of days of a week in English.

## Custom locale

To use a different locale, your need to:

- define necessary language settings: provide full and short names of months, as well as full and short names of days of a week;
- apply the language settings by calling the **dhx.i18n.setLocale()** method before Calendar initialization.

~~~js
//define language settings
const de = {
    // short names of months
    monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
        "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    // full names of months             
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"],
    // short names of days
    daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
    // full names of days
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag",
        "Freitag", "Samstag"]
};

//apply language settings
dhx.i18n.setLocale("calendar", de);
const calendar = new dhx.Calendar("calendar", {
    css: "dhx_widget--bordered"
});
~~~

`RELATED SAMPLE:` [Calendar. Localized Calendar](https://snippet.dhtmlx.com/3u7f1oug) 
