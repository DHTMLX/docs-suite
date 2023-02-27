---
sidebar_label: Accessibility support
title: JavaScript Guides - Accessibility Support 
description: You can learn about Accessibility support in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Accessibility support

Accessibility is one of the key concepts in present-day web development. It presupposes equal access to web resources for people with diverse abilities.

## Web Conformance Guidelines

Even if you are not mandated to conform to any particular accessibility standard, it can be helpful to understand the guidelines outlined as they are generally good practices worth incorporating into your web based applications.

Currently the most commonly encountered conformance guidelines and standards are:

- [ADA](https://www.ada.gov/) - US Department of Justice
- [Section 508](https://www.section508.gov/) - US federal agencies
- [WCAG 2.0](https://www.w3.org/WAI/intro/wcag) - globally accepted standard. WCAG 2.0 has 3 levels of conformance; A, AA and AAA (in order of conformance)
- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - a standard that defines ways to make web content and web applications more accessible to people with disabilities
- [WAI](https://www.w3.org/WAI/) - web accessibility standard

The DHTMLX Suite library meets the main requirements of the WAI standards and provides support for the following accessibility components:

- [WAI-ARIA Attributes](#wai-aria-attributes)
- [Keyboard Navigation](#keyboard-navigation)
- [High-Сontrast Themes](#high-contrast-themes)

## WAI-ARIA Attributes

There are special attributes used in the markup of DHTMLX Suite widgets that make it possible for screen readers to recognize and interpret them to the user, namely:

### Grid

There are **roles** and **attributes** for elements of grid, sorting, filters, editable cells to enable screen readers to interpret and navigate the columns and rows of the grid (enabled by default). Custom content should be marked manually.

You can find the following **roles** and **attributes** in the DOM:

- role: *grid*, *rowgroup*, *row*, *columnheader*, *gridcell*, *button*
- aria attributes: *label*, *rowcount*, *colcount*, *rowindex*, *colindex*, *aria-sort*.

Role presentation and aria-hidden are used to hide redundant content from the accessibility tree.

### Chart

There are **aria** attributes for axes, lines, points, legends and general description of the chart (enabled by default). Points on charts like line, spline, area, spline area have aria attributes only when the **pointType** property is set. Information for attributes is taken from the chart config and property names. Currently, the ability to specify this information by yourself is not provided.

You can find the following **roles** and **attributes** in the DOM:
- role: *graphics-document*, *graphics-object*, *graphics-symbol*, *button*
- aria attributes: *label*,  *roledescription*.

Role presentation and aria-hidden are used to hide redundant content from the accessibility tree.

### List and DataView

There are general description of the component, items and their states. All the **roles** and **attributes** are enabled by default You can find the following **roles** and **attributes** in the DOM:
- role: *listbox*, *option*
- aria attributes: *label*, *roledescription*, *grabbed*, *selected*, *multiselectable*, *readonly*.

Role presentation and aria-hidden are used to hide redundant markup from the accessibility tree.

### Toolbar 

There are general description of the component, items and their states. All the **roles** and **attributes** are enabled by default You can find the following **roles** and **attributes** in the DOM:

- role: *toolbar*, *button*, *combobox*, *menu*, *menuitem*
- aria attributes: *label*, *labeledby*, *orientation*, *haspopup*, *expanded*, *disabled*, *pressed*.

Role presentation and aria-hidden are used to hide redundant markup from the accessibility tree.

## Keyboard Navigation

All DHTMLX Suite widgets are provided with a keyboard navigation support. It allows using a Suite-based app without a mouse pointer. Basic rules include:

- the "tab" key is used to navigate between widgets and clickable areas of the widgets
- the "esc" key closes windows and editors
- the "enter" is used to open and hide drop-down lists of select controls
- the arrow keys are used to move selection or change active elements within widgets

:::info
For the full list of built-in hotkeys, refer to the **Keyboard Navigation** articles of the following widgets:
- [Grid](../../grid/configuration/#keyboard-navigation)
- [List](../../list/configuration/#arrow-keys-navigation)
- [Tree](../../tree/configuration/#key-navigation)
- [DataView](../../dataview/configuration/#arrow-keys-navigation)
:::

## High-Contrast Themes

For users that are visually impaired due to color deficiencies, care should be taken when using colors to provide information.

Among various DHTMLX Suite themes there's a high-contrast one. Being rather attractive, it is also helpful for those users who have weak eye-sight.

<iframe src="https://snippet.dhtmlx.com/1eh4ks4f?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>