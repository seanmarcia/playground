import React, { useState } from 'react';
import SelectDpg from "./Selectdpg";
import Select from "react-select";
import SdgList from "./sdglist";
import GithubInputs from "./githubInputs";
import SkillsBased from './skillsbased';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function DpgTable() {
  const [dpgType, setDpgtype] = useState()
  const dpgData = dpgType === "Nominee" ? require('./Nominee.json') : require('./Accepted.json')
  const [value, setValue] = useState('')
  const [repo, setRepo] = useState()
  const [organization, setOrganization] = useState()


  return (

    <div>
    <Tabs>
    <TabList>
      <Tab>README</Tab>
      <Tab>NGO</Tab>
      <Tab>Contributing</Tab>
    </TabList>

    <TabPanel>
    <div class="row">
      <div class="column">
        <p class="notice">
        <strong>Select Your Type of DPG</strong><br />
        <SelectDpg dpgType={dpgType} setValue={setValue} setDpgtype={setDpgtype} value={value}/>
        {dpgType && <span>Select The Digital Public Good</span>}
        {dpgType && <Select
        name="dpgs"
        options={dpgData}
        value={value}
        onChange={setValue}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        />}
        <br/>
        {dpgType && <GithubInputs setRepo={setRepo} setOrganization={setOrganization} />}
        {value && <p>
           Selected DPG <strong>{value.name}</strong> Type: <strong>{dpgType}</strong>
        </p>}
        </p>
      </div>
      <div class="column">
        <div className="main">
          <p class="notice">
            {value && <SdgList organization={organization} repo={repo} selectedSdg={value}/>}
          </p>
        </div>
      </div>
    </div>

    </TabPanel>
    <TabPanel>
    {value && <SkillsBased />}

    </TabPanel>
  </Tabs>
  </div>

  );
}