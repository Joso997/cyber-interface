import { Manager } from './subObjectTypes/types';
export declare enum SubObjectTypeEnum {
    ParentObject = 0,
    Middle = 1,
    Left = 2,
    Right = 3,
    Up = 4,
    Down = 5
}
export declare class SubObjectType {
    static SubObjectTypes: {
        [index: number]: Manager.Events.Type.SubObjectTypeAbstract;
    };
}
