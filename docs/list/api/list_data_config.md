---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the list

@signature: data: array;

@example: 
const data = [
    {
      "title": "The Hobbit and The Lord of the Rings",
      "authors": "J.R.R. Tolkien",
      "average_rating": 4.59,
      "publication_date": "9/25/2012",
      "in_store": true,
      "isbn13": 9780345538376,
      "language_code": "eng",
      "num_pages": 1728,
      "ratings_count": 101233,
      "text_reviews_count": 1550,
      "publisher": "Ballantine Books"
    },
    // more options
]

var list = new dhx.List("list", {
	css: "dhx_widget--bordered",
	template: template,
	itemHeight: 72,
	data: data
});


@template:	api_config
@descr: 

@relatedsample:
https://snippet.dhtmlx.com/20i6vbtj	List. Init With External Data
