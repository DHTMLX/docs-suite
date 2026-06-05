---
sidebar_label: DHTMLX MCP server
title: Getting started with DHTMLX MCP server
description: Connect AI coding assistants to live DHTMLX Suite documentation via the MCP server. Covers Grid, Form, Tree, Calendar, and all other Suite UI components.
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

## Where MCP server helps with Suite

The MCP server indexes the full DHTMLX Suite documentation across all components. Common scenarios include:

- Looking up the current API for any Suite component, including [Grid](/grid/), [Form](/form/), [Chart](/chart/), [Tree](/tree/), [Calendar](/calendar/), and others.
- Generating ready-to-run initialization and configuration code for any component based on a description.
- Configuring [Grid](/grid/) features: sorting, filtering, inline editing, column resizing, and drag-and-drop between grids.
- Building [Form](/form/) layouts with validation rules, built-in controls, and event-driven behavior.
- Creating [Chart](/chart/) configurations across bar, line, pie, area, radar, and other chart types.
- Loading and managing data using [DataCollection](/data_collection/) across components.
- Handling component events to respond to user interactions, value changes, and data updates.
- Composing multiple components in a shared [Layout](/layout/) with rows, columns, and cells.
- Exploring [TypeScript support](/common_features/using_typescript/) and integration with [React](/integration/suite_and_react/), [Vue](/integration/suite_and_vue/), [Angular](/integration/suite_and_angular/), and [Svelte](/integration/suite_and_svelte/).

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

## Example prompts for Suite with AI

Once you connect the MCP server, phrase your prompts around a concrete goal so the assistant knows which component and feature to look up. The prompts below are organized by component. Copy and adapt them as needed.

**Grid**

~~~
I want to create a grid with the possibility to sort, resize and edit column cells.
~~~
~~~
I want to create two grids with the possibility to drag item rows from one grid to another, but not vice versa.
~~~
~~~
How do I apply multiple filters to a DHTMLX Grid?
~~~

**Form**

~~~
How do I add custom validation to DHTMLX Form? Use the docs.
~~~
~~~
How do I get all form values as an object and handle the afterSend event in DHTMLX Form?
~~~

**Chart**

~~~
I have a chart with the bar type, how can I also add a line chart above it?
~~~
~~~
How do I load data into a DHTMLX Chart from a JSON array?
~~~

**Layout and composition**

~~~
I want to create a layout with a calendar in one cell, and a grid in another.
~~~
~~~
How do I resize layout cells and handle the resize event in DHTMLX Layout?
~~~

**Related sample**: [Kanban and Chatbot. Example built with MCP](https://snippet.dhtmlx.com/rp3dzkei)

## Tips for effective Suite prompts

- **Name the component.** DHTMLX Suite contains many components, each with its own API. Always specify the component in your prompt (for example, "in DHTMLX Grid" vs. "in DHTMLX Form"). Without this, the assistant may retrieve documentation for the wrong component.
- **Include the feature or behavior.** Prompts like "drag-and-drop between two grids" or "form validation on send" retrieve more relevant documentation than a generic description. The more specific the feature, the more precise the retrieval.
- **Add "Use the docs"** to your prompt. This phrase signals to the assistant that it should trigger an MCP lookup instead of answering from training data alone. It is especially useful for event names, method signatures, and configuration properties that change between versions.
- **Describe the expected interaction.** Suite components often support multiple ways to achieve a goal (a configuration property, a method call, or an event handler). Describing the expected behavior helps the assistant pick the right approach.

