import React from 'react';

import { GlobalStyle } from './styled/GlobalStyle';
import { MainView, Button, Paragraph } from './styled';
import Header from './components/Header';


function App() {
  return (
    
    <div className="App">
      <GlobalStyle />
      <Header />
      
      <MainView background="black" color="red" backgroundHover="red" colorHover="black">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sequi architecto aliquid dolor quod molestiae, odit quam iste hic necessitatibus, facilis a similique error laborum corporis maxime illum numquam ut omnis tenetur ex nostrum, quisquam veniam aliquam! Aliquam, alias perferendis.</Paragraph>
      </MainView>

      <MainView>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sequi architecto aliquid dolor quod molestiae, odit quam iste hic necessitatibus, facilis a similique error laborum corporis maxime illum numquam ut omnis tenetur ex nostrum, quisquam veniam aliquam! Aliquam, alias perferendis.</Paragraph>
      </MainView>

      <Button>Hello</Button>
    </div>
  );
}

export default App;
