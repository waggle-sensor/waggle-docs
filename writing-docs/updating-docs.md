# Updating Docs

1. click "edit this page" at the bottom of the document of interest.
2. change the markdown
3. commit the file using either "Commit directly to the main branch" or "Create a new branch for this commit and start a pull request"

> _Note_: when review is needed, use a pull request (PR).  Github will automatically run a test build against pull requests.

4. If committing directly to main, ensure the update was deployed:

![github action status](./images/github-action-status.png)

> _Note_: it may take a few seconds/minutes for the deploy to be propagated to github's servers and show up at https://docs.sagecontinuum.org
