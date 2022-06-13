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
  <Layout title="ARM Calculator">

<WorkImage src="/images/works/work6/icon1.jpg" />
    <Container>
      <Title>
        ARM Calculator <Badge></Badge>
      </Title>
      <P>
       I simulated an arm processor in keil. This includes a UI with
       basic calculating actions. The user inputs 2 numbers and an action
       and the cpu codes them, sents them and then decodes them. It then
       proceeds to do the calculations to prin them back in screen.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Keil | Assembly</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/PRigas96/ARMKEILcalc/blob/main/Report_Panagiotis_Rigas_56841.pdf">
          ARM Calculator final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/ARMKEILcalc">
          ARM Calculator files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={3} columns={2} gap={2}>
        <WorkImage src="/images/works/work6/icon2.jpg" />
        <WorkImage src="/images/works/work6/icon3.jpg" />
        <WorkImage src="/images/works/work6/icon6.jpg" />
       </SimpleGrid>
      <SimpleGrid row={3} columns={2} gap={2}>
        <WorkImage src="/images/works/work6/icon4.jpg" />
        <WorkImage src="/images/works/work6/icon5.jpg" />

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'