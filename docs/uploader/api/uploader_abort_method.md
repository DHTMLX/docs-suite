---
sidebar_label: abort()
title: abort()
---          

@short: cancels the upload of a file(s)

@signature: {'abort(id?: string): void;'}

@params:
`id: string` - optional, the ID of a file

@example:
vault.uploader.abort("file_id");

@descr:
If the parameter isn't passed, the method cancels upload of all files in the queue.
