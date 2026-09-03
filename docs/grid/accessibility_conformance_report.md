---
sidebar_label: Conformance report (VPAT)
title: JavaScript Grid - Accessibility Conformance Report
description: You can explore the accessibility conformance report (VPAT 2.5) for DHTMLX Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Accessibility Conformance Report

This report documents how DHTMLX Grid conforms to the major accessibility standards. It follows the **VPAT® 2.5 (International Edition)** structure, so you can map it directly against your own procurement or compliance checklist. For a task-oriented overview of the accessibility features and how to configure them, see the [Accessibility](grid/accessibility.md) guide.

**Name of Product/Version:** DHTMLX Grid v9.3.10

**Report Date:** September 2026

**Product Description:** DHTMLX Grid is an interactive JavaScript data grid component for building tabular interfaces in a web browser. It renders a column header, a virtualized data body and a footer, and supports sorting, filtering, inline editing, cell and range selection, frozen columns and rows, merged cells, and a hierarchical TreeGrid mode. It is embedded by a host web application.

**Contact Information:** [info@dhtmlx.com](mailto:info@dhtmlx.com)

## Notes

- This report evaluates DHTMLX Grid in its **recommended accessibility configuration**: keyboard navigation enabled (`keyNavigation: true`, the default), WAI-ARIA output active (always on - there is no flag to disable it), and an AA-conformant colour scheme selected through `data-dhx-theme="contrast-light"` or `data-dhx-theme="contrast-dark"`. Where a conformance level depends on this configuration, the Remarks say so. See the [Accessibility](grid/accessibility.md) guide for setup instructions.
- DHTMLX Grid is **web content** rendered by a host application. Page-level responsibilities - the page title, `<html lang>`, skip/bypass mechanisms, and site-wide navigation - belong to the host application and are reported as *Not Applicable* with an explanation.
- In the WCAG tables, only the **Web** response is populated. The *Electronic Docs*, *Software*, *Closed*, and *Authoring Tool* rows are *Not Applicable*: the product is not standalone (non-web) software, closed functionality, an authoring tool, or a piece of electronic documentation.

**Evaluation Methods Used:** Testing was performed using a combination of automated testing (axe-core in a headless browser), manual code review of the component source and stylesheets (the roles and ARIA attributes emitted per structural part, the keyboard shortcut registry and focus model, the editor and filter naming, and the theme colour tokens, with contrast ratios computed from those tokens for the default, dark, `contrast-light` and `contrast-dark` themes), assistive-technology testing (manual passes with **NVDA + Firefox** and **JAWS + Chrome** on Windows and **VoiceOver + Safari** on macOS), and browser overrides (colour-vision-deficiency emulation, 200% / 400% zoom, and WCAG text-spacing overrides).

## Applicable standards / guidelines

| Standard / Guideline | Included in report |
|---|---|
| Web Content Accessibility Guidelines 2.0 | Level A (No) · Level AA (No) · Level AAA (No) |
| Web Content Accessibility Guidelines 2.1 | Level A (No) · Level AA (No) · Level AAA (No) |
| Web Content Accessibility Guidelines 2.2 | Level A (**Yes**) · Level AA (**Yes**) · Level AAA (No) |
| Revised Section 508 standards (published Jan 18, 2017; corrected Jan 22, 2018) | (**Yes**) |
| EN 301 549 - V3.1.1 (2019-11) and V3.2.1 (2021-03) | (**Yes**) |

*WCAG 2.0 and 2.1 are not reported separately. Criteria that WCAG marks "2.1 and 2.2" are answered because
they are part of WCAG 2.2 and are referenced by EN 301 549.*

## Terms

- **Supports:** The functionality of the product has at least one method that meets the criterion without
  known defects, or meets with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.

## WCAG 2.x report

DHTMLX Grid is web content, so only the **Web** response is populated below. "Requires an AA-conformant
theme" and "requires `keyNavigation`, on by default" are configuration dependencies, not defects.

