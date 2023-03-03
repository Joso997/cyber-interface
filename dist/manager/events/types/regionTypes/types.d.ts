import { StatChangeDel } from '../../../containerClasses/statChangeEventArgs';
import { ObjectTypeEnum } from '../objectType';
import { SubObjectTypeEnum } from '../subObjectType';
import { Manager as ObjectTypeAbstract } from '../objectTypes/types';
export declare namespace Manager.Events.Type {
    abstract class RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
        Subscribe(_objectType: ObjectTypeEnum, _subObjectType: SubObjectTypeEnum, _statChangeDel: StatChangeDel): void;
    }
    class Form extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class Table extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class TableColumn extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class Show extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class TableRow extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class Footer extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class List extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class ListRow extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class ECabinet extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class ECabinetRow extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
    class MapPicker extends RegionAbstract {
        ObjectTypes: {
            [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract;
        };
    }
}
