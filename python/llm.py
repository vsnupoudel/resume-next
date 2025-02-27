import pandas as pd
import numpy as np
from transformers import AutoModel
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the Hugging Face token from environment variables
hf_token = os.getenv('HF_TOKEN')

raw = pd.read_csv('./qna/usvisa.txt', sep='\t', names=['question', 'answer'])
# Initialize the model
# model = AutoModel.from_pretrained("jinaai/jina-embeddings-v3", trust_remote_code=False)
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("jinaai/jina-embeddings-v3", trust_remote_code=True)

question_list = list(raw.question)
embeddings_question = model.encode(question_list, task="text-matching")

raw['embeddings_question'] = embeddings_question.tolist()
# Convert the pandas Series to a NumPy array
raw['embeddings_question'] = raw['embeddings_question'].apply(lambda x: np.array(x, dtype='float16'))

print(raw.head())