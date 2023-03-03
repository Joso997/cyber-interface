import { Manager } from './statTypes/types';
export declare enum StatTypeEnum {
    Label = 0,
    Value = 1,
    Design = 2,
    Tag = 3,
    Id = 4,
    ElementType = 5,
    Placeholder = 6,
    ItemList = 7,
    Tooltip = 8,
    Required = 9,
    Disabled = 10,
    AutoComplete = 11,
    BelongsTo = 12,
    ErrorMessage = 13,
    IsValid = 14
}
export declare class StatType {
    static StatTypes: {
        [index: number]: Manager.Events.Type.CreateStatDel;
    };
}
