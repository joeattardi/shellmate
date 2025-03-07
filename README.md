# Shellmate

Shellmate is a CLI tool that uses AI to translate a description into a valid shell command. It supports local models using Ollama, or OpenAI models.

**NOTE**: AI models, especially less powerful ones running locally on your computer, may hallucinate and generate commands that are incorrect or invalid. You should verify the generated command is correct if there is a chance it could modify or delete something that you don't want it to.

## Installation

```
npm install -g shellmate
```

## Configuration

Create a file in your home directory called `shellmate.json`. It should contain a `provider` property. This is the AI provider to use. To use a local LLM with Ollama, set this to `ollama`. To use the OpenAI API, set this to `openai`.

See the sections below for provider configuration options.

### Using Ollama

In `shellmate.json`, set `provider` to `ollama`. Then, add an `ollama` property to the configuration with the following properties:

- `model`: The name of the model to use. Make sure you have already downloaded this model by running `ollama pull <model>`.

Here is an example `shellmate.json` configured to use Ollama:

```
{
    "provider": "ollama",
    "ollama": {
        "model": "llama3.2"
    }
}
```

### Using OpenAI

In `shellmate.json`, set `provider` to `openai`. Then, add an `openai` property to the configuration with the following properties:

- `apiKey`: Your OpenAI API key.
- `model`: The name of the OpenAI model to use.

Here is an example `shellmate.json` configured to use OpenAI:

```
{
    "provider": "openai",
    "openai": {
        "apiKey": "<your-api-key>",
        "model": "gpt-4o-mini"
    }
}
```

## Running Shellmate

Run the `shellmate` command, specifying a description of the command you'd like to generate enclosed in quotes:

```
shellmate "Generate a 2048-bit RSA ssh key"
```

Shellmate will talk to the model, then return the command for you to run.
