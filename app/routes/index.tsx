import type { MetaFunction, LinksFunction, RouteComponent } from 'remix';
import { block } from 'remix';
import { motion } from 'framer-motion';

import { FunHoverLink } from '../components/fun-hover-link';

const meta: MetaFunction = () => ({
  title: 'Logan McAnsh',
  description: 'personal website for logan mcansh',
});

const links: LinksFunction = () => [
  block({
    rel: 'preload',
    as: 'image',
    href: '/me.jpg',
  }),
];

const IndexPage: RouteComponent = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-full max-w-screen-md px-4 py-8 mx-auto "
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: 'spring',
      damping: 40,
      stiffness: 200,
    }}
  >
    <div className="flex flex-col items-center justify-center flex-1">
      <img
        src="/me.jpg"
        alt="Why it's me, Logan McAnsh"
        height={240}
        width={240}
        placeholder="transparent"
        className="rounded-full"
      />
      <h1 className="mt-4 text-4xl">Logan McAnsh</h1>
      <p className="text-lg text-center sm:text-xl">
        Making{' '}
        <FunHoverLink
          href="https://blog.powerley.com/utilities-are-giving-the-home-a-voice-and-a-brain/?utm_source=mcan.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advisor
        </FunHoverLink>{' '}
        and Home Profile for{' '}
        <FunHoverLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.powerley.com"
        >
          Powerley
        </FunHoverLink>
      </p>
    </div>
    <FunHoverLink href="/resume">Resume</FunHoverLink>
  </motion.div>
);

export default IndexPage;
export { meta, links };