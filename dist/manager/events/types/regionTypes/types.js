import { ObjectTypeEnum } from '../objectType';
import { Manager as ObjectTypeAbstract } from '../objectTypes/types';
export var Manager;
(function (Manager) {
    var Events;
    (function (Events) {
        var Type;
        (function (Type) {
            class RegionAbstract {
                ObjectTypes = {};
                Subscribe(_objectType, _subObjectType, _statChangeDel) {
                    this.ObjectTypes[_objectType].Subscribe(_subObjectType, _statChangeDel);
                }
            }
            Type.RegionAbstract = RegionAbstract;
            class Form extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Field]: new ObjectTypeAbstract.Events.Type.Field(),
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                    [ObjectTypeEnum.Text]: new ObjectTypeAbstract.Events.Type.Text(),
                    [ObjectTypeEnum.Alert]: new ObjectTypeAbstract.Events.Type.Alert(),
                    [ObjectTypeEnum.CheckBox]: new ObjectTypeAbstract.Events.Type.CheckBox(),
                    [ObjectTypeEnum.DataList]: new ObjectTypeAbstract.Events.Type.DataList(),
                    [ObjectTypeEnum.SelectList]: new ObjectTypeAbstract.Events.Type.SelectList(),
                    [ObjectTypeEnum.Radio]: new ObjectTypeAbstract.Events.Type.Radio(),
                    [ObjectTypeEnum.FieldButton]: new ObjectTypeAbstract.Events.Type.FieldButton(),
                    [ObjectTypeEnum.SelectButton]: new ObjectTypeAbstract.Events.Type.SelectButton(),
                    [ObjectTypeEnum.ECabinetRow]: new ObjectTypeAbstract.Events.Type.ECabinetRow(),
                    [ObjectTypeEnum.MapPicker]: new ObjectTypeAbstract.Events.Type.MapPicker(),
                    [ObjectTypeEnum.FieldCode]: new ObjectTypeAbstract.Events.Type.FieldCode(),
                    [ObjectTypeEnum.DataSelect]: new ObjectTypeAbstract.Events.Type.DataSelect()
                };
            }
            Type.Form = Form;
            class Table extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Row]: new ObjectTypeAbstract.Events.Type.Row(),
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
                };
            }
            Type.Table = Table;
            class TableColumn extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                    [ObjectTypeEnum.Column]: new ObjectTypeAbstract.Events.Type.Column(),
                    [ObjectTypeEnum.ColumnButton]: new ObjectTypeAbstract.Events.Type.ColumnButton()
                };
            }
            Type.TableColumn = TableColumn;
            class Show extends RegionAbstract {
                ObjectTypes = {
                // [ObjectTypeEnum.ShowResolve]: new ObjectTypeAbstract.Events.Type.ShowResolve()
                };
            }
            Type.Show = Show;
            class TableRow extends RegionAbstract {
                ObjectTypes = {
                // [ObjectTypeEnum.ShowResolve]: new ObjectTypeAbstract.Events.Type.ShowResolve()
                };
            }
            Type.TableRow = TableRow;
            class Footer extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
                };
            }
            Type.Footer = Footer;
            class List extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.ListRow]: new ObjectTypeAbstract.Events.Type.ListRow()
                };
            }
            Type.List = List;
            class ListRow extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
                };
            }
            Type.ListRow = ListRow;
            class ECabinet extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                    [ObjectTypeEnum.ECabinetRow]: new ObjectTypeAbstract.Events.Type.ECabinetRow()
                };
            }
            Type.ECabinet = ECabinet;
            class ECabinetRow extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.ECabinetColumn]: new ObjectTypeAbstract.Events.Type.ECabinetColumn(),
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                    [ObjectTypeEnum.ModalForm]: new ObjectTypeAbstract.Events.Type.ModalForm()
                };
            }
            Type.ECabinetRow = ECabinetRow;
            class MapPicker extends RegionAbstract {
                ObjectTypes = {
                    [ObjectTypeEnum.Field]: new ObjectTypeAbstract.Events.Type.Field(),
                    [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
                };
            }
            Type.MapPicker = MapPicker;
        })(Type = Events.Type || (Events.Type = {}));
    })(Events = Manager.Events || (Manager.Events = {}));
})(Manager || (Manager = {}));
//# sourceMappingURL=types.js.map