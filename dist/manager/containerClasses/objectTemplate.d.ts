import { ActionTypeEnum } from '../events/types/actionType';
import { ObjectTypeEnum } from '../events/types/objectType';
import { SubObjectTypeEnum } from '../events/types/subObjectType';
import { Manager } from '../events/types/statTypes/types';
import { RegionEnum } from '../events/types/region';
import { StatChangeEventArgs } from './statChangeEventArgs';
export declare class ObjectTemplate {
    Region: RegionEnum;
    ObjectEnum: ObjectTypeEnum;
    SubObjectEnum: SubObjectTypeEnum;
    ActionEnum: ActionTypeEnum;
    Stats: {
        [index: number]: Manager.Events.Type.StatAbstract;
    };
    constructor(_regionEnum: RegionEnum, _objectEnum: ObjectTypeEnum, _subObjectEnum: SubObjectTypeEnum, _actionEnum: ActionTypeEnum, _stats: {
        [index: number]: Manager.Events.Type.StatAbstract;
    });
    subscribe(): void;
    changeStat(e: StatChangeEventArgs): void;
}
