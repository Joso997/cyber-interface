import { Manager } from './subObjectTypes/types';
export var SubObjectTypeEnum;
(function (SubObjectTypeEnum) {
    SubObjectTypeEnum[SubObjectTypeEnum["ParentObject"] = 0] = "ParentObject";
    SubObjectTypeEnum[SubObjectTypeEnum["Middle"] = 1] = "Middle";
    SubObjectTypeEnum[SubObjectTypeEnum["Left"] = 2] = "Left";
    SubObjectTypeEnum[SubObjectTypeEnum["Right"] = 3] = "Right";
    SubObjectTypeEnum[SubObjectTypeEnum["Up"] = 4] = "Up";
    SubObjectTypeEnum[SubObjectTypeEnum["Down"] = 5] = "Down";
})(SubObjectTypeEnum || (SubObjectTypeEnum = {}));
export class SubObjectType {
    static SubObjectTypes = {
        [SubObjectTypeEnum.ParentObject]: new Manager.Events.Type.ParentObject(),
        [SubObjectTypeEnum.Middle]: new Manager.Events.Type.Middle(),
        [SubObjectTypeEnum.Left]: new Manager.Events.Type.Left(),
        [SubObjectTypeEnum.Right]: new Manager.Events.Type.Right(),
        [SubObjectTypeEnum.Up]: new Manager.Events.Type.Up(),
        [SubObjectTypeEnum.Down]: new Manager.Events.Type.Down()
    };
}
//# sourceMappingURL=subObjectType.js.map