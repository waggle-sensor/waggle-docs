
# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
---
id: my-doc-id
title: My document title
description: My document description
keywords:
  - example
  - keyword
slug: /my-custom-url
---

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a document](/create-a-document).
```

```md
Let's see how to [Create a document](./create-a-document.md).
```

**Result:** Let's see how to [Create a document](./create-a-document.md).

## Images

Regular Markdown images are supported.

Add an image at `static/img/Sage.png` and display it in Markdown:

```md
![Sage logo](../static/img/logo.png)
```

![Sage logo](../static/img/logo.png)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```python title="src/HelloSage.py"
    def HelloSage():
      return 'Hello, Sage!'
    ```

```python title="src/HelloSage.py"
def HelloSage():
  return 'Hello, Sage!'
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::




:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
