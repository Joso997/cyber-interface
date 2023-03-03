import { ActionType } from '../actionType';
export var Manager;
(function (Manager) {
    var Events;
    (function (Events) {
        var Type;
        (function (Type) {
            class SubObjectTypeAbstract {
                ChooseAction(_object, _data, _invokeLogic) {
                    return ActionType.ActionTypes[_object.ActionEnum].Act(_object, _data, _invokeLogic);
                }
            }
            Type.SubObjectTypeAbstract = SubObjectTypeAbstract;
            class ParentObject extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    return _statChangeDel;
                }
            }
            Type.ParentObject = ParentObject;
            class Middle extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Middle = Middle;
            class Left extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Left = Left;
            class Right extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Right = Right;
            class Up extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Up = Up;
            class Down extends SubObjectTypeAbstract {
                Subscribe(_statChangeDel) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Down = Down;
        })(Type = Events.Type || (Events.Type = {}));
    })(Events = Manager.Events || (Manager.Events = {}));
})(Manager || (Manager = {}));
//# sourceMappingURL=types.js.map