interface QuickDB {
    target?: string | null;
    table?: string;
}

declare const CroxyDB: {

    setLanguage:(language:"tr"|"en") => true;
    setReadable:(readable:boolean) => boolean;
    setNoBlankData:(noBlankData:boolean) => boolean;
    setAdapter:(adapter:"jsondb"|"localstorage"|"mongo"|"yamldb") => true;
    setFolder:(adapter:string) => true;
    setFile:(adapter:string) => true;

    set: (key: string, value: any) => any;
    delete: (key: string, value: any) => boolean;
    fetch: (key: string) => any;
    has: (key: string) => boolean;
    get: (key: string) => any;
    push: (key: string, value: any) => any[];
    unpush: (key: string, value: any) => any[];
    add: (key: string, value: number) => number;
    subtract: (key: string, value: number) => number;
    setByPriority: (key: string, value: any) => any;
    delByPriority: (key: string, value: any) => any;
    all: () => { [key: string]: any };
    deleteAll: () => boolean;
    move: (QuickDB: QuickDB) => boolean;

}

export = CroxyDB;
