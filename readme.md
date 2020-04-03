# matching-index-files

Straightforward Vuepress plugin that accepts a Markdown file as an index file if its name matches the directory's name.

This overrides any README.md in the same directory. If this occurs, Vuepress' build logs should notify you with something like: `warning Override existing page <AFFECTED_ROUTE_HERE>`

## Options

**debug**: Logs the resulting `additionalPages` value.
