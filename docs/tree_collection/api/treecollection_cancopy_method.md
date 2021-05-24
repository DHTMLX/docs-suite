---
sidebar_label: canCopy()
title: canCopy()
---          

@short: checks whether it is possible to copy a control into some other control

@signature: {'canCopy(id: Id, target: Id): boolean;'}

@params:
- `id: string` - the ID of the source control
- `target: string` - the ID of the target control

@returns:
`true` if the control can be copied into other control; otherwise, `false`.

@example:
component.data.canCopy(from.id, id);

@descr:
