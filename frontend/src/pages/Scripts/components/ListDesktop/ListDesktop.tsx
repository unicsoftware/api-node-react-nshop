import React from "react";
import { Box, IconButton, Table, Text } from "@nimbus-ds/components";
import { TrashIcon } from "@nimbus-ds/icons";

import { Translator } from "@/app/I18n";
import { IScriptList } from "../../scriptLoja.types";

const ListDesktop: React.FC<{
  scriptsList: IScriptList[];
  onDelete: (scriptId: number)  => void;
}> = ({ scriptsList, onDelete }) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell>
          <Translator path="products.name" />
        </Table.Cell>
        <Table.Cell>
          <Box
            display="flex"
            gap="2"
            alignItems="center"
            width="100%"
            justifyContent="center"
          >
            <Text>
              <Translator path="products.remove" />
            </Text>
          </Box>
        </Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {scriptsList.map((scriptsList) => (
        <Table.Row key={scriptsList.script_id}>
          <Table.Cell>
            <Box display="flex" gap="2" alignItems="center">
                {scriptsList.script_name}
            </Box>
          </Table.Cell>
          <Table.Cell>
            <Box
              display="flex"
              gap="2"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                onClick={() => onDelete(scriptsList.script_id)}
                source={<TrashIcon />}
                size="2rem"
              />
            </Box>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default ListDesktop;
