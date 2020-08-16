const alfy = require("alfy");
const gql = require("graphql-tag");
const printer = require("graphql/language/printer");

// main
const teamName = process.env.KIBELA_TEAM_NAME || "";
const accessToken = process.env.KIBELA_ACCESS_TOKEN || "";

if (!teamName || !accessToken) {
  `Please set kibela team name and access token to Workflow Environment Variables. https://www.alfredapp.com/help/workflows/advanced/variables/`;
}

const keyword = alfy.input;
const query = gql`
    query {
      search(query: "${keyword}", first: 10) {
        nodes {
          title
          url
        }
      }
    }
  `;

alfy
  .fetch(`https://${teamName}.kibe.la/api/v1`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "alfred-kibela-workflow",
    },
    body: {
      query: printer.print(query),
      variables: {},
    },
  })
  .then((resp) => {
    const items = resp.data.search.nodes.map((node) => ({
      title: node.title,
      subtitle: node.url,
      arg: node.url,
    }));

    alfy.output(items);
  });
