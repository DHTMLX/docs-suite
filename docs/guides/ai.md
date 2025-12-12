---
sidebar_label: AI tools (MCP)
title: AI tools (MCP)
description: AI tools (MCP)
sidebar_class_name: ai-icon
---

# Getting Started with DHTMLX MCP Server

If you're using AI coding assistants like Claude, Cursor, or ChatGPT, you've probably noticed they sometimes struggle with library-specific code. They might suggest outdated APIs or miss the latest features. That's exactly the problem our MCP server solves.

## What's MCP and Why Should You Care?

Model Context Protocol (MCP) is basically a way to feed your AI assistant fresh, accurate information about specific tools and libraries. Think of it as giving your AI a direct line to our documentation.

Here's the deal: LLMs are trained on data up to a certain date. They don't automatically know about that new feature we released last month or the API change we made in the latest version. The DHTMLX MCP server bridges this gap by providing real-time access to our docs and a smart RAG (Retrieval-Augmented Generation) system that finds exactly what you need.

**Server URL:** `https://docs.dhtmlx.com/mcp`

## What You Get

When you connect your AI tool to our MCP server, it can:

- Pull the latest documentation for any DHTMLX product
- Generate accurate code snippets based on current APIs
- Answer questions about configuration, events, methods — you name it

The best part? It covers **all major DHTMLX products**:
- Gantt
- Scheduler
- Suite (Grid, Form, TreeGrid, and more)
- Kanban
- Pivot
- Spreadsheet
- Diagram
- RichText

One server, all products. Simple.

## A Note on Privacy

The MCP server is a hosted service — it doesn't run locally and doesn't access your files. We don't store personal information about users. Queries might be logged for debugging and improving the service, but if that's a concern for you, drop us a line at `info@dhtmlx.com`. We offer commercial options with strict no-logging policies.

## Setting It Up

Let's get you connected. Pick your tool below.

### Claude Code

The quickest way is through the CLI:

```bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
```

Or if you prefer manual configuration, add this to your `mcp.json`:

```json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
```

### Cursor

Cursor makes this pretty straightforward:

1. Open Settings (Cmd+Shift+J on Mac, Ctrl+Shift+J on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste this config:

```json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
```

Now you can ask things like "Check DHTMLX docs for how to add a custom column to Gantt" right in your chat.

### Gemini CLI

Find your config file at `~/.gemini/settings.json` and add:

```json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
```

Restart Gemini CLI and you're good to go.

### Antigravity (Google)

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Enter URL: `https://docs.dhtmlx.com/mcp`
5. Enter Name: `dhtmlx-mcp`

Done.

### Other Tools

Most modern AI coding tools have MCP support somewhere in their settings. Look for "Model Context Protocol", "Context Sources", or similar. Add `https://docs.dhtmlx.com/mcp` as a custom source.

### ChatGPT

Fair warning: MCP with ChatGPT works, but it's not the smoothest experience. Responses can take around 20 seconds. If you're doing serious coding, one of the other tools above will serve you better.

But if ChatGPT is your thing:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Go back — you'll now see a "Create" button on the Connectors screen
5. Click it and fill in:
   - Name: `dhtmlx-mcp`
   - URL: `https://docs.dhtmlx.com/mcp`
   - Authentication: `No authentication`
6. Hit **Create**

You can now ask ChatGPT to "consult the DHTMLX MCP server" when you need help with any of our components.

## Tips for Best Results

Once connected, try prompts like:
- "Using DHTMLX docs, show me how to implement drag and drop in Scheduler"
- "Check DHTMLX MCP for Gantt task editing configuration"
- "How do I add custom validation to DHTMLX Form? Use the docs."

The more specific you are, the better results you'll get. Happy coding!
