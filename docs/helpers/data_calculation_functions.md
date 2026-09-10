Data calculation functions
===========================

The DHTMLX library provides a helper that allows specifying and redefining the functions of data calculation used by the library. You can calculate data with available functors or create a custom one using the **dhx.methods** handler.

The following functors are available:

- `avg` - calculates the average data value
- `count` - calculates the total number of items, doesn't take empty data values into account
- `max` - calculates the maximal value in the data
- `min` - calculates the minimal value in the data
- `sum` - calculates the sum of data values

Each functor takes a set of items and the name of the field to calculate. The `sum` and `count` functors always return a number, while `avg`, `min` and `max` return *null* when there is nothing to calculate:

~~~ts
const methods: {
    sum: (items: IDataItem[], field: string) => number;
    count: (items: IDataItem[], field: string) => number;
    avg: (items: IDataItem[], field: string) => number | null;
    min: (items: IDataItem[], field: string) => number | null;
    max: (items: IDataItem[], field: string) => number | null;
};
~~~

For example, this is how the `sum` functor is called:

~~~jsx
const rows = [{ value: 10 }, { value: 20 }, { value: 30 }];
const sum = dhx.methods.sum(rows, "value"); // 60
~~~

### Aggregating an empty set of items

Called with an empty set of items, or with a field that none of the items has, `sum` and `count` return *0*, while `avg`, `min` and `max` return *null*:

~~~jsx
dhx.methods.sum([], "value"); // 0
dhx.methods.count([], "value"); // 0
dhx.methods.avg([], "value"); // null
dhx.methods.min([], "value"); // null
dhx.methods.max([], "value"); // null
~~~

A *null* value is rendered as an empty cell, so an `avg`, `min` or `max` cell with nothing to calculate stays empty. This is what the footer of a grid that has no rows shows, as well as the aggregates of a group that is kept in a grid by the [`showEmptyGroups`](grid/api/grid_group_config.md) property.

### Defining a custom functor

You can specify a custom function for calculating data. For example, you can use the `methods` helper function for adding custom calculations to [get a summary of counted values](grid/configuration.md#getting-the-summary-object). 

In the example below a custom functor `doubleSum()` that calculates a doubled sum of values for a particular column is defined. The result of its calculations is used to render statistics in the footer of the "population" column.

~~~jsx {1-3,10-11}
dhx.methods.doubleSum = (rows, field) => {
    return rows.reduce((sum, row) => sum + row[field] * 2, 0);
};

const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "population",
            header: [{ text: "Population" }],
            footer: [{ text: (content) => content.doubleSum }],
            summary: "doubleSum"
        },
    ],
    data: dataset
});

const customSummary = grid.getSummary("population");
console.log(customSummary); // { doubleSum: 2000000 } - a doubled sum of counted values in the "population" column
~~~
