import { ShortInfo, ShortInfoAvatar, ShortInfoTitle, Status } from '../styles/main';
import { Main, Container } from '../styles/global';
import Article from './article';

const data = {
  name: "ja1z?",
  bio: "Developer",
  status: "J'espère qu'un jour je vivrai sans soucis"
}

export default function Home() {
  return (
    <Article>
      <Main>
        <Container>
          <Status>{data.status}</Status>
        </Container>
        <Container>
          <ShortInfo>
            <ShortInfoTitle>
              <h2>{data.name}</h2>
              <p>{data.bio}</p>
            </ShortInfoTitle>
            <ShortInfoAvatar src='/avatar.jpg' />
          </ShortInfo>
        </Container>
      </Main>
    </Article>
  )
}
