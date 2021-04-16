---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a sidebar

beforeCollapse: () => boolean | void;

@returns:
param   boolean         false - to prevent collapsing a sidebar, otherwise - true

@example:
sidebar.events.on("BeforeCollapse", function() {
    // your logic here
    return false;
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/qfddiu3i	Sidebar. Events

@changelog: added in v6.4

@related: sidebar/events.md