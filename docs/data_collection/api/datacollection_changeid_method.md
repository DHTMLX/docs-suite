---
sidebar_label: changeId
title: changeId
---          

@short: changes the id of an element of a data collection

@params:
- id			string			the old id of an item
- newId         string          optional, the new id; auto-generated if not set
- silent        boolean         true - to prevent changing the id, otherwise false

@example:
data.changeId("1", "22");

@template:	api_method
@descr:

@changelog: added in v6.4
