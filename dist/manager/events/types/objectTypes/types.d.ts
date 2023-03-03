import { SubObjectTypeEnum } from '../subObjectType';
import { StatChangeDel } from '../../../containerClasses/statChangeEventArgs';
import { StatTypeEnum } from '../statType';
import { ObjectTemplate } from '../../../containerClasses/objectTemplate';
export type EventHandlerType = {
    subObjectType: SubObjectTypeEnum;
    payload: any;
};
export type LogicDelegate = (eventHandler: EventHandlerType) => void;
export declare namespace Manager.Events.Type {
    export abstract class ObjectTypeAbstract {
        private LogicInvoked;
        static getVueComponent: () => any;
        static SetComponent(getVueComponent: () => any): void;
        abstract GetVueComponent(): any;
        abstract Subscribe(subObjectType: SubObjectTypeEnum, statChangeDel: StatChangeDel): void;
        InvokeStatChange(_statType: StatTypeEnum, _amount: any): void;
        ChooseSubType(_object: ObjectTemplate, _data?: any): boolean;
        protected InvokeLogic(eventHandler: EventHandlerType): void;
        SubscribeLogic(logicDel: LogicDelegate): void;
        UnSubscribeLogic(logicDel: LogicDelegate): void;
        NullifyLogic(): void;
    }
    abstract class Default extends ObjectTypeAbstract {
        InvokeStatChange(_statType: StatTypeEnum, _amount: any): void;
        Subscribe(_subObjectType: SubObjectTypeEnum, _statChangeDel: StatChangeDel): void;
    }
    abstract class IChangeStat extends ObjectTypeAbstract {
        private StatChangeEvent;
        InvokeStatChange(_statType: StatTypeEnum, _amount: any): void;
        Subscribe(_subObjectType: SubObjectTypeEnum, _statChangeDel: StatChangeDel): void;
    }
    export class Field extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Button extends Default {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Row extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Text extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Output extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Alert extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class CheckBox extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class DataList extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class SelectList extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Radio extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class Column extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class ColumnButton extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class FieldButton extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class SelectButton extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class ListRow extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class ECabinetRow extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class ECabinetColumn extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class ModalForm extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class MapPicker extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class FieldCode extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export class DataSelect extends IChangeStat {
        static SetComponent(getVueComponent: () => any): void;
        GetVueComponent(): any;
    }
    export {};
}
