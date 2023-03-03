import { SubObjectTypeEnum } from '../events/types/subObjectType';
import { RegionType } from '../events/types/region';
export class ObjectTemplate {
    Region;
    ObjectEnum;
    SubObjectEnum;
    ActionEnum;
    Stats = {};
    constructor(_regionEnum, _objectEnum, _subObjectEnum, _actionEnum, _stats) {
        this.Region = _regionEnum;
        this.ObjectEnum = _objectEnum;
        this.SubObjectEnum = _subObjectEnum;
        this.ActionEnum = _actionEnum;
        this.Stats = _stats;
        this.subscribe();
    }
    subscribe() {
        if (this.SubObjectEnum === SubObjectTypeEnum.ParentObject) {
            RegionType.RegionTypes[this.Region].Subscribe(this.ObjectEnum, this.SubObjectEnum, this.changeStat.bind(this));
        }
    }
    changeStat(e) {
        this.Stats[e.StatType].Data = e.Amount;
        this.Stats[e.StatType].CheckRequirements(this);
    }
}
//# sourceMappingURL=objectTemplate.js.map