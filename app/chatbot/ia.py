import os
from flask import Flask, request, jsonify
from crewai import Agent, Task, Crew
from langchain.chat_models import ChatOpenAI
from langchain.tools import DuckDuckGoSearchRun

# Configurações de ambiente
api_key="COLOQUE SUA CHAVE AQUI"
model = "gpt-4o-mini"
os.environ["OPENAI_API_KEY"] = api_key
os.environ["OPENAI_MODEL_NAME"] = model

# Inicializando as ferramentas
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.6, api_key=api_key)
search_tool = DuckDuckGoSearchRun()

# Definindo os agentes
researcher = Agent(
    role="Researcher",
    goal="Search for the latest information on renewable energy sources.",
    backstory="""You are an expert in sustainable energy. Your task is to find the latest information on renewable energy sources, their development, and applications in the context of a sustainable future.""",
    allow_delegation=False,
    verbose=True,
    llm=llm,
    tools=[search_tool]
)

assistant_virtual = Agent(
    role="Assistant",
    goal="Answer questions about renewable energy sources based on information retrieved from the web.",
    backstory="""You are an assistant specialized in renewable energy. Your task is to provide clear and accurate answers to questions about renewable energy, using the most up-to-date information gathered from the web.""",
    allow_delegation=False,
    verbose=True,
    llm=llm,
    tools=[]
)

# Definindo tarefas
task1 = Task(
    description="Search for recent developments in renewable energy, including new technologies and sources.",
    expected_output="A detailed report on the latest developments in renewable energy.",
    agent=researcher,
)

task2 = Task(
    description="Use the research from the previous task to craft a well-informed answer to a user's question about renewable energy.",
    expected_output="A clear and informative answer to a user's question about renewable energy.",
    agent=assistant_virtual,
)

crew = Crew(
    agents=[researcher, assistant_virtual],
    tasks=[task1, task2],
    verbose=True
)

# Configurando o Flask para servir a API
app = Flask(_name_)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    user_question = data.get('question', '')
    
    if user_question:
        result = crew.kickoff(inputs={"question": user_question})
        return jsonify({"answer": result.raw})
    else:
        return jsonify({"error": "No question provided"}), 400

if _name_ == "_main_":
    app.run(debug=True, host='0.0.0.0', port=5000)