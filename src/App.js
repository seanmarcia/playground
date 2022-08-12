import './Simple.css';
import SelectDpg from './Selectdpg.js';
import Autocomplete from './Autocomplete';
import Select from 'react-select'
import SDGTABLE from './SDGTABLE.js'

import { useState } from 'react';

function SdgList({selectedSdg}) {
  const rows = [];
  let sdg = null;

  selectedSdg.SDGs.forEach((sdgitem) => {
    sdg = SDGTABLE.find(el => el.id === sdgitem.SDGNumber)
    rows.push(
      <SdgRow sdg={sdg} key={sdg.name}/>
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
}

function SdgRow({ sdg }) {
  return (
    <p>
      {`* <h1>${sdg.id} ${sdg.name} ${sdg.url}\n`}
    </p>
  );
}

function DpgRow({ dpg }) {
  return (
    <tr>
      <td>{dpg.name}</td>
    </tr>
  );
}

function SearchBar({
  filterText,
  onFilterTextChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Find Your DPG..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  );
}

function ProductTable({ products, filterText }) {
  const rows = [];

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    rows.push(
      <DpgRow
      dpg={product}
        key={product.name} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function App() {
  const [dpgType, setDpgtype] = useState()
  const [filterText, setFilterText] = useState('')
  const [selectedDpg, setSelectedDpg] = useState()

  const dpgData = dpgType === "Nominee" ? require('./Nominee.json') : require('./Accepted.json')

  const [value, setValue] = useState('')


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
        getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
      /> }

      {/* <Select options={dpgData.map(user => user.name)} onChange={handler}/> */}

      {/* {dpgType && <Autocomplete selectedDpg setSelectedDpg suggestions={dpgData.map(user => user.name)} /> } */}
      {/* {dpgType && <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />} */}
      {/* {dpgType && <ProductTable products={dpgData} filterText={filterText} />} */}
      {value && <p>
        Selected DPG <strong>{value.name}</strong>
      </p>}
      {value && <SdgList selectedSdg={value} />}
      <p>{`<h1>blah blah blah ${SDGTABLE.find(el => el.id === 2).name} blah`}</p>
    </div>
  );
}