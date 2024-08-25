import { ObjectTemplate } from '../containerClasses/objectTemplate'
import { EventHandlerType } from '../events/types/objectTypes/types'
import { SimpleEventDispatcher } from 'ste-simple-events'
import { StatType, StatTypeEnum } from '../events/types'
import {IsJSON} from "../../transformer";
import { v4 as uuidv4 } from 'uuid'

export type MechanicDelegate = (eventHandler: boolean) => void

export abstract class MechanicAbstract {
  public ObjectTemplates!: ObjectTemplate[]
  protected static instance: MechanicAbstract | null
  protected mechanicInvoked: SimpleEventDispatcher<boolean> = new SimpleEventDispatcher<boolean>()
  protected abstract SubscribeConditions() : void
  public abstract UnsubscribeConditions() : void
  protected abstract Button(eventHandler: EventHandlerType) : void
  public constructor (_mechanicCallback: MechanicDelegate | null = null) {
    this.SubscribeToVueComponent(_mechanicCallback)
    this.SubscribeConditions()
  }

  public SubscribeToVueComponent (_mechanicCallback: MechanicDelegate | null = null) : void {
    if (_mechanicCallback !== null) { this.mechanicInvoked.subscribe(_mechanicCallback) }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getInstance (_mechanicCallback: MechanicDelegate | null = null): MechanicAbstract | null {
    return null
  }

  public abstract InitGet (_id: string, _api: string): Promise<ObjectTemplate[]>

  public abstract InitSet(_objectTemplates: ObjectTemplate[]) : ObjectTemplate[]

  public Append (_objectTemplates: ObjectTemplate[]) : ObjectTemplate[] {
    for (const element of _objectTemplates) {
      this.ObjectTemplates.push(element)
    }
    return this.ObjectTemplates
  }

  public AppendAndFilterDuplicate (_objectTemplates: ObjectTemplate[]) : ObjectTemplate[] {
    let noDuplicate = true;
    for (const element of _objectTemplates) {
      for(const oldElement of this.ObjectTemplates){
        if(element.Stats[StatTypeEnum.Tag].Data === oldElement.Stats[StatTypeEnum.Tag].Data ){
          noDuplicate = false
        }
      }
      if(noDuplicate){
        this.ObjectTemplates.push(element)
      }
      noDuplicate = true
    }
    return this.ObjectTemplates
  }

  public Splice (index: number, _objectTemplates: ObjectTemplate[]) : ObjectTemplate[] {
    for (const element of _objectTemplates) {
      this.ObjectTemplates.splice(index, 0, element)
    }
    return this.ObjectTemplates
  }

  protected removeElementFromArray (arr: Array<any>, belongsTo: string) : void {
    (() => {
      // Perform the array update
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].Stats[StatTypeEnum.DependsOn] !== undefined) {
          if (arr[i].Stats[StatTypeEnum.DependsOn].Data === belongsTo) {
            arr.splice(i, 1)
          }
        }
      }
    })()
  }

  protected reStructure (stats: any, append: any = null): any {
    let temp = {}
    for (let i = 0; i < Object.keys(StatType.StatTypes).length; i++) {
      if (stats[i] !== undefined) {
        temp = Object.assign(temp, { [i]: StatType.StatTypes[i]().CreateStat().InitData(stats[i].Data != null ? stats[i].Data : '') })
      }
    }
    if (append !== null) { temp = Object.assign(temp, append) }
    return temp
  }

  protected refreshPage (): void {
    if (this.mechanicInvoked !== null) {
      this.mechanicInvoked.dispatch(true)
    }
  }

  protected updateValueData (eventHandler: EventHandlerType, tagContainingValue: StatTypeEnum = StatTypeEnum.Value, searchByValueType: StatTypeEnum = StatTypeEnum.Tag, tagToUpdate: StatTypeEnum = StatTypeEnum.Value, indices: StatTypeEnum = StatTypeEnum.ValueIndices) {
    const matchingIndex = this.getObjectTemplateIndex(eventHandler.payload.Stats[searchByValueType].Data, this.ObjectTemplates, searchByValueType)
    if (matchingIndex !== -1) {
      if (IsJSON(this.ObjectTemplates[matchingIndex].Stats[tagToUpdate].Data)) {
        const stat = JSON.parse(this.ObjectTemplates[matchingIndex].Stats[tagToUpdate].Data)
        stat[eventHandler.payload.Stats[indices].Data] = eventHandler.payload.Stats[tagContainingValue].Data
        this.ObjectTemplates[matchingIndex].Stats[tagToUpdate].Data = JSON.stringify(stat)
      } else {
        this.ObjectTemplates[matchingIndex].Stats[tagToUpdate].Data = eventHandler.payload.Stats[tagContainingValue].Data
      }
    }
  }

  protected getObjectTemplateFromObject (object : ObjectTemplate): ObjectTemplate {
    return new ObjectTemplate(object.Region, object.ObjectEnum, object.SubObjectEnum, object.ActionEnum, object.Stats)
  }

  protected getObjectTemplateIndex (tag: string, objectTemplates : ObjectTemplate[], searchByValueType: StatTypeEnum = StatTypeEnum.Tag) : number {
    return objectTemplates.findIndex(element =>
        element.Stats[searchByValueType] && (element.Stats[searchByValueType].Data === tag || element.Stats[searchByValueType].Data === tag.split('|')[1])
    )
  }

  protected Splicing (index: number, objectTemplates: ObjectTemplate[], _objectTemplates: ObjectTemplate[]) : ObjectTemplate[] {
    for (const element of _objectTemplates) {
      objectTemplates.splice(index, 0, element)
    }
    return objectTemplates
  }

  protected addObjectTemplateInputGroup (eventHandler: EventHandlerType):void {
    eventHandler.payload = this.getObjectTemplateFromObject(eventHandler.payload)
    eventHandler.payload.Stats[StatTypeEnum.ElementType].Data = ''
    let i = 0
    const index = this.ObjectTemplates.findIndex((element) => element.Stats[StatTypeEnum.Tag].Data === eventHandler.payload.Stats[StatTypeEnum.Tag].Data)
    for (const objectTemplate of this.ObjectTemplates) {
      if (objectTemplate.Stats[StatTypeEnum.Tag].Data.includes(eventHandler.payload.Stats[StatTypeEnum.Tag].Data)) {
        i++
      }
    }
    eventHandler.payload.Stats[StatTypeEnum.Tag].Data = eventHandler.payload.Stats[StatTypeEnum.Tag].Data + uuidv4()
    this.ObjectTemplates = this.Splicing(index + i, this.ObjectTemplates, [eventHandler.payload as ObjectTemplate])
  }

  protected removeElementByTag (tag : string, objectTemplates: ObjectTemplate[]): ObjectTemplate[] {
    const elementIndex = this.getObjectTemplateIndex(tag, objectTemplates)
    objectTemplates.splice(elementIndex, 1)
    return objectTemplates
  }

  protected flipAtPosition(eventHandler: EventHandlerType, tagContainingValue: StatTypeEnum = StatTypeEnum.Option, indices: StatTypeEnum = StatTypeEnum.OptionIndices): EventHandlerType {
    const tempArray = JSON.parse(eventHandler.payload.Stats[tagContainingValue].Data)
    tempArray[eventHandler.payload.Stats[indices].Data] ^= 1;
    eventHandler.payload.Stats[tagContainingValue].Data = JSON.stringify(tempArray)
    return eventHandler
  }
}
