Data calculation functions
===========================

The DHTMLX library provides a helper that allows specifying and redefining the functions of data calculation used by the library. You can calculate data with available functors or create a custom one using the **dhx.methods** handler.

The following functors are available:

- `avg` - calculates the average data value
- `count` - calculates the common count, doesn't take empty data into account
- `max` - calculates the maximal value in the data
- `min` - calculates the minimal value in the data
- `sum` - calculates the sum of data

For example, this is how the sum functor is called:

~~~jsx
const rows = [{ value: 10 }, { value: 20 }, { value: 30 }];
const sum = dhx.methods.sum(rows, "value"); // 60
~~~

### Defining a custom functor

You can specify a custom function for calculating data. For example, the `methods` helper function allows adding custom calculations for [getting a summary of counted values](grid/configuration.md#getting-summary-list-of-counted-values). Thus, you can provide a functor that will calculate a double sum of values for a particular column:

~~~jsx
dhx.methods.doubleSum = (rows, field) => {
    return rows.reduce((sum, row) => sum + row[field] * 2, 0);
};

const grid = new dhx.Grid("grid", {
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
console.log(customSummary); // { doubleSum: 2000000 } - double sum of counted values on the "population" column
~~~
