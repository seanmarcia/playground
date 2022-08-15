import SDGTABLE from "./SDGTABLE";
import {CopyBlock, github} from "react-code-blocks";

export default function SdgList({organization, repo, selectedSdg}) {
  const initialRows = ['<p align="center">',
    '<a href="https://digitalpublicgoods.net">',
    '<img src="https://user-images.githubusercontent.com/667909/181150972-e59a77ab-b657-4893-aef9-d3df1384a506.png" alt="DPG Approved" height="40">',
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
    `<a href="https://github.com/${organization}/${repo}/graphs/contributors" alt="Contributors"> <img src="https://img.shields.io/github/contributors/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/issues" alt="Contributors"> <img src="https://img.shields.io/github/issues-closed/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/pulse" alt="Vulnerabilities"><img src="https://img.shields.io/snyk/vulnerabilities/github/${organization}/human-essentials?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/search" alt="Languages"><img src="https://img.shields.io/github/languages/count/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/search" alt="Languages"><img src="https://img.shields.io/github/languages/top/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}" alt="Size"><img src="https://img.shields.io/github/repo-size/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/pulls" alt="Pull Requests"><img src="https://img.shields.io/github/issues-pr-closed-raw/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}" alt="LICENSE"><img src="https://badgen.net/github/license/${organization}/${repo}?icon=github&color=green" /></a>`,
    `<a href="https://github.com/badges/shields/pulse" alt="Activity"><img src="https://img.shields.io/github/commit-activity/m/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/commits/main" alt="Last Commit"><img src="https://img.shields.io/github/last-commit/${organization}/${repo}?logo=github" /></a>`,
    `<a href="https://github.com/${organization}/${repo}/commits/main" alt="Total Commits"><img src="https://badgen.net/github/commits/${organization}/${repo}/main?icon=github&color=green" /></a>`,
    '</p>',
    '<p align="center">',
    `<a href="https://github.com/${organization}/${repo}" alt="Stars"><img src="https://img.shields.io/github/stars/${organization}/${repo}?style=social" /></a>`,
    `<a href="https://github.com/${organization}/${repo}" alt="Forks"><img src="https://img.shields.io/github/forks/${organization}/${repo}?style=social" /></a>`,
    `<a href="https://github.com/${organization}/${repo}" alt="Watchers"><img src="https://img.shields.io/github/watchers/${organization}/${repo}?style=social" /></a>`,
    '</p>',
    '',
    '---',
    '',
    '## Use as an Organization or Contribute as an Individual/Team to this Project',
    '',
    '### [NGO Adoption Info](ngo.md)',
    '### [Contributor Info](contribute.md)',
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
    <div>
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