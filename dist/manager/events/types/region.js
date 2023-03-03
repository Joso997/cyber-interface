import { Manager } from './regionTypes/types';
export var RegionEnum;
(function (RegionEnum) {
    RegionEnum[RegionEnum["Form"] = 0] = "Form";
    RegionEnum[RegionEnum["Table"] = 1] = "Table";
    RegionEnum[RegionEnum["TableColumn"] = 2] = "TableColumn";
    RegionEnum[RegionEnum["TableRow"] = 3] = "TableRow";
    RegionEnum[RegionEnum["Show"] = 4] = "Show";
    RegionEnum[RegionEnum["Footer"] = 5] = "Footer";
    RegionEnum[RegionEnum["List"] = 6] = "List";
    RegionEnum[RegionEnum["ListRow"] = 7] = "ListRow";
    RegionEnum[RegionEnum["ECabinet"] = 8] = "ECabinet";
    RegionEnum[RegionEnum["ECabinetRow"] = 9] = "ECabinetRow";
    RegionEnum[RegionEnum["ModalForm"] = 10] = "ModalForm";
    RegionEnum[RegionEnum["MapPicker"] = 11] = "MapPicker";
})(RegionEnum || (RegionEnum = {}));
export class RegionType {
    static RegionTypes = {
        [RegionEnum.Form]: new Manager.Events.Type.Form(),
        [RegionEnum.Table]: new Manager.Events.Type.Table(),
        [RegionEnum.TableColumn]: new Manager.Events.Type.TableColumn(),
        [RegionEnum.Show]: new Manager.Events.Type.Show(),
        [RegionEnum.Footer]: new Manager.Events.Type.Footer(),
        [RegionEnum.TableRow]: new Manager.Events.Type.TableRow(),
        [RegionEnum.List]: new Manager.Events.Type.List(),
        [RegionEnum.ListRow]: new Manager.Events.Type.ListRow(),
        [RegionEnum.ECabinet]: new Manager.Events.Type.ECabinet(),
        [RegionEnum.ECabinetRow]: new Manager.Events.Type.ECabinetRow(),
        [RegionEnum.ModalForm]: new Manager.Events.Type.Form(),
        [RegionEnum.MapPicker]: new Manager.Events.Type.MapPicker()
    };
}
//# sourceMappingURL=region.js.map