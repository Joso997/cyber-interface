import { StatTypeEnum } from '../events/types/statType';
export declare class StatChangeEventArgs {
    StatType: StatTypeEnum;
    Amount: any;
    constructor(_statType: StatTypeEnum, _amount: any);
}
export type StatChangeDel = (e: StatChangeEventArgs) => void;
