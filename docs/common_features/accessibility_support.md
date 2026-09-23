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
- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) - globally accepted standard. WCAG has 3 levels of conformance; A, AA and AAA (in order of conformance). The current version is WCAG 2.2
- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - a standard that defines ways to make web content and web applications more accessible to people with disabilities
- [WAI](https://www.w3.org/WAI/) - web accessibility standard

The DHTMLX Suite library meets the main requirements of the WCAG standards and provides support for the following accessibility components:

- [WAI-ARIA Attributes](#wai-aria-attributes)
- [Keyboard Navigation](#keyboard-navigation)
- [Localization of screen-reader strings](#localization-of-screen-reader-strings)
- [High-Сontrast Themes](#high-contrast-themes)

## WAI-ARIA Attributes

There are special attributes used in the markup of DHTMLX Suite widgets that make it possible for screen readers to recognize and interpret them to the user, namely:

### Grid

There are **roles** and **attributes** for elements of grid, sorting, filters, editable cells to enable screen readers to interpret and navigate the columns and rows of the grid (enabled by default). Custom content should be marked manually.

You can find the following **roles** and **attributes** in the DOM:

- role: *grid* (or *treegrid* in the `type: "tree"` mode), *rowgroup*, *row*, *columnheader*, *gridcell*, *button* (the sort control and the tree expand/collapse toggle)
- aria attributes: *label*, *rowcount*, *colcount*, *rowindex*, *colindex*, *aria-sort* (on sortable columns), *aria-selected*, *aria-readonly*, *aria-multiselectable*, *aria-colspan* and *aria-rowspan* (on merged cells), and — for tree rows — *aria-level* and *aria-expanded*.

The cell surface is a single tab stop, and the arrow keys move the active cell inside it, whether or not a selection module is enabled.

In-place editors and header/footer filters get an accessible name derived from the column header text. Role presentation and aria-hidden are used to hide redundant content (resizers, sort icons, drag ghosts, the selection overlay) from the accessibility tree. Dynamic changes - sorting, filtering, data loading - are read out through a visually hidden polite live region, which the application can write to itself; all the built-in screen-reader strings are stored in the `aria_*` locale keys and can be translated.

:::info
For the complete picture — the ARIA model, the keyboard zones (header/body/footer), the focus model, and configuration recipes — see the dedicated [Grid accessibility](grid/accessibility.md) guide. Criterion-by-criterion conformance with WCAG 2.2 AA, Section 508 and EN 301 549 is documented in the [Accessibility Conformance Report](grid/accessibility_conformance_report.md).
:::

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

### Toolbar, Menu, Sidebar and Ribbon

These widgets are built on the same navigation bar and share one accessibility model. All the **roles** and **attributes** are enabled by default. You can find the following **roles** and **attributes** in the DOM:

- role: *toolbar* (Toolbar, Ribbon, and Sidebar with the vertical orientation), *menubar* (Menu), *menu*, *menuitem*, *menuitemcheckbox*, *menuitemradio*, *button*, *combobox*
- aria attributes: *label*, *orientation*, *haspopup*, *expanded*, *disabled*, *pressed*, *checked*.

A few details worth knowing:

- a button reports its pressed state (`aria-pressed`) in both positions when the item is declared as a toggle, with `twoState: true`, or as a member of a set, with `group`. Inside a menu, such items are exposed as `menuitemcheckbox` / `menuitemradio` with `aria-checked`;
- a menu is named after the text (or the tooltip) of the control that opens it;
- a button built from custom HTML takes its accessible name from its `tooltip`, so give icon-only custom buttons a tooltip;
- the toolbar is not a navigation landmark.

The accessible name of a Toolbar is set with the `ariaLabel` configuration option. Set it whenever a page has more than one toolbar, so that users can tell them apart. Without it, the name falls back to the `aria_toolbar` locale string (`"Toolbar"`):

~~~jsx
const formatting = new dhx.Toolbar("formatting", {
    ariaLabel: "Formatting",
    data: formattingItems
});
~~~

Role presentation and aria-hidden are used to hide redundant markup from the accessibility tree.

### Window

A window is exposed with `role="dialog"`. Its accessible name is taken from the `ariaLabel` configuration option, then from `title`, and, when there is neither, from the `aria_dialog` locale string (`"Dialog"`). Use `ariaLabel` for a window without a visible title:

~~~jsx
const search = new dhx.Window({
    ariaLabel: "Search",
    width: 405,
    height: 56
});
~~~

`aria-modal="true"` is set only on a modal window (`modal: true`). The window container is focusable from script, but it is not a stop in the tab order of the page, so opening a window does not change the tab order of the host page.

### Colorpicker

The color palette is exposed as a list of options. You can find the following **roles** and **attributes** in the DOM:

- role: *listbox* (the palette), *option* (each swatch and the "Add new color" control), *group* (the custom colors)
- aria attributes: *label*, *labelledby*, *selected*.

Each swatch is named by its color name, for example "dark green", rather than by its HEX value, and the selected swatch reports `aria-selected="true"`.

### Message

The buttons of alert and confirmation dialogs take their accessible names from the `message` locale: `aria_confirm`, `aria_reject` and `aria_apply`.

## Keyboard Navigation

All DHTMLX Suite widgets are provided with a keyboard navigation support. It allows using a Suite-based app without a mouse pointer. Basic rules include:

- the <kbd>Tab</kbd> key is used to navigate between widgets and clickable areas of the widgets. A group of controls - a grid, a toolbar, a menu bar, a sidebar, a ribbon, a color palette - is a single tab stop
- the <kbd>Arrow</kbd> keys are used to move selection or change active elements within widgets
- the <kbd>Esc</kbd> key closes windows, menus and editors
- the <kbd>Enter</kbd> is used to open and hide drop-down lists of select controls

The focus indicator stays visible during the whole keyboard interaction, including arrow-key navigation, and is removed when the user switches to a pointer.

### Toolbar, Menu, Sidebar and Ribbon

| Keys | Action |
| ---- | ------ |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Enter or leave the bar. Returning to the bar puts focus on the control that was used last |
| <kbd>←</kbd> / <kbd>→</kbd> (Toolbar, Menu, Ribbon), <kbd>↑</kbd> / <kbd>↓</kbd> (Sidebar) | Move between the controls of the bar, wrapping at both ends. Separators, spacers and disabled controls are skipped |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last control |
| <kbd>↓</kbd> (Toolbar, Menu, Ribbon), <kbd>→</kbd> (Sidebar), <kbd>Enter</kbd> / <kbd>Space</kbd> | Open the menu of the focused control and move focus into it |

A text field inside a bar keeps the arrow keys while the caret can move, and passes them to the bar when the caret is at the matching end of the text and nothing is selected.

Inside an open menu:

| Keys | Action |
| ---- | ------ |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move between the menu entries, wrapping at both ends |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last entry |
| <kbd>→</kbd> | Open a submenu and move focus into it |
| <kbd>←</kbd> | Go one level back: to the entry that opened the submenu, or to the control of the bar |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Activate the entry, close the menu and return focus to the control that opened it |
| <kbd>Esc</kbd> | Close the menu and return focus to the control that opened it |
| <kbd>Tab</kbd> | Close the menu and leave the bar |

### Colorpicker

| Keys | Action |
| ---- | ------ |
| <kbd>Tab</kbd> | Enter the palette on the selected color, or on the first swatch when nothing is selected |
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> | Move between swatches in the order they are shown on the screen. Movement stops at the edges of the palette |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last swatch |
| <kbd>Enter</kbd> | Select the focused color |

Focus moves into the custom color view when it opens, and back to the palette when the view is closed.

:::info
For the full list of built-in hotkeys, refer to the **Keyboard Navigation** articles of the following widgets:
- [Grid](grid/configuration.md#keyboard-navigation) and the [Grid accessibility](grid/accessibility.md#keyboard-navigation) guide
- [List](list/configuration.md#arrow-keys-navigation)
- [Tree](tree/configuration.md#key-navigation)
- [DataView](dataview/configuration.md#arrow-keys-navigation)
:::

## Localization of screen-reader strings

The accessible names and announcements that the widgets generate are stored in the locale of each widget as keys with the `aria_` prefix, for example `aria_toolbar` in the `toolbar` locale, `aria_dialog` in the `window` locale, `aria_palette` and the color names in the `colorpicker` locale, and `aria_confirm` in the `message` locale. Translate them with the `dhx.i18n.setLocale()` method before the widget is initialized:

~~~jsx
dhx.i18n.setLocale("toolbar", {
    aria_toolbar: "Symbolleiste"
});
dhx.i18n.setLocale("window", {
    aria_dialog: "Dialogfeld"
});
dhx.i18n.setLocale("colorpicker", {
    aria_palette: "Farbpalette",
    aria_colorDarkGray: "dunkelgrau"
});
~~~

The locale keys are flat: pass each key at the top level of the object, not inside a nested object.

## High-Contrast Themes

For users that are visually impaired due to color deficiencies, care should be taken when using colors to provide information.

Among various DHTMLX Suite themes there are the high-contrast ones:
- **Light High Contrast**
- **Dark High Contrast**

:::info
The contrast themes correspond to the AAA level.
:::

Being rather attractive, it is also helpful for those users who have weak eye-sight.

<iframe src="https://snippet.dhtmlx.com/85fbitnu?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>