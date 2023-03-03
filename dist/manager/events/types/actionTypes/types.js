import { StatTypeEnum } from '../statType';
export var Manager;
(function (Manager) {
    var Events;
    (function (Events) {
        var Type;
        (function (Type) {
            class MethodTypeAbstract {
            }
            Type.MethodTypeAbstract = MethodTypeAbstract;
            class None extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    return true;
                }
                Enact() {
                    throw new Error('Method not implemented.');
                }
            }
            Type.None = None;
            class Insert extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    console.log(_data);
                    this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response));
                    return true;
                }
                async Enact(_data) {
                    return await _data; // _data.charAt(0).toUpperCase() + _data.slice(1)
                }
            }
            Type.Insert = Insert;
            class InsertUrl extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response));
                    return true;
                }
                async Enact(_data) {
                    // URLs starting with http://, https://, or ftp://
                    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                    return await regexp.test(_data) ? _data : 'Invalid Url';
                }
            }
            Type.InsertUrl = InsertUrl;
            class Click extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object });
                    return true;
                }
                Enact() {
                    throw new Error('Method not implemented.');
                }
            }
            Type.Click = Click;
            class InsertClick extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    _object.Stats[StatTypeEnum.Value].Data = _data;
                    _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object });
                    return true;
                }
                async Enact(_data) {
                    throw new Error('Method not implemented.');
                }
            }
            Type.InsertClick = InsertClick;
            class InsertNumber extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response));
                    return true;
                }
                async Enact(_data) {
                    if (_data < 1 || _data > 100) {
                        // alert('Broj uređaja mora biti veći od 1 i manji od 100')
                        return '';
                    }
                    return await _data;
                }
            }
            Type.InsertNumber = InsertNumber;
            class Check extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response));
                    return true;
                }
                async Enact(_data) {
                    return await _data;
                }
            }
            Type.Check = Check;
            class SelectIdFromName extends MethodTypeAbstract {
                Act(_object, _data, _invokeLogic) {
                    const options = JSON.parse(_object.Stats[StatTypeEnum.ItemList].Data);
                    const selectedOption = options.find((option) => option.name === _data);
                    this.Enact([selectedOption, _data]).then((response) => {
                        _object.Stats[StatTypeEnum.Value].Data = response;
                        _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object });
                    });
                    return true;
                }
                async Enact(_data) {
                    if (_data[0] !== undefined) {
                        return await _data[0];
                    }
                    else {
                        return {
                            id: null,
                            name: _data[1]
                        };
                    }
                }
            }
            Type.SelectIdFromName = SelectIdFromName;
        })(Type = Events.Type || (Events.Type = {}));
    })(Events = Manager.Events || (Manager.Events = {}));
})(Manager || (Manager = {}));
//# sourceMappingURL=types.js.map