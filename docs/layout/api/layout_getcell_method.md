---
sidebar_label: getCell
title: getCell
---          

@short: returns the config object of a cell

```todoapi ```

@params:
- id	string		the id of a cell


@returns:
- config		object		the config object of a cell


@example:
layout.getCell("toolbar");



@template: api_method
@descr:
A returned object looks like this:
~~~js
{gravity: false, id: "toolbar", header: "Header"}
~~~

@related: layout/work_with_layout.md#gettingtheobjectofacell

@changelog:
added in v6.3

