import { ObjectTemplate } from '../../../containerClasses/objectTemplate';
import { StatChangeDel } from '../../../containerClasses/statChangeEventArgs';
import { LogicDelegate } from '../objectTypes/types';
export declare namespace Manager.Events.Type {
    abstract class SubObjectTypeAbstract {
        ChooseAction(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        abstract Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class ParentObject extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class Middle extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class Left extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class Right extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class Up extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
    class Down extends SubObjectTypeAbstract {
        Subscribe(_statChangeDel: StatChangeDel): StatChangeDel;
    }
}
