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
  <Layout title="Excell App">

<WorkImage src="/images/works/work5/icon8.png" />
    <Container>
      <Title>
        Excell App <Badge></Badge>
      </Title>
      <P>
      Creating a user interface app in python,
      where the user provides data in excel
      form(of student grades) and automatically
      the app creates a new file where the data is analysed.
       AI code is also implemented to predict grades.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>

        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/ExcelApp">
          Excell App files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work5/icon1.png" />
        <WorkImage src="/images/works/work5/icon2.png" />
        <WorkImage src="/images/works/work5/icon3.png" />
        <WorkImage src="/images/works/work5/icon4.png" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'