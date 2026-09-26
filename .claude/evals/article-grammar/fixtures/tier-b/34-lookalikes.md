---
sidebar_label: Blend layers
title: JavaScript Panel - Blend Layers
description: You can explore layer blending in Panel in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Blend layers

The `layers` property provides access to the stack of bitmaps that the Panel renders. Each layer keeps a separate opacity value, and the Panel draws the stack from the bottom up.

## Merge two layers

Call `blend()` with the ids of two source layers and the id of a target layer:

~~~js
panel.blend("photo", "mask", "result");
~~~

The method blends two images using the alpha channel. The target layer receives the merged bitmap. The `status` property returns `pending` when the operation has just started; the previous bitmap stays on the screen until the merge ends.

## Track the result

The `afterBlend` event reports the layer for which the merge completed. A handler can perform an operation on the fresh bitmap, which the Panel keeps in memory until the next merge:

~~~js
panel.api.on("afterBlend", (ev) => {
    storage.save(ev.layer);
});
~~~

## Export the image

Complete the following steps to save the result as a PNG file:

1. Call `panel.check()` to perform validation.
2. Pass `"png"` and a scale factor to `panel.export()`.

The `autoSave` option provides the functionality to keep every export in the browser cache.

## Captions

When the end-user clicks a caption, the Panel selects the matching layer.

Captions also appear in end-user documentation that your team ships with the application. Precise wording keeps the end-user experience consistent between the Panel and the printed guide.
