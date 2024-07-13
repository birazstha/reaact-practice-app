import {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 
`;

const menuItems = [
  {
    text: 'Home',
    href: '#',
  },
  {
    text: 'Gallery',
    href: '#',
  },
  {
    text: 'About Us',
    href: '#',
  },
  {
    text: 'Contact',
    href: '#',
  },
];

function App () {
  return (
    <div>
      <GlobalStyle />
      <Header logoTitle="BIRAJ SHRESTHA" menuItems={menuItems} />
      <Hero />
      <Projects />

    </div>
  );
}

export default App;
