/** @flow */
import PropTypes from 'prop-types';
import * as React from 'react';
import defaultHeaderRenderer from './defaultHeaderRenderer';
import defaultFooterRenderer from './defaultFooterRenderer';
import defaultCellRenderer from './defaultCellRenderer';
import defaultCellDataGetter from './defaultCellDataGetter';
import SortDirection from './SortDirection';

/**
 * Describes the header and cell contents of a table column.
 */
export default class Column extends React.Component {
  static propTypes = {
    /** Optional aria-label value to set on the column header */
    'aria-label': PropTypes.string,

    /**
     * Callback responsible for returning a cell's data, given its :dataKey
     * ({ columnData: any, dataKey: string, rowData: any }): any
     */
    cellDataGetter: PropTypes.func,

    /**
     * Callback responsible for rendering a cell's contents.
     * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
     */
    cellRenderer: PropTypes.func,

    /** Optional CSS class to apply to cell */
    className: PropTypes.string,

    /** Optional additional data passed to this column's :cellDataGetter */
    columnData: PropTypes.object,

    /** Uniquely identifies the row-data attribute corresponding to this cell */
    dataKey: PropTypes.any.isRequired,

    /** Optional direction to be used when clicked the first time */
    defaultSortDirection: PropTypes.oneOf([
      SortDirection.ASC,
      SortDirection.DESC,
    ]),

    /** If sort is enabled for the table at large, disable it for this column */
    disableSort: PropTypes.bool,

    /** Flex grow style; defaults to 0 */
    flexGrow: PropTypes.number,

    /** Flex shrink style; defaults to 1 */
    flexShrink: PropTypes.number,

    /** Optional CSS class to apply to this column's header */
    headerClassName: PropTypes.string,

    /**
     * Optional callback responsible for rendering a column header contents.
     * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
     */
    headerRenderer: PropTypes.func.isRequired,

    /** Optional inline style to apply to this column's header */
    headerStyle: PropTypes.object,

    /** Optional CSS class to apply to this column's footer */
    footerClassName: PropTypes.string,

    /**
     * Optional callback responsible for rendering a column footer contents.
     */
    footerRenderer: PropTypes.func.isRequired,

    /** Optional inline style to apply to this column's footer */
    footerStyle: PropTypes.object,

    /** Optional id to set on the column header */
    id: PropTypes.string,

    /** Header label for this column */
    label: PropTypes.node,

    /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
    maxWidth: PropTypes.number,

    /** Minimum width of column. */
    minWidth: PropTypes.number,

    /** Optional inline style to apply to cell */
    style: PropTypes.object,

    /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    cellDataGetter: defaultCellDataGetter,
    cellRenderer: defaultCellRenderer,
    defaultSortDirection: SortDirection.ASC,
    flexGrow: 0,
    flexShrink: 1,
    headerRenderer: defaultHeaderRenderer,
    footerRenderer: defaultFooterRenderer,
    style: {},
  };
}
