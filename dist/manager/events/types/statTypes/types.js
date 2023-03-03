export var Manager;
(function (Manager) {
    var Events;
    (function (Events) {
        var Type;
        (function (Type) {
            class StatAbstract {
                Data = '';
                InitData(_data) {
                    this.Data = _data;
                    return this;
                }
            }
            Type.StatAbstract = StatAbstract;
            class Tag extends StatAbstract {
                CreateStat() {
                    return new Tag();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Tag = Tag;
            class Value extends StatAbstract {
                CreateStat() {
                    return new Value();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Value = Value;
            class Design extends StatAbstract {
                CreateStat() {
                    return new Design();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Design = Design;
            class Label extends StatAbstract {
                CreateStat() {
                    return new Label();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Label = Label;
            class Id extends StatAbstract {
                CreateStat() {
                    return new Id();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Id = Id;
            class ElementType extends StatAbstract {
                CreateStat() {
                    return new ElementType();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.ElementType = ElementType;
            class Placeholder extends StatAbstract {
                CreateStat() {
                    return new Placeholder();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Placeholder = Placeholder;
            class ItemList extends StatAbstract {
                CreateStat() {
                    return new ItemList();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.ItemList = ItemList;
            class Tooltip extends StatAbstract {
                CreateStat() {
                    return new Tooltip();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Tooltip = Tooltip;
            class Required extends StatAbstract {
                CreateStat() {
                    return new Required();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Required = Required;
            class Disabled extends StatAbstract {
                CreateStat() {
                    return new Disabled();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.Disabled = Disabled;
            class AutoComplete extends StatAbstract {
                CreateStat() {
                    return new AutoComplete();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.AutoComplete = AutoComplete;
            class BelongsTo extends StatAbstract {
                CreateStat() {
                    return new BelongsTo();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.BelongsTo = BelongsTo;
            class ErrorMessage extends StatAbstract {
                CreateStat() {
                    return new ErrorMessage();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.ErrorMessage = ErrorMessage;
            class IsValid extends StatAbstract {
                CreateStat() {
                    return new IsValid();
                }
                CheckRequirements(_object) {
                    console.log(this.Data);
                }
            }
            Type.IsValid = IsValid;
        })(Type = Events.Type || (Events.Type = {}));
    })(Events = Manager.Events || (Manager.Events = {}));
})(Manager || (Manager = {}));
//# sourceMappingURL=types.js.map