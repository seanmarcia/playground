import React, {useState} from 'react';
import Select from "react-select";
import SdgList from "./sdglist";
import GithubInputs from "./githubInputs";

export default function DpgTable() {
  const [dpgType, setDpgtype] = useState()
  const [value, setValue] = useState('')
  const [repo, setRepo] = useState()
  const [organization, setOrganization] = useState()
  const [repository, setRepository] = useState()

  const nomData = require('./Nominee.json')
  const accData = require('./Accepted.json')
  const allData = nomData.concat(accData)
  const allData1 = allData.sort((a, b) => (a.id).localeCompare(b.id));

  return (
    <>

      <div data-theme="general-insights">
        <h2>Instructions</h2>
        <p>This tool is designed to generate HTML code for GitHub ReadMe files for digital public goods (DPGs) listed on
          the <a href="https://digitalpublicgoods.net/registry/">DPGA registry</a>. Before using this tool, please
          verify:</p>
        <ul>
          <li>The name of the DPG and if it is certified or a nominee.</li>
          <li>Typographic best practices.</li>
          <li>This tool assumes that you have, or will have created a ngo.md file in the repository containing information for NGOs who may wish to adopt your project.</li>
          <li>This tool also assumes that you have, or will have created a sbv.md file in the repository containing information for teams of skills based volunteers who may wish to work on your project as volunteers.</li>
          <li>Typographic best practices.</li>
          <li>That you have write access (or higher) on the repository.</li>
        </ul>
        <p>Fill out the fields below, click the button to generate your code, and copy the code into your repository
          ReadMe.</p>
      </div>

      <div data-theme="test">
        <h2>Generate your ReadMe Code</h2>
        <p><strong>Select Your DPG</strong></p>
        <Select
          name="dpgs"
          options={allData1}
          value={value}
          onChange={setValue}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
        <br/>
        {value && <strong>Select Your Base Repo</strong>}
        {value && <Select
          name="reposistories"
          options={value.repositories}
          value={repository}
          onChange={setRepository}
          getOptionLabel={(option) => option.url}
          getOptionValue={(option) => option.url}
        />
        }
        {dpgType && <GithubInputs setRepo={setRepo} setOrganization={setOrganization}/>}
        {repository && <p>
          Selected
          DPG <strong>{value.name}</strong> Type: <strong>{value.stage} </strong>Repo: <strong>{repository.url}</strong>
        </p>
        }

      </div>
      {repository &&
        <SdgList organization={organization} stage={value.stage} repository={repository} selectedSdg={value}/>}
      {/*{repository && <SkillsBased/>}*/}
    </>
  );
}