---
sidebar_label: canCopy
title: canCopy
---          

@short: checks whether it is possible to copy a control into some other control

@signature: {'canCopy(id: Id, target: Id): boolean;'}

@params:
- id 			string	    the ID of the source control
- targetId	 	string	    the ID of the target control

@example:
component.data.canCopy(from.id, id);

@descr:
