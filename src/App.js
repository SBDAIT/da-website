import React, { Component } from "react";
import { 
  Route, 
  BrowserRouter, 
  Switch
} from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css'

/* DA Office */
import HomePage from './components/pages/Home';
import MeetYourDAPage from './components/pages/DA Office/MeetYourDA';
import MissionStatementPage from './components/pages/DA Office/MissionStatement';
import DutiesPage from './components/pages/DA Office/DutiesResponsibilities';
import CareersPage from './components/pages/DA Office/Careers';
import DASpeakerBureau from './components/pages/DA Office/DASpeakerBureau';
import ManagementTeam from './components/pages/DA Office/ManagementTeam';
import Externship from './components/pages/DA Office/Externship'
import Budget from './components/pages/DA Office/Budget'
import Press from './components/pages/DA Office/Press'
import Stats from './components/pages/DA Office/Stats'

/* Prosecution */
import CriminalComplaints from './components/pages/Prosecution/CriminalComplaints';
import DomesticViolence from './components/pages/Prosecution/DomesticViolence';
import ElderAbuse from './components/pages/Prosecution/ElderAbuse';
import GangUnit from './components/pages/Prosecution/GangUnit';
import NarcoticUnit from './components/pages/Prosecution/NarcoticUnit';
import RealEstate from './components/pages/Prosecution/RealEstate';
import RuralCrime from './components/pages/Prosecution/RuralCrime';
import SexualAssault from './components/pages/Prosecution/SexualAssault';
import IdentityTheft from './components/pages/Prosecution/IdentityThetf';
import HateCrimes from './components/pages/Prosecution/HateCrimes';
//import OnlinePredators from './components/pages/Prosecution/OnlinePredators';
//import BadCheckCases from './components/pages/Prosecution/BadCheckCases';
import DiversionProgram from './components/pages/Prosecution/DiversionProgram';
import NRJP from "./components/pages/Prosecution/NRJP";

/* Civil */

import ConsumerMediation from "./components/pages/Civil Prosecution/ConsumerMediation";
import ConsumerTips from "./components/pages/Civil Prosecution/ConsumerTips";
import ConsumerProtection from "./components/pages/Civil Prosecution/ConsumerProtection";
import EnvironmentalLaw from "./components/pages/Civil Prosecution/EnvironmentalLaw";
import LegalResources from "./components/pages/Civil Prosecution/LegalResources";

/* Investigations */
import ProsecutionSupport from './components/pages/Investigations/ProsecutionSupport';
import WelfareFraud from './components/pages/Investigations/WelfareFraud';
import WorkersCompFraud from './components/pages/Investigations/WorkersCompFraud';
import MostWanted from './components/pages/Investigations/MostWanted';

/* Victim Witness */
import ChildAbuse from './components/pages/Victim Witness/ChildAbuse';
import VictimComp from './components/pages/Victim Witness/VictimComp';
import CrimeVictimAssistance from './components/pages/Victim Witness/CrimeVictimAssistance';
import VWDV from './components/pages/Victim Witness/VWDV';
import VWSexualAssault from './components/pages/Victim Witness/VWSexualAssault';
import VWUnit from './components/pages/Victim Witness/VWUnit';

/* FAQs */
import CriminalJustice  from './components/pages/FAQ/CriminalJustice';
import FAQ from './components/pages/FAQ/FAQs';
import LegalLinks from './components/pages/FAQ/LegalLinks';
import Publications from './components/pages/FAQ/Publications';

import Contact from './components/pages/Contact';


import './App.css';


class App extends Component {

  render() {
    return (
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/da/home" component={HomePage}/>
          
          <Route exact path="/da/meet-your-da" component={MeetYourDAPage}/>
          <Route exact path="/da/mission" component={MissionStatementPage} />
          <Route exact path="/da/stats" component={Stats} />
          <Route exact path="/da/duties-responsibilities" component={DutiesPage} />
          <Route exact path="/da/careers" component={CareersPage} />
          <Route exact path="/da/da-speaker-bureau" component={DASpeakerBureau} />
          <Route exact path="/da/criminal-complaints" component={CriminalComplaints} />
          <Route exact path="/da/nrjp" component={NRJP}/>
          <Route exact  path="/da/domestic-violence" component={DomesticViolence} />
          <Route exact  path="/da/elder-abuse" component={ElderAbuse} />
          <Route exact  path="/da/gang-unit" component={GangUnit} />
          <Route  exact path="/da/narcotic-unit" component={NarcoticUnit} />
          <Route exact  path="/da/real-estate" component={RealEstate} />
          <Route exact  path="/da/rural-crime" component={RuralCrime} />
          <Route exact  path="/da/sexual-assault" component={SexualAssault} />
          <Route exact  path="/da/identity-theft" component={IdentityTheft} />
          <Route exact  path="/da/hate-crimes" component={HateCrimes} />
          <Route  exact path="/da/diversion-program" component={DiversionProgram} />
          <Route exact  path="/da/prosecution-support" component={ProsecutionSupport} />
          <Route exact  path="/da/welfare-fraud" component={WelfareFraud} />
          <Route exact  path="/da/workers-compensation-fraud" component={WorkersCompFraud} />
          <Route exact  path="/da/most-wanted" component={MostWanted} />
          <Route exact  path="/da/child-abuse" component={ChildAbuse} />
          <Route exact  path="/da/victim-compensation" component={VictimComp} />
          <Route exact  path="/da/vwdv" component={VWDV} />
          <Route exact  path="/da/vw-sexual-assault" component={VWSexualAssault} />
          <Route exact  path="/da/victim-witness-unit" component={VWUnit} />
          <Route exact  path="/da/crime-victim-assistance" component={CrimeVictimAssistance} />
          <Route exact  path="/da/criminal-justice-system" component={CriminalJustice} />
          <Route exact  path="/da/legal-links" component={LegalLinks} />
          <Route exact  path="/da/faqs" component={FAQ} />
          <Route exact  path="/da/publications" component={Publications} />
          <Route exact  path="/da/externship" component={Externship} />
          <Route exact  path="/da/management-team" component={ManagementTeam} />
          <Route exact  path="/da/budget" component={Budget} />
          <Route exact  path="/da/contact" component={Contact} />
          <Route exact  path="/da/press" component={Press} />
          <Route exact  path="/da/consumer-mediation" component={ConsumerMediation} />
          <Route exact  path="/da/consumer-protection" component={ConsumerProtection} />
          <Route exact  path="/da/consumer-tips" component={ConsumerTips} />
          <Route exact  path="/da/environmental-law" component={EnvironmentalLaw} />
          <Route exact  path="/da/legal-resources" component={LegalResources} />
           <Route path="/" component={HomePage} /> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
