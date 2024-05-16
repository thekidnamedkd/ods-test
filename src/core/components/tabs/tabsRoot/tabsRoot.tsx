import { Tabs as RadixTabsRoot, type TabsProps as RadixTabsProps } from '@radix-ui/react-tabs';
import { createContext, useMemo } from 'react';

export interface ITabsRootProps extends Omit<RadixTabsProps, 'orientation'> {
    /**
     * The value of the tab that should be selected by default.
     */
    defaultValue?: string;
    /**
     * Whether the Tabs.List should use an underlined style. @default false
     */
    isUnderlined?: boolean;
}

export interface ITabsContext {
    /**
     * Whether the tabs share a common underline style implementation via the Tabs.List.
     */
    isUnderlined: boolean;
}

export const TabsContext = createContext<ITabsContext>({ isUnderlined: false });

export const TabsRoot: React.FC<ITabsRootProps> = (props) => {
    const { children, isUnderlined = false, ...otherProps } = props;
    const tabsContextValue = useMemo(() => ({ isUnderlined }), [isUnderlined]);

    return (
        <RadixTabsRoot orientation="horizontal" {...otherProps}>
            <TabsContext.Provider value={tabsContextValue}>{children}</TabsContext.Provider>
        </RadixTabsRoot>
    );
};