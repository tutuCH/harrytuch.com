export interface NavBarTabs {
    title: string,
}
export interface PersonalInfo {
    name: string,
    description: string,
    age: number,
}

export interface TabsDef {
    alignment?: "vertical" | "horizontal",
    items: Array<TabItemsDef>,
}

export interface TabItemsDef {
    tabsHeader: string,
    title: string,
    period: string,
    content: Array<string>,
}