import SDGTABLE from "./SDGTABLE";
import {CopyBlock, github} from "react-code-blocks";

export default function SdgList({organization, repository, stage, selectedSdg}) {
  const repopath = new URL(repository.url).pathname

  const nomineeUrl = "https://raw.githubusercontent.com/seanmarcia/demorepo/main/UN%20DPG%20Badge%20Nominee.png"

  const acceptedUrl = "https://user-images.githubusercontent.com/667909/181150972-e59a77ab-b657-4893-aef9-d3df1384a506.png\" alt=\"DPG Approved"

  const visibleUrl = stage === "DPG" ? acceptedUrl : nomineeUrl

  const initialRows = ['<p align="center">',
    '<a href="https://digitalpublicgoods.net">',
    `<img src="${visibleUrl}" height="40">`,
    '</a>',
    '</p>',
    '',
    '---',
    '',
    `### ${selectedSdg.name} is recognized by the United Nation\'s [Digital Public Good](https://digitalpublicgoods.net/registry/) initiative`,
    '',
    '#### This project supports the following sustainable development goals:'
  ];
  const rows = [];
  const endRows = [
    '',
    '---',
    '',
    '',
    '<p align="center">',
     '<h2 align="center">GitHub Stats at a Glance</h2>',
    `<a href="https://github.com${repopath}/graphs/contributors" alt="Contributors"> <img src="https://img.shields.io/github/contributors${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/issues" alt="Contributors"> <img src="https://img.shields.io/github/issues-closed${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/pulse" alt="Vulnerabilities"><img src="https://img.shields.io/snyk/vulnerabilities/github/${organization}/human-essentials?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/search" alt="Languages"><img src="https://img.shields.io/github/languages/count${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/search" alt="Languages"><img src="https://img.shields.io/github/languages/top${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/ alt="Size"><img src="https://img.shields.io/github/repo-size${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/pulls" alt="Pull Requests"><img src="https://img.shields.io/github/issues-pr-closed-raw${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/ alt="LICENSE"><img src="https://badgen.net/github/license${repopath}?icon=github&color=green" /></a>`,
    `<a href="https://github.com/badges/shields/pulse" alt="Activity"><img src="https://img.shields.io/github/commit-activity/m${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/commits/main" alt="Last Commit"><img src="https://img.shields.io/github/last-commit${repopath}?logo=github" /></a>`,
    `<a href="https://github.com${repopath}/commits/main" alt="Total Commits"><img src="https://badgen.net/github/commits${repopath}/main?icon=github&color=green" /></a>`,
    '</p>',
    '<p align="center">',
    `<a href="https://github.com${repopath}/ alt="Stars"><img src="https://img.shields.io/github/stars${repopath}?style=social" /></a>`,
    `<a href="https://github.com${repopath}/ alt="Forks"><img src="https://img.shields.io/github/forks${repopath}?style=social" /></a>`,
    `<a href="https://github.com${repopath}/ alt="Watchers"><img src="https://img.shields.io/github/watchers${repopath}?style=social" /></a>`,
    '</p>',
    '',
    '---',
    '',
    '## Use as an Organization or Contribute as an Individual/Team to this Project',
    '',
    '### [NGO Adoption Info](ngo.md)',
    '### [Skills Based Volunteering Info](sbv.md)',
    '',
    '---'
  ];

  let sdg = null;

  selectedSdg.SDGs.forEach((sdgitem) => {
    sdg = SDGTABLE.find(el => el.id === sdgitem.SDGNumber)
    rows.push(
      `* [SDG ${sdg.id}](${sdg.url}) - ${sdg.name}`
    );
  });

  let combinedRows = initialRows.concat(rows, endRows);
  return (
    <div data-theme="test">
      <CopyBlock
        language="markdown"
        text={combinedRows.join('\n')}
        codeBlock
        theme={github}
        showLineNumbers={true}
      />
    </div>
  );
}