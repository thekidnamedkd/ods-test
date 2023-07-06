# Migrating from ui-components to ODS

## General

-   Components interfaces have been renamed from `ComponentProps` to `IComponentProps` to better distinguish them from regular imports

## Components

### Tag

-   The `label` prop has been replaced with `children` to make the component more flexible.
    From:
    ```test
    <Tag label="my-label" />
    ```
    To:
    ```
    <Tag>my-label</Tag>
    ```