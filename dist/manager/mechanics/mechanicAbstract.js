import { SimpleEventDispatcher } from 'ste-simple-events';
import { StatType, StatTypeEnum } from '../events/types';
export class MechanicAbstract {
    ObjectTemplates;
    static instance;
    mechanicInvoked = new SimpleEventDispatcher();
    constructor(_mechanicCallback = null) {
        this.SubscribeToVueComponent(_mechanicCallback);
        this.SubscribeConditions();
    }
    SubscribeToVueComponent(_mechanicCallback = null) {
        if (_mechanicCallback !== null) {
            this.mechanicInvoked.subscribe(_mechanicCallback);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getInstance(_mechanicCallback = null) {
        return null;
    }
    Append(_objectTemplates) {
        for (const element of _objectTemplates) {
            this.ObjectTemplates.push(element);
        }
        return this.ObjectTemplates;
    }
    Splice(index, _objectTemplates) {
        for (const element of _objectTemplates) {
            this.ObjectTemplates.splice(index, 0, element);
        }
        return this.ObjectTemplates;
    }
    removeElementFromArray(arr, belongsTo) {
        (() => {
            // Perform the array update
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i].Stats[StatTypeEnum.BelongsTo] !== undefined) {
                    if (arr[i].Stats[StatTypeEnum.BelongsTo].Data === belongsTo) {
                        arr.splice(i, 1);
                    }
                }
            }
        })();
    }
    reStructure(stats, append = null) {
        let temp = {};
        for (let i = 0; i < Object.keys(StatType.StatTypes).length; i++) {
            if (stats[i] !== undefined) {
                temp = Object.assign(temp, { [i]: StatType.StatTypes[i]().CreateStat().InitData(stats[i].Data != null ? stats[i].Data : '') });
            }
        }
        if (append !== null) {
            temp = Object.assign(temp, append);
        }
        return temp;
    }
    refreshPage() {
        if (this.mechanicInvoked !== null) {
            this.mechanicInvoked.dispatch(true);
        }
    }
}
//# sourceMappingURL=mechanicAbstract.js.map