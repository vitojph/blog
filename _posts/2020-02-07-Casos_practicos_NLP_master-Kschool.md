---
- title: "Casos prácticos de NLP en el Máster de Kschool"
- summary: "Este fin de semana he vuelto a dar clase en el máster de IA de
  Kschool"
- toc: false
- branch: master
- badges: true
- comments: true
#- image: images/some_folder/your_image.png
- categories: [NLP, Kschool, AI, DL]
- show_tags: true
#- metadata_key1: metadata_value1
#- metadata_key2: metadata_value2
- author: Víctor Peinado
---

# Casos prácticos de NLP en el Máster de Kschool

Este fin de semana he vuelto a dar clase en el [Máster de Inteligencia Artificial y *Deep Learning* de Kschool](https://kschool.com/cursos/master-deep-learning-inteligencia-artificial-madrid/) para las sesiones de casos prácticos de procesamiento del lenguaje natural.

{% twitter https://twitter.com/vitojph/status/1236371953885368321 %}

Hubo tiempo para hacer muchas cosas todo: 

- juguetear con modelos ya pre-entrenados para extraer tripletas de relaciones
  en tweets y noticias,

```python
from collections import defaultdict

facts = defaultdict(list)

for text in tqdm(texts):
    doc = nlp(text)
    for sentence in doc.sents:
        who, action, what, whom = None, None, None, None
        for token in sentence:
            if action == None and token.dep_ == "ROOT":
                action = token.text
            elif who == None and token.dep_ == "nsubj":
                who = token.text
            elif what == None and token.dep_ == "dobj" or token.dep_ == "attr" or token.dep_ == "ccomp":
                what = token.text
            elif whom == None and token.dep_ == "iobj":
                whom = token.text

    if who:
        facts[who.lower()].append((who, action, what, whom))


def search_facts_about(who: str):
    return facts[who.lower()]

```

- hacer *fine tuning* de BERT, DistilBERT y RoBERTa con colecciones de datos públicas,

![]({{ site.baseurl }}/images/ner.png "Named Entities Recognition")

![]({{ site.baseurl }}/images/sentiment.png "Sentiment Classification")

- trackear experimentos y compartir resultados en [Weights & Biases](https://www.wandb.com/), 

![]({{ site.baseurl }}/images/wandb.png "Tracking experiments live on W&B")

- y cerrar el módulo de NLP haciendo aplicaciones sencillitas con [Streamlit](https://www.streamlit.io/).

![]({{ site.baseurl }}/images/streamlit.png "Streamlit app for NER")


