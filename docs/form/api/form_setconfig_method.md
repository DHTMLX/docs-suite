---
sidebar_label: setConfig
title: setConfig
---          

@short: sets a new configuration for a form
TODO: change api (удалить эту страницу)
@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-layout/sources/types.d.ts)


@params:
- config	object		a configuration object of a form



@example:
form.setConfig({
	cellCss: "dhx_widget--bordered",
	gravity: false,
	rows: [
		{
			type: "input",
			label: "Name",
			icon: "dxi-magnify",
			placeholder: "John Doe"
		}
	]
});


@template: api_method
@descr:

@related:
form/work_with_form.md#updatingformconfiguration



@changelog:
added in v6.0.3

@todo:
check
