---
sidebar_label: abort()
title: JavaScript Uploader - abort Method 
description: You can explore the abort method of Uploader in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# abort()

@short: cancels the upload of a file(s)

@signature: {'abort(id?: string): void;'}

@params:
- `id: string` - optional, the ID of a file

@example:
vault.uploader.abort("file_id");

@descr:
If the parameter isn't passed, the method cancels upload of all files in the queue.
