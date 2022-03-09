import React from 'react';
import AppHero from '../component/home/banner';
import About from '../component/home/services';
import AppFeature from '../component/home/teamMember';
import AppAskQuestion from '../component/home/commentCustomer';
import AppForm from '../component/home/products';
function AppHome() {

    return (
        <div>
            <AppHero />
            <About />
            <AppForm/>
            <AppFeature/>
            <AppAskQuestion/>
       
        </div>

    );
}

export default AppHome;