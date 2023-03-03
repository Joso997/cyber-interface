import { Manager } from './actionTypes/types';
export var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum[ActionTypeEnum["None"] = 0] = "None";
    ActionTypeEnum[ActionTypeEnum["Click"] = 1] = "Click";
    ActionTypeEnum[ActionTypeEnum["Insert"] = 2] = "Insert";
    ActionTypeEnum[ActionTypeEnum["InsertUrl"] = 3] = "InsertUrl";
    ActionTypeEnum[ActionTypeEnum["InsertClick"] = 4] = "InsertClick";
    ActionTypeEnum[ActionTypeEnum["InsertNumber"] = 5] = "InsertNumber";
    ActionTypeEnum[ActionTypeEnum["Check"] = 6] = "Check";
    ActionTypeEnum[ActionTypeEnum["SelectIdFromName"] = 7] = "SelectIdFromName";
})(ActionTypeEnum || (ActionTypeEnum = {}));
export class ActionType {
    static ActionTypes = {
        [ActionTypeEnum.None]: new Manager.Events.Type.None(),
        [ActionTypeEnum.Click]: new Manager.Events.Type.Click(),
        [ActionTypeEnum.Insert]: new Manager.Events.Type.Insert(),
        [ActionTypeEnum.InsertUrl]: new Manager.Events.Type.InsertUrl(),
        [ActionTypeEnum.InsertClick]: new Manager.Events.Type.InsertClick(),
        [ActionTypeEnum.InsertNumber]: new Manager.Events.Type.InsertNumber(),
        [ActionTypeEnum.Check]: new Manager.Events.Type.Check(),
        [ActionTypeEnum.SelectIdFromName]: new Manager.Events.Type.SelectIdFromName()
    };
}
//# sourceMappingURL=actionType.js.map