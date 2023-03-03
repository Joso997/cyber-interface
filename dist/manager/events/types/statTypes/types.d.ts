import { ObjectTemplate } from '../../../containerClasses/objectTemplate';
export declare namespace Manager.Events.Type {
    abstract class StatAbstract {
        Data: string;
        abstract CheckRequirements(_object: ObjectTemplate): void;
        abstract CreateStat(): StatAbstract;
        InitData(_data: string): StatAbstract;
    }
    type CreateStatDel = () => StatAbstract;
    class Tag extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Value extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Design extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Label extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Id extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class ElementType extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Placeholder extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class ItemList extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Tooltip extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Required extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class Disabled extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class AutoComplete extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class BelongsTo extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class ErrorMessage extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
    class IsValid extends StatAbstract {
        CreateStat(): StatAbstract;
        CheckRequirements(_object: any): void;
    }
}
