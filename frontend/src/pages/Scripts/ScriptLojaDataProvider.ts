import React, { useEffect, useState } from 'react';
import { useToast } from '@nimbus-ds/components';
import { useFetch } from '@/hooks';
import { IScriptList, IScriptLojaDataProvider } from './scriptLoja.types';

const ScriptLojaDataProvider: React.FC<IScriptLojaDataProvider> = ({
    children,
  }) => {
    const { addToast } = useToast();
    const { request } = useFetch();
    const [scriptsList, setScriptsList] = useState<IScriptList[]>([]);

  useEffect(() => onGetScriptList(), []);

  const onGetScriptList = () => {
    request<IScriptList[]>({
      url: `/scriptList`,
      method: 'GET',
    })
      .then((response) => {
        setScriptsList(response.content);
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-products',
        });
      });
  };

  
  const onDelete = (scriptId: number) => {
    request<IScriptList[]>({
      url: `/scriptList/${scriptId}`,
      method: 'DELETE',
    })
      .then(() => {
        onGetScriptList();
        addToast({
          type: 'success',
          text: 'Script deletado com sucesso',
          duration: 4000,
          id: 'delete-script',
        });
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-delete-script',
        });
      });
  };

  return children({scriptsList, onDelete });
};

export default ScriptLojaDataProvider;
