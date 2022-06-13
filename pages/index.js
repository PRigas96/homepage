import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  UnorderedList,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoGoogle, IoLogoYoutube, IoLogOutSharp } from 'react-icons/io5'

import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { Title, WorkImage, Meta } from '../components/work'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
<WorkImage src="/images/central3.jpg"/>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello,👋 I&apos;m a EECS engineer in Xanthi, Greece.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Panagiotis Rigas
          </Heading>
          <p>Passionate about learning more about tech and life.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile1.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m a EECS student  at Democritus University of Thrace(1st of my year)
           where I passed 1st in 2(2/2) of the weighted courses.
        </Paragraph>
        <Paragraph>
          <br/>
        </Paragraph>
        <Paragraph>
          I&apos;m interested in coding, designing algorithms, creating simulations,
          machine learning and its applications
          in real-life problems.
        </Paragraph>
        <Paragraph>
          <br/>
        </Paragraph>
         I was a competitve Sailor, I love working out, reading books, cooking,
         listening to music and most of all sleeping.
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>EECS DUTH</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>Integrated Master</BioYear>
        </BioSection>
      <UnorderedList my={4}>
        <ListItem>
         Grade is 9.3/10 with thesis, in subject 'Creating 3D models from 2D sketches'.
        </ListItem>
        <ListItem>
         Experience as private tutor in Electromagnetic Field I,II and III, coding in C,C++,Matlab,Power
         electronics etc.
        </ListItem>
        <ListItem>
         I aim to begin a phd in machine learning.
        </ListItem>
      </UnorderedList>

      </Section>



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/PRigas96" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                @PRigas96
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:prigas96@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGoogle />}
              >
                prigas96@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>

        </Box>
      </Section>
    <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Credits
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.craftz.dog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogOutSharp />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA&t=350s" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoYoutube />}
              >
                @devaslife
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>

        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
