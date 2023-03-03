import { Manager } from './statTypes/types';
export var StatTypeEnum;
(function (StatTypeEnum) {
    StatTypeEnum[StatTypeEnum["Label"] = 0] = "Label";
    StatTypeEnum[StatTypeEnum["Value"] = 1] = "Value";
    StatTypeEnum[StatTypeEnum["Design"] = 2] = "Design";
    StatTypeEnum[StatTypeEnum["Tag"] = 3] = "Tag";
    StatTypeEnum[StatTypeEnum["Id"] = 4] = "Id";
    StatTypeEnum[StatTypeEnum["ElementType"] = 5] = "ElementType";
    StatTypeEnum[StatTypeEnum["Placeholder"] = 6] = "Placeholder";
    StatTypeEnum[StatTypeEnum["ItemList"] = 7] = "ItemList";
    StatTypeEnum[StatTypeEnum["Tooltip"] = 8] = "Tooltip";
    StatTypeEnum[StatTypeEnum["Required"] = 9] = "Required";
    StatTypeEnum[StatTypeEnum["Disabled"] = 10] = "Disabled";
    StatTypeEnum[StatTypeEnum["AutoComplete"] = 11] = "AutoComplete";
    StatTypeEnum[StatTypeEnum["BelongsTo"] = 12] = "BelongsTo";
    StatTypeEnum[StatTypeEnum["ErrorMessage"] = 13] = "ErrorMessage";
    StatTypeEnum[StatTypeEnum["IsValid"] = 14] = "IsValid";
})(StatTypeEnum || (StatTypeEnum = {}));
export class StatType {
    static StatTypes = {
        [StatTypeEnum.Tag]: new Manager.Events.Type.Tag().CreateStat,
        [StatTypeEnum.Value]: new Manager.Events.Type.Value().CreateStat,
        [StatTypeEnum.Design]: new Manager.Events.Type.Design().CreateStat,
        [StatTypeEnum.Label]: new Manager.Events.Type.Label().CreateStat,
        [StatTypeEnum.Id]: new Manager.Events.Type.Id().CreateStat,
        [StatTypeEnum.ElementType]: new Manager.Events.Type.ElementType().CreateStat,
        [StatTypeEnum.Placeholder]: new Manager.Events.Type.Placeholder().CreateStat,
        [StatTypeEnum.ItemList]: new Manager.Events.Type.ItemList().CreateStat,
        [StatTypeEnum.Tooltip]: new Manager.Events.Type.Tooltip().CreateStat,
        [StatTypeEnum.Required]: new Manager.Events.Type.Required().CreateStat,
        [StatTypeEnum.Disabled]: new Manager.Events.Type.Disabled().CreateStat,
        [StatTypeEnum.AutoComplete]: new Manager.Events.Type.AutoComplete().CreateStat,
        [StatTypeEnum.BelongsTo]: new Manager.Events.Type.BelongsTo().CreateStat,
        [StatTypeEnum.ErrorMessage]: new Manager.Events.Type.ErrorMessage().CreateStat,
        [StatTypeEnum.IsValid]: new Manager.Events.Type.IsValid().CreateStat
    };
}
//# sourceMappingURL=statType.js.map