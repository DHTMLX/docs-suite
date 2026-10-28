---
sidebar_label: Accessibility support
title: JavaScript Guides - Accessibility Support 
description: Learn how DHTMLX Suite widgets support accessibility, from WAI-ARIA roles and keyboard navigation in Grid, Toolbar, Menu, Sidebar, Ribbon and Colorpicker to translatable screen-reader strings and high-contrast themes.
---

# Accessibility support

Accessibility is one of the key concepts in present-day web development. It gives people with diverse abilities equal access to web resources.

## Web conformance guidelines

Even if no accessibility standard is mandatory for you, the guidelines below are good practices worth applying to your web-based applications.

The most common conformance guidelines and standards are:

- [ADA](https://www.ada.gov/) - US Department of Justice
- [Section 508](https://www.section508.gov/) - US federal agencies
- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) - globally accepted standard. WCAG has 3 levels of conformance; A, AA and AAA (in order of conformance). The current version is WCAG 2.2
- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - a standard that defines ways to make web content and web applications more accessible to people with disabilities
- [WAI](https://www.w3.org/WAI/) - web accessibility standard

The DHTMLX Suite library meets the main requirements of the WCAG standards and provides support for the following accessibility components:

- [WAI-ARIA attributes](#wai-aria-attributes)
- [Keyboard navigation](#keyboard-navigation)
- [Localization of screen-reader strings](#localization-of-screen-reader-strings)
- [High-contrast themes](#high-contrast-themes)

## WAI-ARIA attributes

The markup of DHTMLX Suite widgets contains special attributes that let screen readers recognize the widgets and describe them to the user:

### Grid

There are **roles** and **attributes** for elements of grid, sorting, filters, editable cells to enable screen readers to interpret and navigate the columns and rows of the grid (always rendered). Custom content should be marked manually.

You can find the following **roles** and **attributes** in the DOM:

- role: *grid* (or *treegrid* in the `type: "tree"` mode), *rowgroup*, *row*, *columnheader*, *gridcell*, *button* (the sort control and the tree expand/collapse toggle)
- aria attributes: *label*, *rowcount*, *colcount*, *rowindex*, *colindex*, *aria-sort* (on sortable columns), *aria-selected*, *aria-readonly*, *aria-multiselectable*, *aria-colspan* and *aria-rowspan* (on merged cells), and *aria-level* and *aria-expanded* (on tree rows).

The <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> keys move cell by cell through the header, the body and the footer and leave the grid at its ends. The arrow keys move the active cell within and between these zones, whether or not a selection module is enabled.

The accessible name of the grid is set with the [`ariaLabel`](grid/api/grid_arialabel_config.md) configuration option. In-place editors and header/footer filters get an accessible name derived from the column header text. Role presentation and aria-hidden are used to hide redundant content (resizers, sort icons, drag ghosts, the selection overlay) from the accessibility tree. Dynamic changes, such as sorting, filtering and data loading, are read out through a visually hidden polite live region, which the application can write to itself with the [`announce()`](grid/api/grid_announce_method.md) method; all the built-in screen-reader strings are stored in the `aria_*` locale keys and can be translated.

:::info
For the complete picture, including the ARIA model, the keyboard zones (header/body/footer), the focus model, and configuration recipes, see the dedicated [Grid accessibility](grid/accessibility.md) guide. Criterion-by-criterion conformance with WCAG 2.2 AA, Section 508 and EN 301 549 is documented in the [Accessibility Conformance Report](grid/accessibility_conformance_report.md).
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

### Toolbar, Menu, Sidebar and Ribbon

These widgets are built on the same navigation bar and share one accessibility model. All the **roles** and **attributes** are enabled by default. You can find the following **roles** and **attributes** in the DOM:

- role: *toolbar* (Toolbar, Ribbon, and Sidebar with the vertical orientation), *menubar* (Menu), *menu* (the dropdowns and submenus of all four widgets, and the root of a context menu), *menuitem*, *menuitemcheckbox*, *menuitemradio*, *button*, *combobox*
- aria attributes: *label*, *orientation*, *haspopup*, *expanded*, *disabled*, *pressed*, *checked*.

A few details worth knowing:

- a button reports its pressed state (`aria-pressed`) in both positions when the item is declared as a toggle, with `twoState: true`, or as a member of a set, with `group`. Inside a menu, such items are exposed as `menuitemcheckbox` / `menuitemradio` with `aria-checked`;
- a menu is named after the text (or the tooltip) of the control that opens it;
- a button without text, such as an icon button or a button built from custom HTML, takes its accessible name from its `tooltip`, so give such buttons a tooltip;
- the toolbar is not a navigation landmark.

The accessible name of a Toolbar is set with the [`ariaLabel`](toolbar/api/toolbar_arialabel_config.md) configuration option. Set it whenever a page has more than one toolbar, so that users can tell them apart. Without it, the name falls back to the `aria_toolbar` locale string (`"Toolbar"`):

~~~jsx
const formatting = new dhx.Toolbar("formatting", {
    ariaLabel: "Formatting",
    data: formattingItems
});
~~~

Menu, Sidebar and Ribbon are named in the same way, with the [`ariaLabel`](menu/api/menu_arialabel_config.md) option of Menu, the [`ariaLabel`](sidebar/api/sidebar_arialabel_config.md) option of Sidebar and the [`ariaLabel`](ribbon/api/ribbon_arialabel_config.md) option of Ribbon. These widgets have no locale fallback, so without the option the bar has no accessible name.

A context menu has no control to take the name of its root menu from, so the root menu is named with the [`ariaLabel`](menu/api/menu_arialabel_config.md) configuration option of ContextMenu. Without it, the root menu has no accessible name:

~~~jsx
const cmenu = new dhx.ContextMenu(null, {
    ariaLabel: "File actions",
    data: menuItems
});
~~~

The `presentation` role and `aria-hidden` hide redundant markup from the accessibility tree.

### Window

A window is exposed with `role="dialog"`. Its accessible name is taken from the [`ariaLabel`](window/api/window_arialabel_config.md) configuration option, then from [`title`](window/api/window_title_config.md), and, when there is neither, from the `aria_dialog` locale string (`"Dialog"`). Use `ariaLabel` for a window without a visible title:

~~~jsx
const search = new dhx.Window({
    ariaLabel: "Search",
    width: 405,
    height: 56
});
~~~

`aria-modal="true"` is set only on a modal window (`modal: true`). The window container is focusable from script, but it is not a stop in the tab order of the page, so opening a window does not change the tab order of the host page.

### Colorpicker

The color palette is exposed as a list of options, one per swatch (a single color cell of the palette) and one for the "Add new color" control. You can find the following **roles** and **attributes** in the DOM:

- role: *listbox* (the palette), *option* (each swatch and the "Add new color" control), *group* (the custom colors)
- aria attributes: *label*, *labelledby*, *selected*.

Each swatch is named by its color name, for example "dark green", rather than by its HEX value, and the selected swatch reports `aria-selected="true"`.

### Combobox

The input of a combo box is exposed with `role="combobox"`. Its accessible name is set with the [`ariaLabel`](combobox/api/combobox_arialabel_config.md) configuration option. Without it, the input is named *"Select value"* in the [`readOnly`](combobox/api/combobox_readonly_config.md) mode and *"Type or select value"* otherwise:

~~~jsx
const combo = new dhx.Combobox("combo_container", {
    ariaLabel: "Country",
    data: countries
});
~~~

### Message

The buttons of alert and confirmation dialogs take their accessible names from the `message` locale: `aria_confirm`, `aria_reject` and `aria_apply`. An alert without a header is named by the `aria_alert` key (`"message"`).

## Keyboard navigation

All DHTMLX Suite widgets support keyboard navigation, so you can use a Suite-based app without a mouse pointer. Basic rules include:

- the <kbd>Tab</kbd> key is used to navigate between widgets and clickable areas of the widgets. A group of controls, such as a toolbar, a menu bar, a sidebar, a ribbon or a color palette, is a single tab stop. In a grid, <kbd>Tab</kbd> moves cell by cell, and leaves the grid at its ends
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

The *Skin* control of this Toolbar has its menu open, and a dashed outline shows which entry holds the keyboard focus:

![Toolbar navigated with the keyboard](/img/toolbar/toolbar_keyboard_navigation.png)

A Sidebar opens the menu of an item to the right of the bar. Here the menu of *Posts* is open, with its focused entry outlined:

![Sidebar navigated with the keyboard](/img/sidebar/sidebar_keyboard_navigation.png)

Inside an open menu:

| Keys | Action |
| ---- | ------ |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move between the menu entries, wrapping at both ends |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last entry |
| <kbd>→</kbd> | Open a submenu and move focus into it |
| <kbd>←</kbd> | Go one level back: to the entry that opened the submenu, or to the control of the bar |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | On an entry with a submenu, open the submenu and move focus into it. On any other entry, activate the entry, close the menu and return focus to the control that opened it |
| <kbd>Esc</kbd> | Close the menu and return focus to the control that opened it |
| <kbd>Tab</kbd> | Close the menu and leave the bar |

<kbd>→</kbd>, <kbd>Enter</kbd> and <kbd>Space</kbd> move focus into a submenu also when the submenu is already open, for example, after it was opened with the pointer.

The next screenshot shows two open levels of a Menu, *Format* and its *Align* submenu. Focus is on an entry of the submenu, which carries the dashed outline:

![Menu navigated with the keyboard](/img/menu/menu_keyboard_navigation.png)

A context menu uses the same keys. No control of a bar opens it, so focus moves to its first entry when it opens, whether from the keyboard or with the pointer. When the context menu closes, focus returns to the element that held it before the context menu opened.

### Colorpicker

| Keys | Action |
| ---- | ------ |
| <kbd>Tab</kbd> | Enter the palette on the selected color, or on the first swatch when nothing is selected |
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> | Move between swatches in the order they are shown on the screen. Movement stops at the edges of the palette |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last swatch |
| <kbd>Enter</kbd> | Select the focused color |

Focus moves into the custom color view when it opens, and back to the palette when the view is closed.

In a Colorpicker palette, the focused swatch and the selected one are marked differently: a dashed outline for focus and a frame for the selected color. In this example, they sit next to each other:

![Colorpicker navigated with the keyboard](/img/colorpicker/colorpicker_keyboard_navigation.png)

:::info
For the full list of built-in hotkeys, refer to the **Keyboard navigation** articles of the following widgets:
- [Grid](grid/configuration.md#keyboard-navigation) and the [Grid accessibility](grid/accessibility.md#keyboard-navigation) guide
- [List](list/configuration.md#arrow-keys-navigation)
- [Tree](tree/configuration.md#key-navigation)
- [DataView](dataview/configuration.md#arrow-keys-navigation)
:::

## Localization of screen-reader strings

The accessible names and announcements that the widgets generate are stored in the locale of each widget as keys with the `aria_` prefix. For example:

- `aria_toolbar` in the `toolbar` locale
- `aria_dialog` in the `window` locale
- `aria_palette` and the color names in the `colorpicker` locale
- `aria_confirm` in the `message` locale

Translate them with the `dhx.i18n.setLocale()` method before the widget is initialized:

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

## High-contrast themes

For users who are visually impaired due to color deficiencies, choose colors carefully when you use them to convey information.

DHTMLX Suite includes two high-contrast themes:
- **Light High Contrast**
- **Dark High Contrast**

:::info
The contrast themes correspond to the AAA level.
:::

These themes also help users with poor eyesight.

<iframe src="https://snippet.dhtmlx.com/85fbitnu?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>