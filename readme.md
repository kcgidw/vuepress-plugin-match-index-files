# matching-index-files

Straightforward Vuepress plugin that accepts a Markdown file as an index file if its name matches the directory's name.

This overrides any `README.md` or `index.md` in the same directory. If this occurs, Vuepress' build logs should notify you with something like: `warning Override existing page <AFFECTED_ROUTE_HERE>`

This might make searching through your Markdown files a little easier, and can also be useful if you want to have README's for another purpose.

## Options

**debug** `Boolean`:
<br>
Logs the resulting `additionalPages` value.
