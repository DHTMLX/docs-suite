---
sidebar_label: getCell
title: getCell
---          

@short: returns the config object of a cell

@signature: getCell(id: string): object;

@params:
- id		string		the id of a cell

@returns:
param   object  the config object of a cell

@example:
tabbar.getCell("rome");

@template: api_method
@descr:
A returned object looks like this:

~~~js
{_uid: "u1581524705962", config: {…}, _parent: Tabbar, events: EventSystem, …}
~~~


@changelog:


