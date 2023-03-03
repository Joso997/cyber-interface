import { ObjectTemplate } from '../../../containerClasses/objectTemplate';
import { LogicDelegate } from '../objectTypes/types';
export declare namespace Manager.Events.Type {
    abstract class MethodTypeAbstract {
        abstract Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
    }
    class None extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(): void;
    }
    class Insert extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
    class InsertUrl extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
    class Click extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(): void;
    }
    class InsertClick extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
    class InsertNumber extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
    class Check extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
    class SelectIdFromName extends MethodTypeAbstract {
        Act(_object: ObjectTemplate, _data: any, _invokeLogic: LogicDelegate): boolean;
        Enact(_data: any): Promise<any>;
    }
}
