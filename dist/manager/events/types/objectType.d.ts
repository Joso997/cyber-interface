export declare enum ObjectTypeEnum {
    Row = 0,
    Field = 1,
    Button = 2,
    Text = 3,
    Output = 4,
    Alert = 5,
    CheckBox = 6,
    DataList = 7,
    SelectList = 8,
    Radio = 9,
    Column = 10,
    ColumnButton = 11,
    FieldButton = 12,
    SelectButton = 13,
    ListRow = 14,
    ECabinetRow = 15,
    ECabinetColumn = 16,
    ModalForm = 17,
    MapPicker = 18,
    FieldCode = 19,
    DataSelect = 20
}
export declare class ObjectType {
    static ObjectTypes: {
        [index: number]: (getVueComponent: () => any) => void;
    };
}
