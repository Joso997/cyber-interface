import { Manager } from './regionTypes/types';
export declare enum RegionEnum {
    Form = 0,
    Table = 1,
    TableColumn = 2,
    TableRow = 3,
    Show = 4,
    Footer = 5,
    List = 6,
    ListRow = 7,
    ECabinet = 8,
    ECabinetRow = 9,
    ModalForm = 10,
    MapPicker = 11
}
export declare class RegionType {
    static RegionTypes: {
        [index: number]: Manager.Events.Type.RegionAbstract;
    };
}
