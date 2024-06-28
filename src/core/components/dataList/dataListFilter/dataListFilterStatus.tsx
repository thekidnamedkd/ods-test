import classNames from 'classnames';
import { useOdsCoreContext } from '../../odsCoreProvider';
import { useDataListContext } from '../dataListContext';

export interface IDataListFilterStatusProps {}

export const DataListFilterStatus: React.FC<IDataListFilterStatusProps> = () => {
    const { state, itemsCount = 0, entityLabel } = useDataListContext();

    const { copy } = useOdsCoreContext();

    const isInitialLoading = state === 'initialLoading';
    const isLoading = state === 'loading';
    const isFiltered = state === 'filtered';

    const displayItemsCount = (state === 'idle' || state === 'fetchingNextPage') && itemsCount > 0;

    if (!displayItemsCount && !isInitialLoading && !isLoading && !isFiltered) {
        return null;
    }

    return (
        <p
            className={classNames(
                'px-3 text-sm font-normal leading-tight text-neutral-500 md:text-base',
                { 'text-primary-400': isLoading || isInitialLoading },
                { 'text-neutral-500': displayItemsCount },
            )}
        >
            {displayItemsCount && (
                <>
                    <span className="text-neutral-800">{itemsCount} </span>
                    <span>{entityLabel}</span>
                </>
            )}
            {isInitialLoading && copy.dataListFilterStatus.loadingEntity(entityLabel)}
            {isLoading && copy.dataListFilterStatus.filteringEntity(entityLabel)}
            {isFiltered && (
                <>
                    <span>{copy.dataListFilterStatus.found} </span>
                    <span className="text-primary-400">{itemsCount} </span>
                    <span>{entityLabel}</span>
                </>
            )}
        </p>
    );
};
