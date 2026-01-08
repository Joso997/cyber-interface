import {RegionEnum} from "../region";
import {Manager} from "./types";

export interface RegionProvider {
    getInstance(region: RegionEnum): Manager.Events.Type.RegionAbstract
}
