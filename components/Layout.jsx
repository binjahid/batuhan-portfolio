import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Footer, Navbar } from '.';
import { useRouter } from 'next/router';
import ScrollProgress from './ScrollProgress';
const Layout = ({ children }) => {
    const router = useRouter();

    return (
      <>
        <Head>
          <title>Batuhan Faik</title>
          <meta
            name="description"
            content="Personal Portfolio of Batuhan Faik"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Box height={"100%"}>
          {router.pathname === "/" ? (
            <Box
              as={"header"}
              position={"absolute"}
              width={"100%"}
              top={0}
              zIndex={10000}
            >
              <Navbar />
            </Box>
          ) : (
            <header>
              <Navbar />
            </header>
          )}
          <AnimatePresence
            onExitComplete={() => window.scrollTo(0, 0)}
            exitBeforeEnter
          >
            <motion.main
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={{
                hidden: {
                  opacity: 0,
                  translateY: "-600px",
                  rotateX: "-30deg",
                  scale: 0,
                },
                enter: {
                  opacity: 1,
                  translateY: "0px",
                  rotateX: "0deg",
                  scale: 1,
                },
                exit: { opacity: 0, x: 0, y: -100 },
              }}
              transition={{ type: "linear", duration: 0.5 }}
              key={router.route}
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <ScrollProgress />
          <footer className={router.pathname === "/" ? "homeFooter" : ""}>
            <Footer />
          </footer>
        </Box>
      </>
    );
};

export default Layout;
