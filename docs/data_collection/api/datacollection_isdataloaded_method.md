---
sidebar_label: isDataLoaded()
title: isDataLoaded()
---          

@short: checks whether the specified data range is loaded from the server

@signature: {'isDataLoaded(from?: number, to?: number): boolean;'}

@params:
- `from: number` - optional, the index of the first element of the data range to be checked
- `to: number` - optional, the index of the last element of the data range to be checked

@returns:
`true`, if a range of data is loaded; otherwise, `false`.

@example:
data.isDataLoaded();

@descr:

{{pronote This functionality is available in the PRO edition only.}}

@changelog: added in v6.4

[comment]: # (@related: helpers/lazydataproxy.md)