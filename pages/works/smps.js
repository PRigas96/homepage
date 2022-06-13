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



<WorkImage src="/images/home1.png" />
const Work = () => (
  <Layout title="SMPS">

<WorkImage src="/images/works/work2/small_icon_5.png" />
    <Container>
      <Title>
        SMPS <Badge></Badge>
      </Title>
      <P>
      A team of 5, we initially too the task of analysing a DC/DC SMPS flyback converter. During covid restrictions we
      had to utilize Google-Meet,Google-Drive,Online MS and project management apps to finish our project. After analyzing
      power circuit we recreated the model in Simulink. Then proceeded to create a neural netowrk to regulate the closed
      feedback loop to optimize the output voltage. Finally we used both NN and fuzzy logic for better results.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Matlab | Simulink</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/PRigas96/BAHI/tree/main/Presentation">
          SMPS final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/BAHI">
          SMPS files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work2/small_icon_3.png" />
        <WorkImage src="/images/works/work2/small_icon_1.png" />
        <WorkImage src="/images/works/work2/small_icon_2.png" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'