export default function GithubInputs({setRepo, setOrganization}) {
  const handleRepoInput = event => {
    setRepo(event.target.value);
  };
  const handleOrganizationInput = event => {
    setOrganization(event.target.value);
  };

  return (
    <>
      For example, if your project lived at github.com/rubyforgood/casa, then
      <strong> rubyforgood</strong> would be your <strong>organization</strong> and <strong>casa</strong> would be your <strong>repo</strong>.
      <br/>
      <br/>
      <input onChange={handleOrganizationInput} placeholder="Enter Github Organization"/><br/>
      <input onChange={handleRepoInput} placeholder="Enter Github Repository"/>
      <br/>
    </>
  );
}