---
sidebar_label: How to work with DataCollection
title: JavaScript Guides - How to work with DataCollection 
description: You can learn how to work with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# How to work with DataCollection

The DHTMLX library includes two invisible components that serve to store data:

- DataCollection - stores a non-hierarchical set of data (data for Chart, Combobox, DataView, Grid, List)
- TreeCollection - stores a hierarchical set of data (data for Menu, Ribbon, Sidebar, Tabbar, Tree, TreeGrid)

API methods and events of DataCollection and TreeCollection lets you work with data items, namely to load, process, and edit the items.

DataCollection and TreeCollection allow using the same data set in different components. For instance, you can prepare one data set and load it into DataView, Grid, and List.

We will consider how to work with DataCollection in this article.

Check all methods and events of [Data Collection API](data_collection/index.md).

## Common features of DataCollection

Here you will find some common features to understand how DataCollection works.

### DataCollection methods

The syntax of the DataCollection method:

```js
component.data.method();
```

where:

- **component** is the name of the applicable component (chart, combobox, dataview, grid, list)
- **method** is the method of DataCollection

The methods of DataCollection are useful for:

- Loading data
- Sorting and filtering data
- Sorting and filtering data
- Saving and restoring

#### Loading data

To load data into the component use the **load()** or **parse()** methods. The load() method is used to load data from an external file, the parse() method is used to load data from a local data source.

#### Sorting and filtering data

When working with data you may need to sort or filter it. Use the **sort()** method and the **filter()** one for this purpose.

#### Sorting and filtering data

You can add new items into the initialized component via the **add()** method, remove particular items by the **remove()** method or remove all items at once via the **removeAll()** method. The **update()** method allows you to update the necessary configuration options of the item by its id while the **changeId()** method lets you change the id of the element.

#### Saving and restoring

The **serialize()** method is used to serialize data into JSON, XML or CSV format. You can send the serialized data to a new component or server. The **copy()** method will help you to create a copy of an item at the defined position. Use the **save()** method to save changes made in the data to the server side.

