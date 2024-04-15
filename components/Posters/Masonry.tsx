import React, { useState, useEffect } from 'react';

type MasonryProps = {
    breakpointCols?: any;
    className?: any;
    columnClassName?: any;
    children?: React.ReactNode;
    columnAttrs?: any;
    column?: any;
};

type LastRecalculateAnimationFrame = {
    current: number | null;
};

const defaultProps = {
    breakpointCols: undefined,
    className: undefined,
    columnClassName: undefined,
    children: undefined,
    columnAttrs: undefined,
    column: undefined,
};

const DEFAULT_COLUMNS = 2;

const Masonry = (props: MasonryProps) => {
    const {
        breakpointCols,
        className: initialClassName,
        columnClassName,
        children,
        columnAttrs,
        column,
        ...rest
    } = props;

    const [columnCount, setColumnCount] = useState(() => {
        if (breakpointCols && breakpointCols.default) {
            return breakpointCols.default;
        } else {
            return parseInt(breakpointCols) || DEFAULT_COLUMNS;
        }
    });

    useEffect(() => {
        const reCalculateColumnCount = () => {
            const windowWidth = window.innerWidth || Infinity;
            let breakpointColsObject = breakpointCols;

            if (typeof breakpointColsObject !== 'object') {
                breakpointColsObject = {
                    default: parseInt(breakpointColsObject) || DEFAULT_COLUMNS,
                };
            }

            let matchedBreakpoint = Infinity;
            let columns = breakpointColsObject.default || DEFAULT_COLUMNS;

            for (let breakpoint in breakpointColsObject) {
                const optBreakpoint = parseInt(breakpoint);
                const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;

                if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
                    matchedBreakpoint = optBreakpoint;
                    columns = breakpointColsObject[breakpoint];
                }
            }

            columns = Math.max(1, parseInt(columns) || 1);

            if (columnCount !== columns) {
                setColumnCount(columns);
            }
        };

        const reCalculateColumnCountDebounce = () => {
            if (!window || !window.requestAnimationFrame) {
                reCalculateColumnCount();
                return;
            }

            if (window.cancelAnimationFrame) {
                window.cancelAnimationFrame(lastRecalculateAnimationFrame.current!);
            }

            lastRecalculateAnimationFrame.current = window.requestAnimationFrame(reCalculateColumnCount);
        };

        const lastRecalculateAnimationFrame: LastRecalculateAnimationFrame = { current: null };

        reCalculateColumnCount();

        window.addEventListener('resize', reCalculateColumnCountDebounce);

        return () => {
            window.removeEventListener('resize', reCalculateColumnCountDebounce);
        };
    }, [breakpointCols, columnCount]);

    const itemsInColumns = () => {
        const currentColumnCount = columnCount;
        const itemsInColumns = new Array(currentColumnCount);

        const items = React.Children.toArray(children);

        for (let i = 0; i < items.length; i++) {
            const columnIndex = i % currentColumnCount;

            if (!itemsInColumns[columnIndex]) {
                itemsInColumns[columnIndex] = [];
            }

            itemsInColumns[columnIndex].push(items[i]);
        }

        return itemsInColumns;
    };

    const renderColumns = () => {
        const childrenInColumns = itemsInColumns();
        const columnWidth = `${100 / childrenInColumns.length}%`;
        let className = columnClassName;

        if (className && typeof className !== 'string') {
            console.error('[Masonry]', 'The property "columnClassName" requires a string');

            if (typeof className === 'undefined') {
                className = 'my-masonry-grid_column';
            }
        }

        const columnAttributes = {
            ...column,
            ...columnAttrs,
            style: {
                width: columnWidth,
            },
            className,
        };

        return childrenInColumns.map((items, i) => (
            <div {...columnAttributes} key={i}>
                {items}
            </div>
        ));
    };

    let classNameOutput = initialClassName;

    if (typeof initialClassName !== 'string') {
        console.error('[Masonry]', 'The property "className" requires a string');

        if (typeof initialClassName === 'undefined') {
            classNameOutput = 'my-masonry-grid';
        }
    }

    return (
        <div {...rest} className={classNameOutput}>
            {renderColumns()}
        </div>
    );
};

Masonry.defaultProps = defaultProps;

export default Masonry;
