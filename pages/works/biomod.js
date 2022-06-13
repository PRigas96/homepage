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
  <Layout title="BIO Modeling ">

<WorkImage src="/images/works/work8/icon1.png" />
    <Container>
      <Title>
        BIO Modeling  <Badge></Badge>
      </Title>
      <P>
       This work investigates the genesis of
        various bioelectric signals recorded in the modern clinical study,
         in various phenomena, which with appropriate equipment (sensors) are detected
          with relative ease. These phenomena include electrocardiogram, electroencephalogram,
        electromyogram and electroneurogram.
      </P>
      <P>
      <br/>
      </P>
      <P>
        This work begins with the study of the mechanisms of capacity building by cells.
        Then the mechanisms of generating currents transverse to the cell membrane are presented,
         while giving their application to biological systems. Finally, reference is made to the
         active state and the action potential,
        while suggestions for future work are also mentioned.
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
          <Link href="https://github.com/PRigas96/BIO_simulation/tree/main/Presentation">
          BIO Modeling final presentation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="http://www.cs.cmu.edu/~dst/HHsim/">
          BIO Modeling files
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid row={2} columns={2} gap={2}>
        <WorkImage src="/images/works/work8/icon2.png" />
        <WorkImage src="/images/works/work8/icon3.png" />
        <WorkImage src="/images/works/work8/icon4.png" />
        <WorkImage src="/images/works/work8/icon5.png" />

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'