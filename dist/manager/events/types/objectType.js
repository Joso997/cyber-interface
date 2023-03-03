import { Manager } from './objectTypes/types';
export var ObjectTypeEnum;
(function (ObjectTypeEnum) {
    ObjectTypeEnum[ObjectTypeEnum["Row"] = 0] = "Row";
    ObjectTypeEnum[ObjectTypeEnum["Field"] = 1] = "Field";
    ObjectTypeEnum[ObjectTypeEnum["Button"] = 2] = "Button";
    ObjectTypeEnum[ObjectTypeEnum["Text"] = 3] = "Text";
    ObjectTypeEnum[ObjectTypeEnum["Output"] = 4] = "Output";
    ObjectTypeEnum[ObjectTypeEnum["Alert"] = 5] = "Alert";
    ObjectTypeEnum[ObjectTypeEnum["CheckBox"] = 6] = "CheckBox";
    ObjectTypeEnum[ObjectTypeEnum["DataList"] = 7] = "DataList";
    ObjectTypeEnum[ObjectTypeEnum["SelectList"] = 8] = "SelectList";
    ObjectTypeEnum[ObjectTypeEnum["Radio"] = 9] = "Radio";
    ObjectTypeEnum[ObjectTypeEnum["Column"] = 10] = "Column";
    ObjectTypeEnum[ObjectTypeEnum["ColumnButton"] = 11] = "ColumnButton";
    ObjectTypeEnum[ObjectTypeEnum["FieldButton"] = 12] = "FieldButton";
    ObjectTypeEnum[ObjectTypeEnum["SelectButton"] = 13] = "SelectButton";
    ObjectTypeEnum[ObjectTypeEnum["ListRow"] = 14] = "ListRow";
    ObjectTypeEnum[ObjectTypeEnum["ECabinetRow"] = 15] = "ECabinetRow";
    ObjectTypeEnum[ObjectTypeEnum["ECabinetColumn"] = 16] = "ECabinetColumn";
    ObjectTypeEnum[ObjectTypeEnum["ModalForm"] = 17] = "ModalForm";
    ObjectTypeEnum[ObjectTypeEnum["MapPicker"] = 18] = "MapPicker";
    ObjectTypeEnum[ObjectTypeEnum["FieldCode"] = 19] = "FieldCode";
    ObjectTypeEnum[ObjectTypeEnum["DataSelect"] = 20] = "DataSelect";
})(ObjectTypeEnum || (ObjectTypeEnum = {}));
export class ObjectType {
    static ObjectTypes = {
        [ObjectTypeEnum.Field]: Manager.Events.Type.Field.SetComponent,
        [ObjectTypeEnum.Row]: Manager.Events.Type.Row.SetComponent,
        [ObjectTypeEnum.Button]: Manager.Events.Type.Button.SetComponent,
        [ObjectTypeEnum.Text]: Manager.Events.Type.Text.SetComponent,
        [ObjectTypeEnum.Output]: Manager.Events.Type.Output.SetComponent,
        [ObjectTypeEnum.Alert]: Manager.Events.Type.Alert.SetComponent,
        [ObjectTypeEnum.CheckBox]: Manager.Events.Type.CheckBox.SetComponent,
        [ObjectTypeEnum.DataList]: Manager.Events.Type.DataList.SetComponent,
        [ObjectTypeEnum.SelectList]: Manager.Events.Type.SelectList.SetComponent,
        [ObjectTypeEnum.Radio]: Manager.Events.Type.Radio.SetComponent,
        [ObjectTypeEnum.Column]: Manager.Events.Type.Column.SetComponent,
        [ObjectTypeEnum.ColumnButton]: Manager.Events.Type.ColumnButton.SetComponent,
        [ObjectTypeEnum.FieldButton]: Manager.Events.Type.FieldButton.SetComponent,
        [ObjectTypeEnum.SelectButton]: Manager.Events.Type.SelectButton.SetComponent,
        [ObjectTypeEnum.ListRow]: Manager.Events.Type.ListRow.SetComponent,
        [ObjectTypeEnum.ECabinetRow]: Manager.Events.Type.ECabinetRow.SetComponent,
        [ObjectTypeEnum.ECabinetColumn]: Manager.Events.Type.ECabinetColumn.SetComponent,
        [ObjectTypeEnum.ModalForm]: Manager.Events.Type.ModalForm.SetComponent,
        [ObjectTypeEnum.MapPicker]: Manager.Events.Type.MapPicker.SetComponent,
        [ObjectTypeEnum.FieldCode]: Manager.Events.Type.FieldCode.SetComponent,
        [ObjectTypeEnum.DataSelect]: Manager.Events.Type.DataSelect.SetComponent
    };
}
//# sourceMappingURL=objectType.js.map