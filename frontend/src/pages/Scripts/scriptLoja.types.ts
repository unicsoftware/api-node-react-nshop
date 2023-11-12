export interface IScriptList {
  script_id: number;
  script_name: string;
  script_src: string;
  script_event: string;
  script_where: string;
  script_description: string;
  script_factory: number;
}

/* METHODS */
export interface IScriptLojaDataProvider {
  children: (data: {  
    scriptsList: IScriptList[];
    onDelete: (scriptId: number) => void;
  }) => React.ReactNode;
}