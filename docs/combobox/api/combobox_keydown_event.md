---
sidebar_label: keydown 
title: keydown 
---     

`to do check`

@short: fires on keyboard event in a Combobox

``` 
to do choose

fires on a keyboard event when a focus is in a Combobox 

occurs for Combo in focus when a keyboard key is pressed
```

@signature: 

@params: 
- event - keyboard event 
- id - id of the element of the Combobox `check` 

@example:
combobox.events.on("keydown", function(event, id) {
    console.log(event, id); - Сработает при нажатии любой из клавиш при наличии фокуса на элементе
});
@examplestop:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l) `to do - add keydown`

@changelog: added in v7.2
