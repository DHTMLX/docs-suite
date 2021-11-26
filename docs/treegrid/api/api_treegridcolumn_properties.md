---
sidebar_label: TreeGrid сolumn properties
title: JavaScript TreeGrid - Column Properties 
description: You can explore the Column properties of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# TreeGrid column properties

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string|number</i>) the id of a column</td>
		</tr>
        <tr>
			<td><b>width</b></td>
			<td>(<i>number</i>) the width of a column<br>The property is ignored if the <a href="../../../treegrid/configuration/#autosize-for-columns">adjust</a> property is used.</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(<i>array</i>) an array of objects with header rows configuration. Each header object may include:
                <ul>
                    <li><a href="../../customization#styling-header-cells"><b>text</b></a> - (<i>string|number</i>) the text of a header</li>
                    <li><a href="../../configuration#alignment"><b>align</b></a> - (<i>string</i>) aligns data in the header: "left"|"center"|"right"</li>
                    <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
                    <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan <br/></li>
                    <li><b>css</b> - (<i>any</i>) styling to be applied to a header</li>
                    <li><a href="../../configuration#headerfooter-content"><b>content</b></a> - (<i>string</i>) additional content of a header, which can be:
                    	<ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
                    	<ol>- one of the methods that process values in a column and show result in the header:<br/> "avg" | "sum" | "max" | "min" | "count"</ol>
                    	<ol> - some other string</ol>
                    </li>
                    <li><b>filterConfig</b> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
                    	<ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
						<ol>- <b>multiselection</b> - (<i>boolean</i>) enables selection of multiple options</ol>
                    	<ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
                    	<ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
                    	<ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
                    	<ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
                    </li>
					<li><a href="../../configuration#customizing-headerfooter-filters"><b>customFilter</b></a> - (<i>function</i>) optional, a custom function for extended filtering. It takes two parameters:
                		<ol> - <b>item</b> - (<i>any</i>) a data item the value of which should be compared</ol>
                		<ol> - <b>input</b> - (<i>string</i>) the value of the option selected in the filter</ol>
                	<br>and returns <i>true/false</i> to specify whether the data item should be displayed in the treegrid after filtering
            		</li>
					<li><b>headerSort</b> - (<i>boolean</i>) enables/disables sorting by clicking the header</li>
					<li><b>sortAs</b> - (<i>function</i>) a function that defines the type to sort data as (e.g. string, number, date, etc.)</li>
                </ul>
				<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/t8iust6j" target="_blank">TreeGrid. Header spans</a>
            </td>
		</tr>
        <tr>
			<td><a href="../../configuration#html-content-of-treegrid-columns"><b>htmlEnable</b></a></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/iubccmoi" target="_blank">TreeGrid. Html In Data</a>
			</td>
		</tr>
        <tr>
			<td><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration. Each footer object may include:
                <ul>
                    <li><a href="../../customization#styling-footer-cells"><b>text</b></a> - (<i>string|number</i>) the text of a footer</li>
                    <li><b>css</b> - (<i>any</i>) styling to be applied to a footer</li>
                    <li><a href="../../configuration#headerfooter-content"><b>content</b></a> - (<i>string</i>) additional content of a footer, which can be:
                    	<ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
                    	<ol>- one of the methods that process values in a column and show result in the footer:<br/> "avg" | "sum" | "max" | "min" | "count"</ol>
                    	<ol> - some other string</ol>
                    </li>
					<li><a href="../../configuration#customizing-headerfooter-filters"><b>customFilter</b></a> - (<i>function</i>) optional, a custom function for extended filtering. It takes two parameters:
                		<ol> - <b>item</b> - (<i>any</i>) a data item the value of which should be compared</ol>
                		<ol> - <b>input</b> - (<i>string</i>) the value of the option selected in the filter</ol>
                	<br>and returns <i>true/false</i> to specify whether the data item should be displayed in the grid after filtering
            	</li>
                </ul>
            </td>
		</tr>
        <tr>
			<td><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/pyrloz7y" target="_blank">TreeGrid. Max Width</a>
			</td>
		</tr>
        <tr>
			<td><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column. The minimal width of a column is 20px. <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/cpgjyoxn" target="_blank">TreeGrid. Min Width</a>
			</td>
		</tr>
        <tr>
			<td><a href="../../customization#adding-custom-marks-to-cells"><b>mark</b></a></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
                <ul>
                    <li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li>
                    <li>as a <i>function</i> takes several parameters:
                        <ol>- <b>cell</b> - (<i>string</i>) the value of a cell</ol>
                        <ol>- <b>columnCells</b> - (<i>array</i>) an array of all cell values in the specified column</ol>
                        <ol>- <b>row</b> - (<i>object</i>) an object with all cells in a row</ol>
                        <ol>- <b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</ol>
                    </li>    
                </ul>
            </td>
		</tr>
        <tr>
			<td><a href="../../configuration#resizing"><b>resizable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column can be resized</td>
		</tr>
           <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a column. The type sets the alignment of the content and defines the type of the editor used in the column:
			<ul><li><i>"string" (by default)</i> - aligns data to the left side and applies the <i>"input"/"textarea"</i> editor</li>
			<li><i>"number"</i> - aligns data to the right side and applies the <i>"input"</i> editor</li>
			<li><i>"boolean"</i> - aligns data to the left side and applies the <i>"checkbox"</i> editor</li>
			<li><i>"percent"</i> - aligns data to the left side and applies the <i>"input"</i> editor</li>
			<li><i>"date"</i> - aligns data to the left side and applies the <i>"datePicker"</i> editor</li>
			</ul></td>
		</tr>
		<tr>
			<td><a href="../../configuration#formatting-columns"><b>format</b></a></td>
			<td>(<i>string</i>) defines the format for the content of the column's cells</td>
		</tr>
        <tr>
			<td><a href="../../configuration#setting-type-of-column-editor"><b>editorType</b></a></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"combobox"|"textarea"|"multiselect"</td>
		</tr>
		<tr>
			<td><b>editorConfig</b></td>
			<td>(<i>object</i>) an object with configuration settings of the column's editor. It can include the following property:
            <ul><li><a href="../../configuration/#editable-combobox"><b>newOptions</b></a> - (<i>boolean</i>) allows end users to add new values into the list of combobox options from UI (<i>editorType: "combobox"</i>). The new options will also appear in the drop-down list of the header/footer filters (<i>content: "selectFilter" | "comboFilter"</i>).</li></ul>
            </td>
		</tr>
        <tr>
			<td><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox"|"multiselect")</td>
		</tr>
        <tr>
			<td><a href="../../customization#adding-template-to-cells"><b>template</b></a></td>
			<td>(<i>function</i>) returns a template with content for a cell(s). Takes 3 parameters:
                <ul>
                    <li><b>cellValue</b> - (<i>any</i>) the value of a cell</li>
                    <li><b>row</b> - (<i>object</i>) an object with all cells in a row</li>
                    <li><b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</li>
                </ul>
            </td>
		</tr>
        <tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a column is <a href="../../configuration#hidden-columns">hidden</a></td>
		</tr>
        <tr>
			<td><a href="../../configuration#drag-n-drop-inside-the-grid"><b>draggable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td><a href="../../configuration#editing-treegrid-and-separate-columns"><b>editable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td><a href="../../configuration#sorting-columns"><b>sortable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td><a href="../../configuration#autosize-for-columns"><b>adjust</b></a></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content<br><br><li>The property has a priority over the <a href="../../configuration/#autowidth-for-columns">autoWidth</a> property if it is specified either for the treegrid or for the column, and over the <b>width</b> property of the column.</li><li>The width the columns will be adjusted to also depends on the values of the <b>minWidth/maxWidth</b> properties if they are set for a column.</li></td>
		</tr>
        <tr>
			<td><a href="../../configuration#autowidth-for-columns"><b>autoWidth</b></a></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of TreeGrid<br><br>Also note:<br><li>If <b>autoWidth</b> is set for a column, the width of the column is calculated on the base of the sizes of the container of the treegrid and the values of the <b>minWidth/maxWidth</b> properties if they are set for the column.</li><li>The property is ignored if the <a href="../../configuration/#autosize-for-columns">adjust</a> property is used.</li><li>If the <b>width</b> property is specified in the configuration object of a column, the <b>autoWidth</b> property won't work for this column.</li></td>
		</tr>
        <tr>
			<td><a href="../../configuration#alignment"><b>align</b></a></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td><a href="../../configuration#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
        <tr>
			<td><a href="../../customization#adding-template-to-tooltip"><b>tooltipTemplate</b></a></td>
			<td>(<i>function</i>) returns a template for the content of the tooltip. Takes 3 parameters:
            <ul>
                <li><b>value</b> - (<i>any</i>) the value of a cell</li>
                <li><b>row</b> - (<i>object</i>) an object with all cells in a row</li>
                <li><b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</li>
            </ul></td>
		</tr>
    </tbody>
</table>