### Table 1: Success Criteria, Level A

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| **1.1.1** Non-text Content | Supports | Icons are rendered as font glyphs, not images of text. Interactive icons carry accessible names: the tree expand/collapse toggle is `role="button"` with `aria-label`, and the sort affordance is `role="button"` with `aria-label="Sort by <column>"`. Decorative parts - resizer grips, sort icons, sort-order counters, drag ghosts, drop indicators and the selection overlay - are removed from the accessibility tree with `aria-hidden="true"` or `role="presentation"`. |
| **1.2.1** Audio-only and Video-only (Prerecorded) | Not Applicable | The product contains no audio or video content. |
| **1.2.2** Captions (Prerecorded) | Not Applicable | No prerecorded multimedia. |
| **1.2.3** Audio Description or Media Alternative (Prerecorded) | Not Applicable | No prerecorded multimedia. |
| **1.3.1** Info and Relationships | Supports | The grid uses `grid` → `rowgroup` → `row` → `gridcell`/`columnheader` roles, and `treegrid` in tree mode. Position is exposed with `aria-rowindex`/`aria-colindex` against `aria-rowcount`/`aria-colcount`; editability with `aria-readonly`; multi-selection capability with `aria-multiselectable`; sort state with `aria-sort`; hierarchy with `aria-level` and `aria-expanded`. ARIA output is always on. |
| **1.3.2** Meaningful Sequence | Supports | DOM and reading order follow the visual order. Rows and columns are virtualized, but `aria-rowindex`/`aria-colindex` carry the absolute position in the dataset rather than the position in the DOM, so sequence is preserved for assistive technology. |
| **1.3.3** Sensory Characteristics | Supports | No instruction or label relies solely on shape, size, or spatial location; interactive elements carry text or an ARIA name. |
| **1.4.1** Use of Color | Supports | Colour is never the only signal. Sort direction is carried by an arrow glyph and by `aria-sort`; selection by `aria-selected` alongside the highlight; editability by `aria-readonly`; hierarchy by `aria-level` and `aria-expanded`. |
| **1.4.2** Audio Control | Not Applicable | The product produces no auto-playing audio. |
| **2.1.1** Keyboard | Supports | Keyboard navigation is on by default (`keyNavigation: true`). The body, header and footer are each fully operable: arrow keys, `Home`/`End`, `Ctrl`+`Home`/`End` and `Page Up`/`Page Down` move the selection; `Shift` combinations extend it; `Enter`/`F2`/`Space` open editors and toggle boolean cells; `Escape` cancels; `Enter`/`Space` sort from the header; `Ctrl`+`Enter` and the arrow keys expand and collapse tree branches; `Ctrl`+`Z`/`Ctrl`+`Shift`+`Z` undo and redo. Column sizing and column and row order are also reachable without a pointer (see 2.5.7). |
| **2.1.2** No Keyboard Trap | Supports | Focus is never trapped. Each zone is entered and left with `Tab`/`Shift`+`Tab` through hidden focus sentinels, and `Escape` deactivates a header or footer filter control and returns focus to its cell. |
| **2.1.4** Character Key Shortcuts | Supports | No shortcut uses a bare letter, digit or punctuation key. The only letter-based bindings are `Ctrl`+`Z` and `Ctrl`+`Shift`+`Z`; everything else uses arrows, `Enter`, `Escape`, `Tab`, `F2`, `Space`, `Delete`, `Home`/`End` or `Page Up`/`Page Down`. Handlers are additionally gated on the grid holding focus. |
| **2.2.1** Timing Adjustable | Supports | The product sets no time limits: no session timeout, no auto-refresh and no polling. The header filter's 500 ms debounce delays applying a filter, not the user's input. |
| **2.2.2** Pause, Stop, Hide | Supports | There is no auto-updating, moving, blinking or scrolling content. The only motion is hover and state transitions of 0.5 s or less. |
| **2.3.1** Three Flashes or Below Threshold | Supports | The product contains no flashing content. |
| **2.4.1** Bypass Blocks | Not Applicable | Applies at page level; bypass mechanisms belong to the host application. |
| **2.4.2** Page Titled | Not Applicable | Page titles are the host application's responsibility. |
| **2.4.3** Focus Order | Supports | A roving-tabindex model gives each zone a single tab stop, and the tab order follows the visual order: header → body → footer → next element on the page. When focus reaches an off-screen (virtualized) row or column, the grid scrolls it into view. |
| **2.4.4** Link Purpose (In Context) | Not Applicable | The widget's own interface contains no links. Links placed in cells through `htmlEnable` or a column template are rendered as authored, so their text and purpose belong to the host application. |
| **2.5.1** Pointer Gestures | Supports | No operation requires a multipoint or path-based gesture; touch handling reads a single touch point, and every drag operation has a non-drag alternative (see 2.5.7). |
| **2.5.2** Pointer Cancellation | Supports | The primary actions complete on the up-event: sorting, cell and row selection, and tree expand/collapse are all bound to `click`, not to `mousedown`. |
| **2.5.3** Label in Name | Supports | The sort `role="button"` wraps the visible header text and its accessible name is `Sort by <that text>`, so the visible label is contained in the name. Filter inputs and the tree toggle present no visible text label that could mismatch their accessible name. |
| **2.5.4** Motion Actuation | Not Applicable | No functionality is operated by device motion or user motion. |
| **3.1.1** Language of Page | Not Applicable | The document language (`<html lang>`) is set by the host application. |
| **3.2.1** On Focus | Supports | Receiving focus never changes context. The date editor's calendar popup opens without moving focus away from the input. |
| **3.2.2** On Input | Supports | Changing a value does not change context. Editing a cell or typing in a filter updates the grid in place, which is the documented purpose of those controls. |
| **3.2.6** Consistent Help (2.2 only) | Not Applicable | The widget provides no help mechanism; this is a page-level concern. |
| **3.3.1** Error Identification | Supports | Input errors are identified to the user: the numeric editor validates against the column's `min`/`max` bounds and marks an out-of-range value, and input that does not fit the column type is rejected at entry. Application-level validation and its error text are owned by the host application, through the cancelable `beforeEditEnd` event. |
| **3.3.2** Labels or Instructions | Supports | In-place editors and header/footer filters take an accessible name from the column header text, so the user hears which column is being edited or filtered - for example `Filter <column>` and `Filter by date: <column>`. |
| **3.3.7** Redundant Entry (2.2 only) | Not Applicable | The product contains no multi-step process that re-requests previously entered information. |
| **4.1.1** Parsing | Supports | Markup is generated through a virtual-DOM layer and element ids are machine-generated, so tags are well formed and attributes are not duplicated. |
| **4.1.2** Name, Role, Value | Supports | Every structural and interactive part exposes a role, its states and an accessible name: the container (`grid`/`treegrid`, `aria-readonly`, `aria-multiselectable`), rows and cells (`row`, `gridcell`, `aria-selected`, `aria-readonly`), headers (`columnheader`, `aria-sort`), the tree toggle and sort affordance (`button` with `aria-label`), and editors and filters (named from the column header). |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| **1.2.4** Captions (Live) | Not Applicable | No live multimedia. |
| **1.2.5** Audio Description (Prerecorded) | Not Applicable | No prerecorded video. |
| **1.3.4** Orientation | Supports | Content is not restricted to a single display orientation. |
| **1.3.5** Identify Input Purpose | Not Applicable | The product's editors collect application data defined by the integrator's columns, not the user's own personal information covered by the WCAG input-purpose list. |
| **1.4.3** Contrast (Minimum) | Supports | The `contrast-light` and `contrast-dark` themes meet AA out of the box: body text is about 8.5:1 and 13.2:1 against the cell background, secondary and additional text about 7.3:1 and 10.2:1, and both themes raise the base font size to 16px. The built-in dark theme also meets AA for body text. Meeting the criterion requires selecting one of these themes - one supported method meets it. |
| **1.4.4** Resize Text | Supports | Text can be resized to 200% without loss of content or functionality; the header, body and footer scale with it and the grid does not break. Typography and row geometry are token-driven (`--dhx-font-size-normal`, `--dhx-line-height-normal`, `--dhx-step-size`, `rowHeight`), and the contrast themes ship a 16px base. |
| **1.4.5** Images of Text | Supports | All text is rendered as real text. Icons are font glyphs; the product uses no raster images. |
| **1.4.10** Reflow | Supports | Content scrolls and remains operable at 400% zoom. As a data grid, two-dimensional layout is intrinsic to the content, for which the criterion permits two-dimensional scrolling. |
| **1.4.11** Non-text Contrast | Supports | The active cell is marked by a 2px solid border in the theme primary colour - about 3.7:1 against the default light background and about 6.3:1 on `contrast-dark`, both above the 3:1 requirement. Header and footer cells add a 2px focus ring in the same colour. The contrast themes also raise the cell border contrast. |
| **1.4.12** Text Spacing | Supports | Applying WCAG text-spacing overrides does not clip or overlap text in grid cells, column headers or footer summaries. |
| **1.4.13** Content on Hover or Focus | Supports | Overflow tooltips are hoverable, persistent, and dismissible with `Esc` without moving the pointer. Their content repeats the cell's own text, so no information is available on hover alone, and they can be turned off entirely with `tooltip: false`. |
| **2.4.5** Multiple Ways | Not Applicable | Applies to locating pages within a set of web pages; out of scope for a single embedded component (host-application concern). |
| **2.4.6** Headings and Labels | Supports | Column headers carry descriptive accessible names, and every filter and in-place editor exposes an accessible name derived from its column. |
| **2.4.7** Focus Visible | Supports | The active cell carries a persistent 2px solid border drawn in the theme primary colour. Because keyboard navigation moves the selection, the keyboard focus location is visible at all times, including during arrow-key navigation. Header and footer cells show a 2px focus ring, and filter inputs and cell editors an inset ring. |
| **2.4.11** Focus Not Obscured (Minimum) (2.2 only) | Supports | A focused cell is never left behind a frozen zone: when the grid scrolls a cell into view it compensates for the left, right, top and bottom splits and for the header height. |
| **2.5.7** Dragging Movements (2.2 only) | Supports | Every drag operation has a non-drag alternative: range selection through `Shift`+arrows, `Ctrl`+`Shift`+arrows, `Shift`+`Home`/`End` and `Shift`+`Page Up`/`Page Down`; column sizing through `adjust` / `adjustColumnWidth`; and column and row order through the corresponding API. |
| **2.5.8** Target Size (Minimum) (2.2 only) | Supports | Interactive targets meet 24x24 CSS px: the sort target is the whole header cell (40px tall by the column width), the boolean cell's hit area is the whole cell, and the column resizer grip and the range fill handle carry an enlarged hit area (visual size unchanged). |
| **3.1.2** Language of Parts | Not Applicable | The widget does not mix languages within its content; language is host-owned. |
| **3.2.3** Consistent Navigation | Not Applicable | Applies across a set of web pages; host-application concern. |
| **3.2.4** Consistent Identification | Supports | Components with the same function are identified consistently across the header, body and footer zones - the same roles, the same naming pattern and the same key bindings. |
| **3.3.3** Error Suggestion | Supports | Where a correction is known, it is applied: numeric input outside the column's `min`/`max` bounds is corrected to the nearest valid value, so a valid value is always produced. Suggestion text for application-level validation is provided by the host application, through `beforeEditEnd`. |
| **3.3.4** Error Prevention (Legal, Financial, Data) | Supports | Actions that change or remove data are reversible and guarded: the History module provides undo and redo for edits, range clearing and clipboard operations, and every such action can additionally be gated by the host through the cancelable `before*` events - among them `beforeEditEnd`, `beforeKeyDown`, `beforeSort`, `beforeResizeStart`, `beforeRowDrag`/`beforeRowDrop` and `beforeColumnDrag`/`beforeColumnDrop`. |
| **3.3.8** Accessible Authentication (Minimum) (2.2 only) | Not Applicable | The product performs no authentication. |
| **4.1.3** Status Messages | Supports | A visually-hidden `aria-live` region announces dynamic changes without moving focus - sort direction changes, filter results and completed loads. State that persists is additionally exposed on the elements themselves: sort direction through `aria-sort`, selection through `aria-selected`, dataset size through `aria-rowcount`/`aria-colcount`, and branch state through `aria-expanded`. |

