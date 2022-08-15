import React, { useState } from 'react';
import SelectDpg from "./Selectdpg";
import Select from "react-select";
import SdgList from "./sdglist";
import GithubInputs from "./githubInputs";

export default function DpgTable() {
  const [dpgType, setDpgtype] = useState()
  const dpgData = dpgType === "Nominee" ? require('./Nominee.json') : require('./Accepted.json')
  const [value, setValue] = useState('')
  const [repo, setRepo] = useState()
  const [organization, setOrganization] = useState()


  return (
    <div className="App">
      <h3>Select DPG Type</h3>
      <SelectDpg dpgType={dpgType} setValue={setValue} setDpgtype={setDpgtype} value={value}/>
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
      {console.log(repo)}
      {value && <p>
        Selected DPG <strong>{value.name}</strong> Type: <strong>{dpgType}</strong>
      </p>}
      {value && <SdgList organization={organization} repo={repo} selectedSdg={value}/>}
    </div>
  );
}