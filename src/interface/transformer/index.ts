import { ObjectTemplate } from "../manager/containerClasses/objectTemplate"
import { StatTypeEnum } from "../manager/events/types"

export function ParseJSON<T = unknown>(value: string | null | undefined): T | null {
    if (value == null || value === "") return null
    try {
        return JSON.parse(value) as T
    } catch {
        return null
    }
}

export function IsJSONArray(value: string | null | undefined): boolean {
    const parsed = ParseJSON(value)
    return Array.isArray(parsed)
}

export function IsJSONObject(value: string | null | undefined): boolean {
    const parsed = ParseJSON(value)
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
}

export function GetRawStat(object: ObjectTemplate, statType: StatTypeEnum): unknown {
    return object.Stats?.[statType]?.Data
}

export function GetStringStat(object: ObjectTemplate, statType: StatTypeEnum): string {
    const raw = GetRawStat(object, statType)
    if (raw == null) return ""
    return String(raw)
}

export function GetBooleanStat(object: ObjectTemplate, statType: StatTypeEnum): boolean {
    const raw = GetRawStat(object, statType)
    return !!raw
}

export function GetJSONStat<T = unknown>(object: ObjectTemplate, statType: StatTypeEnum): T | null {
    const raw = GetRawStat(object, statType)
    if (typeof raw !== "string") return null
    return ParseJSON<T>(raw)
}

export function HasStat(object: ObjectTemplate, statType: StatTypeEnum): boolean {
    return object.Stats?.[statType] !== undefined
}

export function GetStatData(object: ObjectTemplate, statType: StatTypeEnum, returnType: "boolean" | "string" = "string"): boolean | string {
    try {
        const data = GetRawStat(object, statType) ?? ""
        return returnType === "boolean" ? !!data : data
    } catch (error) {
        return returnType === "boolean" ? false : ""
    }
}

export function IsJSON(str: string): boolean {
    return IsJSONArray(str)
}

export function StatIsDefined(object: ObjectTemplate, statType: StatTypeEnum): boolean {
    return HasStat(object, statType)
}

export function GetValue(object: ObjectTemplate, statEnum: StatTypeEnum, indexStatTypeEnum = StatTypeEnum.Option): unknown {
    const tempData = GetStatData(object, statEnum) as string
    if (!tempData) return ""

    if (IsJSONObject(tempData)) {
        return ParseJSON(tempData)
    }

    if (HasStat(object, indexStatTypeEnum) && IsJSONArray(tempData)) {
        const data = ParseJSON<unknown[]>(tempData) ?? []
        const optionData = GetStatData(object, indexStatTypeEnum) as string

        if (IsJSONArray(optionData)) {
            const parsedOptionData = ParseJSON<unknown[]>(optionData) ?? []
            const optionIndexRaw = GetStatData(object, StatTypeEnum.OptionIndices) as string
            const optionIndex = Number(optionIndexRaw)
            const mappedIndex = parsedOptionData[optionIndex]
            const mappedNumber = Number(mappedIndex)
            if (Number.isNaN(mappedNumber)) return ""
            return data[mappedNumber] ?? ""
        }

        const index = Number(optionData)
        if (Number.isNaN(index)) return ""
        return data[index] ?? ""
    }

    return tempData
}

export function GetValidationClass(object: ObjectTemplate): string {
    const isValid = GetRawStat(object, StatTypeEnum.IsValid)
    if (isValid === undefined || isValid === "") return ""
    if (isValid) return "is-valid"
    const errorMessage = GetRawStat(object, StatTypeEnum.ErrorMessage)
    if (errorMessage == null || errorMessage === "") return ""
    return "is-invalid"
}
