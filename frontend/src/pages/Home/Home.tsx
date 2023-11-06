import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { Layout, Page, DataList } from '@nimbus-ds/patterns';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo';
import {
  Card,
  Text,
  Link,
  Icon,
  Box,
  Button,
  Title,
  IconButton,
  Spinner,
  Tag,
} from '@nimbus-ds/components';

import {
  ExternalLinkIcon,
  PictureIcon,
  CheckIcon,
  PlusCircleIcon,
  ChevronDownIcon,
  CreditCardIcon,
  BoxUnpackedIcon,
} from "@nimbus-ds/icons";

import { nexo } from '@/app';
import { Responsive } from '@/components';
import HomeDataProvider from './HomeDataProvider';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translations');

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <Page maxWidth="800px">
      <Page.Header
        title={t('home.title')}
        buttonStack={
          <Responsive
            mobileContent={
              <IconButton
                backgroundColor="transparent"
                borderColor="transparent"
                onClick={() => navigate('/examples')}
                source={<PictureIcon />}
                size="2rem"
              />
            }
            desktopContent={
              <Box display="flex" gap="2">
                <Button onClick={() => navigate('/examples')}>
                  <Icon source={<PictureIcon />} color="currentColor" />
                  Exemplos
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => goTo(nexo, '/orders')}
                >
                  Ir as vendas
                </Button>
              </Box>
            }
          />
        }
      />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title={t('home.first-card.title')} />
              <Card.Body>
                <Text>
                  <Trans i18nKey={t('home.first-card.description')} />
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  as="a"
                  target="_blank"
                  href={t('home.first-card.link.url')}
                >
                  {t('home.first-card.link.text')}
                  <Icon color="currentColor" source={<ExternalLinkIcon />} />
                </Link>
              </Card.Footer>
            </Card>
            
            <DataList>
              {Array.from({ length: 3 }, (_, i) => (
                <DataList.Row key={i} gap="1">
                  <Box display="flex" justifyContent="space-between">
                    <Text fontWeight="medium" color="primary-interactive">
                      Script 1
                    </Text>
                    <Text>Instalado</Text>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Text>Incluir Video flutuante na página</Text>
                    <Text>R$ 250,00</Text>
                  </Box>
                  
                  <Box display="flex" flexWrap="wrap" gap="2" pt="2">
                    <Tag appearance="success">
                      <Icon color="currentColor" source={<CheckIcon />} />
                      Awaiting payment
                    </Tag>
                    <Tag appearance="primary">
                      <Icon color="currentColor" source={<BoxUnpackedIcon />} />
                      Unfulfilled
                    </Tag>
                  </Box>
                </DataList.Row>
              ))}
            </DataList>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Home;
