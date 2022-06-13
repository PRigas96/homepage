import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'



 const Work = () => (
  <Layout title="ESEK Analysis">

<WorkImage src="/images/works/work1/icon1.png" />
    <Container>
      <Title>
        ESEK Analysis <Badge></Badge>
      </Title>
      <P>
      We formed a large team of 70 students,to study the national plan for
       the energy and enviroment, where I organised and led them. We first
        analysed the project and organised in a chart its basics components.
         Then we proceded to finding solutions for each target and finally we
         analyzed the data with matlab and made graphs to show our findings and
          our evaluations. Notable is the matlab code for evaluating the data.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Matlab </span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/PRigas96/esek/blob/main/(REWORKED)TEAM%20WISE%20SORT%20FINAL-converted-compressed.pdf">
          ESEK final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/esek">
          ESEK files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work1/icon2.png" />
        <WorkImage src="/images/works/work1/icon3.png" />
        <WorkImage src="/images/works/work1/icon4.png" />
        <WorkImage src="/images/works/work1/icon5.png" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'