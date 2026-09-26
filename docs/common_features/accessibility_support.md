---
sidebar_label: Accessibility support
title: JavaScript Guides - Accessibility Support 
description: You can learn about Accessibility support in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Accessibility support

Accessibility is one of the key concepts in present-day web development. It gives people with diverse abilities equal access to web resources.

## Web Conformance Guidelines

Even if no accessibility standard is mandatory for you, the guidelines below are good practices worth applying to your web-based applications.

The most common conformance guidelines and standards are:

- [ADA](https://www.ada.gov/) — US Department of Justice
- [Section 508](https://www.section508.gov/) — US federal agencies
- [WCAG 2.0](https://www.w3.org/WAI/standards-guidelines/wcag/) — a globally accepted standard with three conformance levels: A, AA, and AAA, in ascending order
- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) — a standard that defines ways to make web content and web applications more accessible to people with disabilities
- [WAI](https://www.w3.org/WAI/) — a web accessibility standard

The DHTMLX Suite library meets the main requirements of the WCAG 2.0 standard and supports the following accessibility components:

- [WAI-ARIA Attributes](#wai-aria-attributes)
- [Keyboard Navigation](#keyboard-navigation)
- [High-Contrast Themes](#high-contrast-themes)

## WAI-ARIA Attributes

The markup of DHTMLX Suite widgets contains special attributes that let screen readers recognize the widgets and describe them to the user:

### Grid

Grid elements, sorting, filters, and editable cells have **roles** and **attributes** that let screen readers interpret and navigate grid columns and rows. The semantics are always present, and no flag disables them. Mark custom content manually.

You can find the following **roles** and **attributes** in the DOM:

- role: `grid` (or `treegrid` in the `type: "tree"` mode), `rowgroup`, `row`, `columnheader`, `gridcell`, `button`
- aria attributes: `label`, `rowcount`, `colcount`, `rowindex`, `colindex`, `aria-sort`, `aria-selected`, `aria-readonly`, `aria-multiselectable`, and — for tree rows — `aria-level` and `aria-expanded`.

In-place editors and header/footer filters get an accessible name derived from the column header text. The `presentation` role and `aria-hidden` hide redundant content (resizers, sort icons, drag ghosts, the selection overlay) from the accessibility tree.

:::info
For the complete picture — the ARIA model, the keyboard zones (header/body/footer), the focus model, and configuration recipes — see the dedicated [Grid accessibility](grid/accessibility.md) guide.
:::

### Chart

**aria** attributes cover axes, lines, points, legends, and a general description of the chart. They are enabled by default. Points on line, spline, area, and spline area charts have aria attributes only when the `pointType` property is set. DHTMLX takes the attribute information from the chart config and property names. You cannot specify this information yourself.

You can find the following **roles** and **attributes** in the DOM:
- role: `graphics-document`, `graphics-object`, `graphics-symbol`, `button`
- aria attributes: `label`, `roledescription`.

The `presentation` role and `aria-hidden` hide redundant content from the accessibility tree.

### List and DataView

The component, its items, and their states have a general description. All **roles** and **attributes** are enabled by default. You can find the following **roles** and **attributes** in the DOM:
- role: `listbox`, `option`
- aria attributes: `label`, `roledescription`, `grabbed`, `selected`, `multiselectable`, `readonly`.

The `presentation` role and `aria-hidden` hide redundant markup from the accessibility tree.

### Toolbar

The component, its items, and their states have a general description. All **roles** and **attributes** are enabled by default. You can find the following **roles** and **attributes** in the DOM:

- role: `toolbar`, `button`, `combobox`, `menu`, `menuitem`
- aria attributes: `label`, `labeledby`, `orientation`, `haspopup`, `expanded`, `disabled`, `pressed`.

The `presentation` role and `aria-hidden` hide redundant markup from the accessibility tree.

## Keyboard Navigation

All DHTMLX Suite widgets support keyboard navigation, so you can use a Suite-based app without a mouse pointer. Basic rules include:

- The <kbd>Tab</kbd> key moves focus between widgets and their clickable areas
- The <kbd>Esc</kbd> key closes windows and editors
- The <kbd>Enter</kbd> key opens and closes drop-down lists of select controls
- The <kbd>Arrow</kbd> keys move selection or change active elements within widgets

:::info
For the full list of built-in hotkeys, refer to the **Keyboard Navigation** articles of the following widgets:
- [Grid](grid/configuration.md#keyboard-navigation)
- [List](list/configuration.md#arrow-keys-navigation)
- [Tree](tree/configuration.md#key-navigation)
- [DataView](dataview/configuration.md#arrow-keys-navigation)
:::

## High-Contrast Themes

For users who are visually impaired due to color deficiencies, choose colors carefully when you use them to convey information.

DHTMLX Suite includes two high-contrast themes:
- **Light High Contrast**
- **Dark High Contrast**

:::info
The contrast themes correspond to the AAA level.
:::

These themes also help users with poor eyesight.

<iframe src="https://snippet.dhtmlx.com/85fbitnu?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>