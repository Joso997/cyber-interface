import { ObjectTemplate } from '../containerClasses/objectTemplate';
import { EventHandlerType } from '../events/types/objectTypes/types';
import { SimpleEventDispatcher } from 'ste-simple-events';
export type MechanicDelegate = (eventHandler: boolean) => void;
export declare abstract class MechanicAbstract {
    ObjectTemplates: ObjectTemplate[];
    protected static instance: MechanicAbstract | null;
    protected mechanicInvoked: SimpleEventDispatcher<boolean>;
    protected abstract SubscribeConditions(): void;
    abstract UnsubscribeConditions(): void;
    protected abstract Button(eventHandler: EventHandlerType): void;
    constructor(_mechanicCallback?: MechanicDelegate | null);
    SubscribeToVueComponent(_mechanicCallback?: MechanicDelegate | null): void;
    static getInstance(_mechanicCallback?: MechanicDelegate | null): MechanicAbstract | null;
    abstract InitGet(_id: string, _api: string): Promise<ObjectTemplate[]>;
    abstract InitSet(_objectTemplates: ObjectTemplate[]): ObjectTemplate[];
    Append(_objectTemplates: ObjectTemplate[]): ObjectTemplate[];
    Splice(index: number, _objectTemplates: ObjectTemplate[]): ObjectTemplate[];
    protected removeElementFromArray(arr: Array<any>, belongsTo: string): void;
    protected reStructure(stats: any, append?: any): any;
    protected refreshPage(): void;
}
