import { SubObjectType } from '../subObjectType';
import { StatChangeEventArgs } from '../../../containerClasses/statChangeEventArgs';
import { SimpleEventDispatcher } from 'ste-simple-events';
// export type ComponentDelegate = (getVueComponent: () => any) => void
export var Manager;
(function (Manager) {
    var Events;
    (function (Events) {
        var Type;
        (function (Type) {
            class ObjectTypeAbstract {
                LogicInvoked = new SimpleEventDispatcher();
                static getVueComponent;
                static SetComponent(getVueComponent) {
                    throw new Error('Function not implemented');
                }
                InvokeStatChange(_statType, _amount) {
                    throw new Error('Method not implemented.');
                }
                ChooseSubType(_object, _data = null) {
                    return SubObjectType.SubObjectTypes[_object.SubObjectEnum].ChooseAction(_object, _data, this.InvokeLogic.bind(this));
                }
                InvokeLogic(eventHandler) {
                    this.LogicInvoked.dispatch({ subObjectType: eventHandler.subObjectType, payload: eventHandler.payload });
                }
                SubscribeLogic(logicDel) {
                    this.LogicInvoked.subscribe(logicDel);
                }
                UnSubscribeLogic(logicDel) {
                    this.LogicInvoked.unsubscribe(logicDel);
                }
                NullifyLogic() {
                    this.LogicInvoked.clear();
                }
            }
            Type.ObjectTypeAbstract = ObjectTypeAbstract;
            class Default extends ObjectTypeAbstract {
                InvokeStatChange(_statType, _amount) {
                    throw new Error('Method not implemented.');
                }
                Subscribe(_subObjectType, _statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            class IChangeStat extends ObjectTypeAbstract {
                StatChangeEvent = new SimpleEventDispatcher();
                InvokeStatChange(_statType, _amount) {
                    this.StatChangeEvent.dispatch(new StatChangeEventArgs(_statType, _amount));
                }
                Subscribe(_subObjectType, _statChangeDel) {
                    this.StatChangeEvent.subscribe(SubObjectType.SubObjectTypes[_subObjectType].Subscribe(_statChangeDel));
                }
            }
            class Field extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Field.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Field.getVueComponent();
                }
            }
            Type.Field = Field;
            class Button extends Default {
                static SetComponent(getVueComponent) {
                    Button.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Button.getVueComponent();
                }
            }
            Type.Button = Button;
            class Row extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Row.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Row.getVueComponent();
                }
            }
            Type.Row = Row;
            class Text extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Text.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Text.getVueComponent();
                }
            }
            Type.Text = Text;
            class Output extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Output.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Output.getVueComponent();
                }
            }
            Type.Output = Output;
            class Alert extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Alert.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Alert.getVueComponent();
                }
            }
            Type.Alert = Alert;
            class CheckBox extends IChangeStat {
                static SetComponent(getVueComponent) {
                    CheckBox.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return CheckBox.getVueComponent();
                }
            }
            Type.CheckBox = CheckBox;
            class DataList extends IChangeStat {
                static SetComponent(getVueComponent) {
                    DataList.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return DataList.getVueComponent();
                }
            }
            Type.DataList = DataList;
            class SelectList extends IChangeStat {
                static SetComponent(getVueComponent) {
                    SelectList.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return SelectList.getVueComponent();
                }
            }
            Type.SelectList = SelectList;
            class Radio extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Radio.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Radio.getVueComponent();
                }
            }
            Type.Radio = Radio;
            class Column extends IChangeStat {
                static SetComponent(getVueComponent) {
                    Column.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return Column.getVueComponent();
                }
            }
            Type.Column = Column;
            class ColumnButton extends IChangeStat {
                static SetComponent(getVueComponent) {
                    ColumnButton.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return ColumnButton.getVueComponent();
                }
            }
            Type.ColumnButton = ColumnButton;
            class FieldButton extends IChangeStat {
                static SetComponent(getVueComponent) {
                    FieldButton.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return FieldButton.getVueComponent();
                }
            }
            Type.FieldButton = FieldButton;
            class SelectButton extends IChangeStat {
                static SetComponent(getVueComponent) {
                    SelectButton.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return SelectButton.getVueComponent();
                }
            }
            Type.SelectButton = SelectButton;
            class ListRow extends IChangeStat {
                static SetComponent(getVueComponent) {
                    ListRow.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return ListRow.getVueComponent();
                }
            }
            Type.ListRow = ListRow;
            class ECabinetRow extends IChangeStat {
                static SetComponent(getVueComponent) {
                    ECabinetRow.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return ECabinetRow.getVueComponent();
                }
            }
            Type.ECabinetRow = ECabinetRow;
            class ECabinetColumn extends IChangeStat {
                static SetComponent(getVueComponent) {
                    ECabinetColumn.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return ECabinetColumn.getVueComponent();
                }
            }
            Type.ECabinetColumn = ECabinetColumn;
            class ModalForm extends IChangeStat {
                static SetComponent(getVueComponent) {
                    ModalForm.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return ModalForm.getVueComponent();
                }
            }
            Type.ModalForm = ModalForm;
            class MapPicker extends IChangeStat {
                static SetComponent(getVueComponent) {
                    MapPicker.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return MapPicker.getVueComponent();
                }
            }
            Type.MapPicker = MapPicker;
            class FieldCode extends IChangeStat {
                static SetComponent(getVueComponent) {
                    FieldCode.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return FieldCode.getVueComponent();
                }
            }
            Type.FieldCode = FieldCode;
            class DataSelect extends IChangeStat {
                static SetComponent(getVueComponent) {
                    DataSelect.getVueComponent = getVueComponent;
                }
                GetVueComponent() {
                    return DataSelect.getVueComponent();
                }
            }
            Type.DataSelect = DataSelect;
        })(Type = Events.Type || (Events.Type = {}));
    })(Events = Manager.Events || (Manager.Events = {}));
})(Manager || (Manager = {}));
//# sourceMappingURL=types.js.map