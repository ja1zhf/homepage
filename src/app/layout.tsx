import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import PageWrapper from './page-wrapper';
import { Container, GlobalStyles } from '../styles/global';
import Navbar from './navbar/navbar';
import Scene from './scene/scene';

const inter = Arimo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ja1z?',
  description: 'Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <link rel="icon" href="/icon.png" />
        <body className={inter.className}>
          <Navbar />
          <Container>
            <Scene />
          </Container>
          <PageWrapper>
            {children}
          </PageWrapper>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
