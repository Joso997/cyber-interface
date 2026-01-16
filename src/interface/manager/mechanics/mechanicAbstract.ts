import { ObjectTemplate } from '../containerClasses/objectTemplate'
import { EventHandlerType } from '../events/types/objectTypes/types'
import { SimpleEventDispatcher } from 'ste-simple-events'
import { StatType } from '../events/types'

export type MechanicDelegate = (eventHandler: void) => void

export abstract class MechanicAbstract {
  protected ObjectTemplates!: ObjectTemplate[]
  protected mechanicInvoked: SimpleEventDispatcher<void> = new SimpleEventDispatcher<void>()
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

  public abstract InitGet (_id: string, _api: string): Promise<ObjectTemplate[]>

  public abstract InitSet(_objectTemplates: ObjectTemplate[]) : ObjectTemplate[]

  public Append (_objectTemplates: ObjectTemplate[]) : ObjectTemplate[] {
    for (const element of _objectTemplates) {
      this.ObjectTemplates.push(element)
    }
    return this.ObjectTemplates
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
      this.mechanicInvoked.dispatch()
    }
  }

}
