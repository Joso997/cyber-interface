import { Manager } from './regionTypes/types'

export enum RegionEnum {
  Form,
  Table,
  TableColumn,
  Footer,
  List,
  ECabinet,
  ECabinetRow,
  ModalForm,
  Placeholder
}

export class RegionType {
    /**
     * RegionTypes: globally scoped singleton regions
     * Create(): factory for lifecycle-scoped region instances
     */
    public static RegionTypes: { [index: number]: Manager.Events.Type.RegionAbstract } =
    {
      [RegionEnum.Form]: new Manager.Events.Type.Form(),
      [RegionEnum.Table]: new Manager.Events.Type.Table(),
      [RegionEnum.TableColumn]: new Manager.Events.Type.TableColumn(),
      [RegionEnum.Footer]: new Manager.Events.Type.Footer(),
      [RegionEnum.List]: new Manager.Events.Type.List(),
      [RegionEnum.ECabinet]: new Manager.Events.Type.ECabinet(),
      [RegionEnum.ECabinetRow]: new Manager.Events.Type.ECabinetRow(),
      [RegionEnum.ModalForm]: new Manager.Events.Type.Form(),
      [RegionEnum.Placeholder]: new Manager.Events.Type.Placeholder()
    }

  public static RegionConstructors: { [index: number]: new () => Manager.Events.Type.RegionAbstract } = {
    [RegionEnum.Form]: Manager.Events.Type.Form,
    [RegionEnum.Table]: Manager.Events.Type.Table,
    [RegionEnum.TableColumn]: Manager.Events.Type.TableColumn,
    [RegionEnum.Footer]: Manager.Events.Type.Footer,
    [RegionEnum.List]: Manager.Events.Type.List,
    [RegionEnum.ECabinet]: Manager.Events.Type.ECabinet,
    [RegionEnum.ECabinetRow]: Manager.Events.Type.ECabinetRow,
    [RegionEnum.ModalForm]: Manager.Events.Type.Form,
    [RegionEnum.Placeholder]: Manager.Events.Type.Placeholder
  }

  public static Create(region: RegionEnum): Manager.Events.Type.RegionAbstract {
    const RegionClass = this.RegionConstructors[region]

    if (!RegionClass) {
      throw new Error(`Region ${RegionEnum[region]} is not registered`)
    }

    return new RegionClass()
  }

}
