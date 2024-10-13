AlphaX is an AI-powered chatbot web application that allows users to interact with an AI model in a conversational style. It is built using Flask on the backend and communicates with the OpenRouter API to provide real-time AI responses. The frontend is designed using HTML, CSS, and JavaScript for an interactive and smooth user experience.

Table of Contents

Features

Demo

Requirements

Installation

Running Locally

Deployment

Environment Variables

Usage

License


Features

Real-time AI Responses: Integrates with the OpenRouter API to provide AI-powered conversational responses.

Modern UI: Clean, user-friendly interface with seamless chat flow.

Python Flask Backend: Lightweight and scalable backend built with Flask.

Deployable on PaaS: Easily deployable to platforms like Heroku, Render, and more.


Demo

Here's how the chat interface looks like:
  
Requirements
Python 3.8+
Flask
Requests
Gunicorn (for production)


Installation

1. Clone the repository:
git clone https://github.com/yourusername/AlphaX.git
cd AlphaX
2. Set up a virtual environment:
python3 -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
3. Install the required Python packages:
pip install -r requirements.txt

Running Locally

1. Make sure you have set your OpenRouter API key as an environment variable:
export OPENROUTER_API_KEY='your_openrouter_api_key'
On Windows, use:
set OPENROUTER_API_KEY=your_openrouter_api_key
2. Run the Flask app:
python app.py
3. Open your browser and go to http://localhost:5000.