## Revised Section 508 report

WCAG-mapped provisions are answered in the WCAG 2.x report above and referenced here. Chapter 4 (Hardware)
is Not Applicable - DHTMLX Grid is a software component with no hardware or physical controls.

### Chapter 3: Functional Performance Criteria

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 302.1 Without Vision | Supports | Operable with a screen reader through the `grid`/`treegrid` model, the position and state attributes, the accessible names on editors and filters, and the keyboard model. See WCAG 1.3.1, 2.1.1, 4.1.2. |
| 302.2 With Limited Vision | Supports | Zoom, text resize and reflow are supported, and AA contrast is met by the `contrast-light` / `contrast-dark` themes, which also raise the base font size to 16px. See WCAG 1.4.3, 1.4.4, 1.4.10, 1.4.11. |
| 302.3 Without Perception of Color | Supports | No information is conveyed by colour alone: sort direction, selection, editability and hierarchy each carry a glyph or an ARIA state alongside the colour. See WCAG 1.4.1. |
| 302.4 Without Hearing | Supports | No information is conveyed by sound. |
| 302.5 With Limited Hearing | Supports | No information is conveyed by sound. |
| 302.6 Without Speech | Supports | No speech input is required to operate the product. |
| 302.7 With Limited Manipulation | Supports | Fully keyboard-operable; no path-based gesture is required, and pointer targets meet 24x24 px. See WCAG 2.1.1, 2.5.1, 2.5.7, 2.5.8. |
| 302.8 With Limited Reach and Strength | Supports | Operable by keyboard; no physical reach, force or timing requirements. |
| 302.9 With Limited Language, Cognitive, and Learning Abilities | Supports | Labels are consistent across zones, key bindings follow the conventions of a spreadsheet grid, and destructive actions are preventable through the cancelable `before*` events and reversible through the History module. See WCAG 3.2.4, 3.3.4. |

