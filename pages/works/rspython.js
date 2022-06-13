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
  <Layout title="Remote Sensing">

<WorkImage src="/images/works/work7/icon_s.jpg" />
    <Container>
      <Title>
        Remote Sensing <Badge></Badge>
      </Title>
      <P>
      Used Landsat-8 to study a fire and evaluate the damage with data in python
      with Jupyter Notebook. Initially, collected the data and filtered them based
      on their value. Then put on a mask to showcase the damage in flora. Finally
      used Folium to create interactive map with data, in a discussion
       with firefighters who participated in the event.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Ubuntu 20.04 </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Jupyter Notebook</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/PRigas96/Remote_Sensing/blob/main/Presentation/Παρουσίαση.pptx">
          Remote Sensing final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/Remote_Sensing">
          Remote Sensing files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work7/icon2.png" />
        <WorkImage src="/images/works/work7/icon3.png" />
        <WorkImage src="/images/works/work7/icon4.png" />
        <WorkImage src="/images/works/work7/icon5.png" />
      </SimpleGrid>
      <WorkImage src="/images/works/work7/icon6.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'