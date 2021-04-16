---
sidebar_label: addCell
title: addCell
---          

@short: adds a new cell into a layout

```todoapi ```

@params:
- config	object		the config object of a cell
- index		number		the position to add a cell into

@returns:
- param	any


@example:
layout.addCell({
    header:"The header of a new cell"
});


@template: api_method
@descr:
The full list of properties of a cell configuration object:

- **id** - (*string*) the id of a cell
- **html** - (*string*) sets HTML content for a cell
- **hidden** - (*boolean*) defines whether a cell is hidden
- **header** - (*string*) the text of the header of a cell
- **headerIcon** - (*string*) an icon used in the header of a cell
- **headerImage** - (*string*) an image used in the header of a cell
- **width** - (*string*) sets the width of a cell
- **height** - (*string*) sets the height of a cell
- **css** - (*string*) the name of a CSS class applied to a cell
- **collapsable**  - (*boolean*) defines whether a cell can be collapsed 
- **resizable** - (*boolean*) defines whether a cell can be resized
- **collapsed** - (*boolean*) defines whether a cell is collapsed 
- **align** - (*string*) sets the alignment of content inside a cell
- **gravity** - (*boolean*) arranges content evenly throughout the cell
- **padding** - (*string*) defines the distance between cells




@changelog:


