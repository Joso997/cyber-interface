import { Manager } from './actionTypes/types';
export declare enum ActionTypeEnum {
    None = 0,
    Click = 1,
    Insert = 2,
    InsertUrl = 3,
    InsertClick = 4,
    InsertNumber = 5,
    Check = 6,
    SelectIdFromName = 7
}
export declare class ActionType {
    static ActionTypes: {
        [index: number]: Manager.Events.Type.MethodTypeAbstract;
    };
}
