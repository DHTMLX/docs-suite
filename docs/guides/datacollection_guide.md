---
sidebar_label: How to work with DataCollection
title: JavaScript Guides - How to work with DataCollection 
description: You can learn how to work with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# How to work with DataCollection

The DHTMLX library includes two invisible components (in other words, helpers) that serve to store data:

- [DataCollection](data_collection.md/) - stores a non-hierarchical set of data (data for Chart, Combobox, DataView, Grid, List)
- [TreeCollection](tree_collection.md/) - stores a hierarchical set of data (data for Menu, Ribbon, Sidebar, Toolbar, Tree, Grid in the TreeGrid mode)

API methods and events of DataCollection and TreeCollection let you work with data items, namely to load, process, and edit the items.

The helpers allow using the same data set in different components. For instance, you can prepare one data set and load it into DataView, Grid, and List with the help of the [`load()`](data_collection/api/datacollection_load_method.md) method of DataCollection.

:::info
Please note that if you specify the `id` fields in the data collection, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

In this article we will consider how to work with DataCollection.

Check all the methods and events of the [Data Collection API](data_collection.md/).

## DataCollection methods

The syntax of a DataCollection method is the following:

~~~jsx
component.data.method();
~~~

where:

- **component** is the name of the applicable component (Chart, Combobox, Dataview, Grid, List)
- **method** is the method of DataCollection

Check all the [methods](data_collection.md/#methods) of DataCollection.

## DataCollection events

The syntax of a DataCollection event is the following:

~~~jsx
component.data.events.on("event", function(){});
~~~

where:

- **component** is the name of the applicable component (Chart, Combobox, Dataview, Grid, List)
- **event** is the event of DataCollection

Events of DataCollection are helpful when you need to configure a system response to the changes made in data.

Check all the [events](data_collection.md/#events) of DataCollection.

Check how to work with events in the [Events basic rules](guides/events_guide.md/) guide.

## Guides

The following articles will help you to find out how to work with DataCollection.

- [Loading data](guides/datacollection/loading_data.md)
- [Working with data items](guides/datacollection/work_with_data_items.md)
- [Sorting and filtering data](guides/datacollection/sorting_filtering_data.md)
- [Grouping data](guides/datacollection/grouping_data.md)

## DataCollection usage sample

Let's create a sample of DataCollection usage step by step.

Please, use [the DHTMLX Snippet Tool](https://snippet.dhtmlx.com/lscu83ji) to create this sample. We will use both JavaScript code and HTML.

Let's add a List widget on the page and define a template to render items in our List.

~~~html
<!-- component container -->
<div id="list" style="height: 700px; margin: 20px"></div>
~~~

~~~jsx
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
const list = new dhx.List("list_container", {
    css: "dhx_widget--bordered",
    template: template
});
~~~

For more information about List initialization check [here](list/initialization.md/).

As you can see, we've initialized the list but it is still empty. To fill in our list with data we need to take the following steps:

- At first, we prepare a data set:

:::info
Please note that if you specify the `id` fields in the data set, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

~~~html
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
            "id": "book002",
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
~~~

- Then, to load the prepared data into the list we apply the [`parse()`](data_collection/api/datacollection_parse_method.md) method of DataCollection:

~~~jsx
list.data.parse(data);
~~~

As a result, the list of books is rendered on the page according to the specified template. We took a small part of the list just for a convenience sample, in real-life practice, the list can be very huge.

Now, let's add a new book to the list. To do that, we need to use the [`add()`](data_collection/api/datacollection_add_method.md) method of DataCollection:

~~~jsx
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
    }, 1);
~~~

Note, that we have added the new item into the list but not into the data set.


To save the current state of the list we will serialize the component data with the help of the [`serialize()`](data_collection/api/datacollection_serialize_method.md) method of DataCollection. 

~~~jsx
const state = list.data.serialize();
~~~

After that, we can parse the serialized data to the new list. We will use the [`parse()`](data_collection/api/datacollection_parse_method.md) method for it.

Do not forget to add a separate container for the new component.

~~~html
<div id="list2" style="height: 700px; margin: 20px"></div>
~~~

~~~jsx
//creating list2
list2 = new dhx.List("list2", {
    css: "dhx_widget--bordered",
    template: template
});

//parsing the state of list into list2
list2.data.parse(state);
~~~

Now we have two lists with the same data. Let's make some changes to **list**. For example, we can change the id of the first item using the [`changeId()`](data_collection/api/datacollection_changeid_method.md) method and, then, delete the item from the list via the [`remove()`](data_collection/api/datacollection_remove_method.md) method, as in:

~~~jsx
//changing the id of the element
list.data.changeId("book001", "book001-newedition");

//deleting the element
list.data.remove("book001-newedition");
~~~

Pay attention, the data in **list** now are different from the data in **list2** because we have sent data to **list2** before removing the item of list.

Now we can create one more list, send new data to it, save data to the server with the [`save()`](data_collection/api/datacollection_save_method.md) method, or add more items, etc. [Check all the possibilities to work with data with the help of DataCollection](#guides).

**Please, look at the example we have just created.**

<iframe src="https://snippet.dhtmlx.com/g91wovk5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
