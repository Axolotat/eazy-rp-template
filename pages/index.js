import * as chakra from "@chakra-ui/react";

import Head from 'next/head'
import { Nav } from '../components/Nav'
import {ConfigTemplate} from "../components/ConfigTemplate";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Template RPG</title>
        <meta name="description" content="Template RPG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <chakra.Tabs>
            <Nav />
            <chakra.TabPanels>
              <chakra.TabPanel>
                  <ConfigTemplate />
              </chakra.TabPanel>
              <chakra.TabPanel>
                  <p>two!</p>
              </chakra.TabPanel>
              <chakra.TabPanel>
                  <p>three!</p>
              </chakra.TabPanel>
              <chakra.TabPanel>
                  <p>three!</p>
              </chakra.TabPanel>
            </chakra.TabPanels>
        </chakra.Tabs>
    </main>

      <footer></footer>
    </div>
  )
}
