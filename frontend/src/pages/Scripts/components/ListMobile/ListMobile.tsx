import React from "react";
import { Box, IconButton, Text} from "@nimbus-ds/components";
import { TrashIcon } from "@nimbus-ds/icons";

import { DataList } from "@nimbus-ds/patterns";
import { IScriptList } from "../../scriptLoja.types";

const ListMobile: React.FC<{
  scriptsList: IScriptList[];
  onDelete: (scriptId: number)  => void;
}> = ({ scriptsList, onDelete }) => (
  <DataList>
    {scriptsList.map((scriptsList) => (
      <DataList.Row key={scriptsList.script_id} flexDirection="row" width="100%" gap="2">
        <Box display="flex" gap="2" flex="1 1 auto">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text>{scriptsList.script_name}</Text>
          </Box>
        </Box>
        <Box display="flex" gap="2" alignItems="center" justifyContent="center">
          <IconButton
            onClick={() => onDelete(scriptsList.script_id)}
            source={<TrashIcon />}
            size="2rem"
          />
        </Box>
      </DataList.Row>
    ))}
  </DataList>
);

export default ListMobile;