### Chapter 5: Software

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 501.1 Scope - Incorporation of WCAG 2.0 AA | See WCAG 2.x section | See the WCAG 2.x report above. |
| 502 Interoperability with Assistive Technology | Not Applicable | Applies to non-web (platform) software. DHTMLX Grid is web content that exposes standard DOM and ARIA to the browser accessibility tree; interoperability is covered by the WCAG results (Clause 9 / 501.1). |
| 503 Applications | Not Applicable | Applies to non-web platform software; the product is web content. |
| 504.2 Content Creation or Editing | Not Applicable | DHTMLX Grid is not an authoring tool for web content - it edits tabular application data, not accessibility-relevant web content. |

### Chapter 6: Support Documentation and Services

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 602.2 Accessibility and Compatibility Features | Supports | The documentation describes the product's accessibility features: the [Accessibility](grid/accessibility.md) guide covers the WAI-ARIA model, the keyboard zones and shortcuts, the selection modes, the high-contrast themes and the focus model, together with the related configuration. |
| 602.3 Electronic Support Documentation | Supports (see WCAG 2.x section) | The documentation site is delivered as web content and is maintained to meet WCAG 2.2 AA. |
| 602.4 Alternate Formats for Non-Electronic Support Documentation | Not Applicable | Documentation is delivered electronically only; there are no non-electronic (print) support documents. |
| 603.2 Information on Accessibility and Compatibility Features | Supports | The product's accessibility features are documented publicly in the [Accessibility](grid/accessibility.md) guide and can be provided by the support channel on request. |
| 603.3 Accommodation of Communication Needs | Supports | Support is provided over a text-based email channel; users interact through their own assistive technology. |

