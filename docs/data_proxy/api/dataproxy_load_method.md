---
sidebar_label: load()
title: load()
---          

@short: loads data from an external URL

@signature: {'load?: () => Promise<any[]>;'}

@returns:
A promise of the data object.

@example:
proxy.load().then(function () {
   console.log("Loading is done!");
});
