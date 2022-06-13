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
  <Layout title="PID Controller">

<WorkImage src="/images/works/work4/icon10.png" />
    <Container>
      <Title>
        PID Controller<Badge></Badge>
      </Title>
      <P>
      First I simplified a transfer function
       by solving an equation and finding values
        that meet the required properties. I then
         preceded in creating a PID controller and fine tuning
       it for maximum results depending on the required output.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Matlab</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/PRigas96/PIDcontroller/blob/main/ΣΑΕ_Παναγιωτης_Ρηγας_56841_Τελικη_Εργασια.pdf">
          PID Controller final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github Rep</Meta>
          <Link href="https://github.com/PRigas96/PIDcontroller">
          PID Controller files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work4/icon3.png" />
        <WorkImage src="/images/works/work4/icon4.png" />
        <WorkImage src="/images/works/work4/icon5.png" />
        <WorkImage src="/images/works/work4/icon6.png" />
        <WorkImage src="/images/works/work4/icon7.png" />
        <WorkImage src="/images/works/work4/icon8.png" />
        <WorkImage src="/images/works/work4/icon9.png" />

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'