Check all [methods](data_collection/index.md/#methods) of DataCollection.

### DataCollection events

The syntax of the DataCollection event:

```js
component.data.events.on("event", function(){});
```

where:

- **component** is the name of the applicable component (chart, combobox, dataview, grid, list)
- **event** is the event of DataCollection

Events of DataCollection are helpful when you need to create a system reaction to the changes made in data.

Check all [events](data_collection/index.md/#events) of DataCollection.

Check how to work with events in the [Events basic rules](guides/events_guide.md/) guide.

## The DataCollection usage sample

Let's create a sample of DataCollection usage step by step.

Please, use [the DHTMLX Snippet Tool](https://snippet.dhtmlx.com/lscu83ji) to create this sample. We will use both JavaScript code and HTML.

Let's create a List widget and define a template to render items in our List.

```html
<!-- component container -->
<div id="list" style="height: 700px; margin: 20px"></div>
```

```js
//creating template
function template(item) {
    let template = "<div class='list_item'>";
    template += "<div class='item_name'>" + item.title; +"</div>";
    template += "<div class='item_author'>";
    template += item.authors + ", ";
    template += item.publication_date.split("/")[2] + "</div>";
    template += "</div>";
    return template;
};

//creating list
const list = new dhx.List("list", {
    css: "dhx_widget--bordered",
    template: template
});
```

For more information about List initialization check [here](list/initialization.md/).

As you can see, we've initialized the list but it is still empty. Let's prepare a data set and apply the **parse()** method of DataCollection to load the data into the list.

First, we prepare a data set that will be loaded into List:

```html
<!-- dataset -->
<script>
	const data = [
    {
      "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
      "id": "book001",
      "authors": "J.K. Rowling/Mary GrandPré",
      "average_rating": 4.57,
      "publication_date": "9/16/2006",
      "in_store": true,
      "isbn13": 9780439785969,
      "language_code": "eng",
      "num_pages": 652,
      "ratings_count": 2095690,
      "text_reviews_count": 27591,
      "publisher": "Scholastic Inc."
    },
    {
      "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
      "id":"book002",
      "authors": "J.K. Rowling/Mary GrandPré",
      "average_rating": 4.56,
      "publication_date": "5/1/2004",
      "in_store": true,
      "isbn13": 9780439655484,
      "language_code": "eng",
      "num_pages": 435,
      "ratings_count": 2339585,
      "text_reviews_count": 36325,
      "publisher": "Scholastic Inc."
    },
    {
      "title": "The Complete Maus",
      "id": "book003",
      "authors": "Art Spiegelman",
      "average_rating": 4.55,
      "publication_date": "10/2/2003",
      "in_store": true,
      "isbn13": 9780141014081,
      "language_code": "eng",
      "num_pages": 296,
      "ratings_count": 111475,
      "text_reviews_count": 5966,
      "publisher": "Penguin Books"
    },
    {
      "title": "Fullmetal Alchemist  Vol. 1 (Fullmetal Alchemist  #1)",
      "id": "book004",
      "authors": "Hiromu Arakawa/Akira Watanabe",
      "average_rating": 4.5,
      "publication_date": "5/3/2005",
      "in_store": true,
      "isbn13": 9781591169208,
      "language_code": "eng",
      "num_pages": 192,
      "ratings_count": 111091,
      "text_reviews_count": 1427,
      "publisher": "VIZ Media LLC"
    },
    {
      "title": "Lover Awakened (Black Dagger Brotherhood  #3)",
      "id": "book005",
      "authors": "J.R. Ward",
      "average_rating": 4.45,
      "publication_date": "9/5/2006",
      "in_store": true,
      "isbn13": 9780451219367,
      "language_code": "eng",
      "num_pages": 448,
      "ratings_count": 144906,
      "text_reviews_count": 5728,
      "publisher": "Signet"
    },
    {
      "title": "The Two Towers (The Lord of the Rings  #2)",
      "id": "book006",
      "authors": "J.R.R. Tolkien/Peter S. Beagle",
      "average_rating": 4.44,
      "publication_date": "9/5/2003",
      "in_store": true,
      "isbn13": 9780618346264,
      "language_code": "eng",
      "num_pages": 322,
      "ratings_count": 593467,
      "text_reviews_count": 5798,
      "publisher": "Houghton Mifflin"
    },
    {
      "title": "The Green Mile",
      "id": "book007",
      "authors": "Stephen King",
      "average_rating": 4.44,
      "publication_date": "9/1/1996",
      "in_store": true,
      "isbn13": 9780451933027,
      "language_code": "eng",
      "num_pages": 592,
      "ratings_count": 207869,
      "text_reviews_count": 4570,
      "publisher": "Penguin Signet"
    },
    {
      "title": "The Monster at the End of this Book",
      "id": "book008",
      "authors": "Jon Stone/Michael J. Smollin",
      "average_rating": 4.44,
      "publication_date": "5/11/2004",
      "in_store": true,
      "isbn13": 9780375829130,
      "language_code": "eng",
      "num_pages": 32,
      "ratings_count": 114297,
      "text_reviews_count": 2565,
      "publisher": "Golden Books"
    },
    {
      "title": "A Breath of Snow and Ashes (Outlander  #6)",
      "id": "book009",
      "authors": "Diana Gabaldon",
      "average_rating": 4.44,
      "publication_date": "8/29/2006",
      "in_store": false,
      "isbn13": 9780385340397,
      "language_code": "eng",
      "num_pages": 980,
      "ratings_count": 105950,
      "text_reviews_count": 3992,
      "publisher": "Delta"
    },
  ]
</script>
```

Then, we use the **parse()** method to load data into the list:

```js
//the parse() method - loading data from a local data source
list.data.parse(data);
```

As a result, the list of books is rendered on the page according to the specified template. We took a small part of the list just for a convenience sample, in real-life practice, the list can be very huge.

Let's add a new book to the list. To do that, we need to use the **add()** method of DataCollection.

```js
//the add() method - adding new item
list.data.add(
    {
      "title": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
      "id": "book010",
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
1);
```

We have added the new item into the list but not into the data set.

Let's serialize the component data to save the current state of the list, create a new list and send the serialized data to this list. We will use  the **serialize()** and **parse()** methods for it.

Do not forget to add a separate container for the new component.

```html
<div id="list2" style="height: 700px; margin: 20px"></div>
```

```js
//the serialize() method - serializing data 
var state = list.data.serialize();

//creating list2
var list2 = new dhx.List("list2", {
    css: "dhx_widget--bordered",
    template: template
});

//the parse() method - parsing the state of list into list2
list2.data.parse(state);
```

Now we have two lists with the same data. Let's make some changes to **list**. Change the id of the first item with the help of the **changeId()** method and delete the item from the list with the help of the **remove()** method.

```js
//the changed() method - changing the id of an element
list.data.changeId("book001", "book001-newedition");

//the remove() method - deleting the element
list.data.remove("book001-newedition");
```

Pay attention, the data in list now are different from the data in list2 because we have sent data to list2 before removing the item of list.

Now we can create one more list, send new data to it, save data to the server with the save() method, or add more items, etc. Check all the possibilities to work with data with the help of DataCollection.

**Please, look at the example we have just created.**

<iframe src="https://snippet.dhtmlx.com/l24dxpxu?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
