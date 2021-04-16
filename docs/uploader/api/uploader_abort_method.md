---
sidebar_label: abort
title: abort
---          

@short: cancels the upload of a file(s)

@params:

* id	 string 		optional, the ID of a file

@example:
vault.uploader.abort("file_id");

@template: api_method
@descr:
If the parameter isn't passed, the method cancels upload of all files in the queue.


