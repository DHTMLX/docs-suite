---
sidebar_label: AI tools (MCP)
title: AI tools (MCP)
description: AI tools (MCP)
sidebar_class_name: ai-icon
---

# Getting started with DHTMLX MCP server

AI coding assistants often rely on training data that may not include the latest updates. As a result, generated code may reference outdated APIs or missing features. 

The DHTMLX MCP server allows AI tools to retrieve up-to-date documentation for DHTMLX components while generating responses. By connecting an assistant to the MCP endpoint, developers can generate code examples, query APIs, and access configuration details based on the current documentation.

#### MCP endpoint

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server is a shared service for all major DHTMLX products, not only DHTMLX Suite. The configuration instructions apply to any DHTMLX component you are working with.
:::

Typical use cases include:

- Retrieving documentation for a specific component.
- Generating code examples based on current APIs.
- Understanding configuration options, methods, and events.

## How DHTMLX MCP server works

The DHTMLX MCP server uses a Retrieval-Augmented Generation (RAG) pipeline combined with the Model Context Protocol (MCP) to provide AI assistants with up-to-date documentation.

At a high level:

1. The AI assistant sends a query through MCP.
2. The server determines which product documentation is relevant.
3. Documentation content is retrieved from a vector index.
4. The retrieved context is sent back to the assistant.
5. The assistant generates a response using that context.

This approach allows AI tools to generate answers based on current documentation rather than training data alone.

## Setup

Most AI development tools allow adding MCP endpoints through either a CLI command or a JSON configuration file.
The configuration generally consists of registering the MCP server URL.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Below are examples for commonly used tools.

### Claude Code

:::info
Learn how to connect Claude Code with MCP in the [official documentation](https://code.claude.com/docs/en/mcp).
:::

The quickest way is to add the MCP server URL through the CLI:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Or if you prefer manual configuration, add this to your `mcp.json`:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor

:::info
For detailed instructions, see the [official documentation](https://cursor.com/en-US/docs/mcp).
:::

Follow the steps below:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste this config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Gemini CLI

:::info
The [official documentation](https://geminicli.com/docs/tools/mcp-server/) provides a complete guide to configuring and using MCP servers with the Gemini CLI.
:::

To connect via the CLI, use:

~~~jsx
gemini mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Alternatively, you can find your config file at `~/.gemini/settings.json` and add:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Restart Gemini CLI after saving the file.

### Antigravity (Google)

:::info
Learn more about connecting MCP servers in the [official documentation](https://antigravity.google/docs/mcp).
:::

These are the steps to complete:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL: 
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

### ChatGPT

:::info
For more information, consult the [official documentation](https://developers.openai.com/api/docs/guides/tools-connectors-mcp).
:::

Follow these steps:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to the **Apps & Connectors** screen and click "Create"
5. Configure the connector:
- Name: 
~~~jsx
dhtmlx-mcp
~~~
- URL: 
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

Once added, ChatGPT can retrieve documentation from the MCP server during conversations.

:::warning 
For intensive coding workflows, other MCP-aware tools may be more efficient.
:::

### Other tools

Most modern AI coding tools expose MCP under "Model Context Protocol", "Context Sources", or similar wording in settings. Add `https://docs.dhtmlx.com/mcp` as a custom source.

## Privacy and data handling

The MCP server is a hosted service.

Key points:

- It does not run locally.
- It does not access files in your environment.
- It does not store personal user information.

Queries may be logged for debugging and service improvements.

Organizations that require stricter privacy guarantees can request commercial deployment options with no query logging.
For inquiries: `info@dhtmlx.com`.

## Usage tips

Once the MCP server is configured, use concrete, task-oriented prompts so the assistant can call the docs effectively.

You can copy and test the example prompts given below:

~~~
How do I add custom validation to DHTMLX Form? Use the docs.
~~~
~~~
I want to create a layout with a calendar in one cell, and a grid in another.
~~~
~~~
I want to create a grid with the possibility to sort, resize and edit column cells.
~~~
~~~
I have a chart with the bar type, how can I also add a line chart above it?
~~~
~~~
I want to create two grids with the possibility to drag item rows from one grid to another, but not vice versa.
~~~

More specific prompts result in more relevant snippets and fewer follow-up questions.

**Related sample**: [Kanban and Chatbot. Example built with MCP](https://snippet.dhtmlx.com/rp3dzkei)

