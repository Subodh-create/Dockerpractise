
import './App.css';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Header from './header/header';
import Mid from './mid/mid';
import Footer from './footer/footer';
import{BrowserRouter} from "react-router-dom"
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (   
 <>
 
 <BrowserRouter>
<Header>
</Header>
<MessengerCustomerChat
    pageId="101051192560301"
    appId="373305627976265"
  />
<Mid>

</Mid>



	{/* <!-- Footer --> */}
  <Footer>
    
  </Footer>
  </BrowserRouter>
  </>
  
  );
}

export default App;
