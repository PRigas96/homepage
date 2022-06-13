import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Title, WorkImage, Meta } from '../components/work'


import thumbesek from '../public/images/works/work1/icon_central.png'
import thumbsmps from '../public/images/works/work2/small_icon_2.png'
import thumbpid from '../public/images/works/work4/icon10.jpg'
import thumbexcell from '../public/images/works/work5/icon5.png'
import thumbarm from '../public/images/works/work6/icon_central.png'
import thumbrs from '../public/images/works/work7/icon_central.png'
import thumbbio from '../public/images/works/work8/icon_central.png'



const Works = () => (

  <Layout title="Works">
    <WorkImage src="/images/home1.png" />
    <Container>

      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="esek" title="ESEK Analysis" thumbnail={thumbesek}>
            Heading/Organising a team tasked with analysing/findingsolutions the
             National Plan for the Environment and Energy Issues.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="smps"
            title="Analysing a DC/DC SMPS (Flyback Converter)"
            thumbnail={thumbsmps}
          >
            Leading a team in analysing a Reference Design of a DC/DC SMPS,
             recreating it,with improvements in the feedback loop and simulating it.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pid"
            title="Creating a PID controller"
            thumbnail={thumbpid}
          >
            Analysing/simplifying a system and creating a PID controller.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="excellapp" thumbnail={thumbexcell} title="Data Analysis App for Excel">
            Creating a Data Analysis app for a user to analyse data in excel.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="arm" thumbnail={thumbarm} title="UI for a calculator in ARM keil">
            Create a UI for user to do basic calculations in ARM keil.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="rspython" thumbnail={thumbrs} title="Remote Sensing for Environmental damage evaluation">
            Used remote sensing to evaluate the damage done by fire.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="biomod" thumbnail={thumbbio} title="Mathematical Modeling of Bioelectric Dynamics">
            Modeling and Simulation of basic bioelectric dynamics.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
