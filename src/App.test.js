import React from 'react';
import { create } from "react-test-renderer";

import FooterComp from  './components/footer/footer.component';
import HeaderComp from  './components/header/header.component';

/*it('render correctly HeaderComp component', () => {  
  const comp = create(<HeaderComp />).toJSON();
  expect(comp).toMatchSnapshot();
});*/

it('render correctly FooterComp component', () => {  
  const comp = create(<FooterComp />).toJSON();
  expect(comp).toMatchSnapshot();
});
