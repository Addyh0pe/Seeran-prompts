import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
    title : 'seeran prompts',
    description : 'Discover And Share AI Prompts'
};

const RootLayout = ({children}) => {
  return (
    <html len='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
};

export default RootLayout;