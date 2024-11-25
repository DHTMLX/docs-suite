Data calculation functions
===========================

The DHTMLX library provides a helper that allows specifying and redefining the functions of data calculation used by the library. You can calculate data with available functors or create a custom one using the **dhx.methods** handler.

The following functors are available:

- `avg` - calculates the average data value
- `count` - calculates the total number of items, doesn't take empty data values into account
- `max` - calculates the maximal value in the data
- `min` - calculates the minimal value in the data
- `sum` - calculates the sum of data values

For example, this is how the `sum` functor is called:

~~~jsx
const rows = [{ value: 10 }, { value: 20 }, { value: 30 }];
const sum = dhx.methods.sum(rows, "value"); // 60
~~~

### Defining a custom functor

You can specify a custom function for calculating data. For example, you can use the `methods` helper function for adding custom calculations to [get a summary of counted values](grid/configuration.md#getting-the-summary-object). Thus, you can provide a functor that will calculate a doubled sum of values for a particular column:

~~~jsx {1-3,11,17-18}
dhx.methods.doubleSum = (rows, field) => {
    return rows.reduce((sum, row) => sum + row[field] * 2, 0);
};

const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150,
            id: "population",
            header: [{ text: "Population" }],
            summary: "doubleSum"
        },
    ],
    data: dataset
});

const customSummary = grid.getSummary("population");
console.log(customSummary); // { doubleSum: 2000000 } - a doubled sum of counted values in the "population" column
~~~