## EN 301 549 report

Clause 9 (Web) maps directly to the WCAG 2.x report above and is the substantive assessment for this web
product. Telephony, video, and hardware clauses (Clauses 6, 7, 8, 13) are Not Applicable.

### Clause 4: Functional Performance Statements

These mirror the Section 508 Chapter 3 results (same conclusions).

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 4.2.1 Usage without vision | Supports | See 508 302.1 (screen-reader operable through the grid/treegrid model, position and state attributes, and the keyboard model). |
| 4.2.2 Usage with limited vision | Supports | See 508 302.2 (AA contrast and a 16px base through the contrast themes; zoom and reflow supported). |
| 4.2.3 Usage without perception of colour | Supports | See 508 302.3 (glyphs and ARIA state accompany every colour cue). |
| 4.2.4 Usage without hearing | Supports | No information conveyed by sound. |
| 4.2.5 Usage with limited hearing | Supports | No information conveyed by sound. |
| 4.2.6 Usage with no or limited vocal capability | Supports | No speech input required. |
| 4.2.7 Usage with limited manipulation or strength | Supports | See 508 302.7 (keyboard-operable, no gestures, primary targets 24x24 px or larger). |
| 4.2.8 Usage with limited reach | Supports | No physical reach requirements (software component). |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | No flashing content (see WCAG 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | See 508 302.9 (consistent labels and key bindings; preventable and reversible actions). |
| 4.2.11 Privacy | Supports | Accessibility features use the same interface as everyone else; there is no separate, less-private mode. |

### Clause 5: Generic Requirements

**Mostly Not Applicable.** Clause 5 addresses closed functionality and hardware-style requirements. DHTMLX
Grid is open web software that works with the platform and browser assistive technology, so the
closed-functionality sub-clauses, biometrics (5.3), operable parts (5.5), and locking/toggle-control status
(5.6) are Not Applicable. Where a generic requirement is met through normal assistive-technology support, it
is covered by Clause 9 (Web) and the WCAG results.

### Clause 9: Web

**See the WCAG 2.x section.** Clauses 9.1.1.1-9.4.1.3 map to the WCAG 2.2 Level A/AA results in Tables 1
and 2 above.

### Clause 11: Software

**Not Applicable (assessed under Clause 9).** DHTMLX Grid is web content evaluated under Clause 9 (Web);
it is not non-web software. The WCAG-mapped software provisions (11.1.1.1-11.4.1.3) are covered by the WCAG
2.x results. 11.8.2 (Accessible content creation) is Not Applicable - the product is not an authoring tool.

### Clause 12: Documentation and Support Services

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 12.1.1 Accessibility and compatibility features | Supports | The [Accessibility](grid/accessibility.md) guide documents the product's accessibility features - the WAI-ARIA model, the keyboard zones and shortcuts, the selection modes, the high-contrast themes and the focus model. |
| 12.1.2 Accessible documentation | Supports (see WCAG 2.x section) | The documentation site is delivered as web content and is maintained to meet WCAG 2.2 AA (see 508 602.3). |
| 12.2.2 Information on accessibility and compatibility features | Supports | Accessibility features are documented publicly and can be surfaced by support on request. |
| 12.2.3 Effective communication | Supports | Support is provided over a text-based email channel; users interact through their own assistive technology. |
| 12.2.4 Accessible documentation | Supports (see WCAG 2.x section) | Same basis as 12.1.2 - the documentation site is maintained to meet WCAG 2.2 AA. |

## Legal disclaimer

This report is provided for informational purposes only and describes the accessibility of the named
product version as of the report date. It is provided "as is", without warranty of any kind, and does not
constitute a contractual commitment or guarantee. Accessibility support may change in subsequent releases,
and results apply to the evaluated configuration. "VPAT" and "Voluntary Product Accessibility Template" are
registered service marks of the Information Technology Industry Council (ITI).
