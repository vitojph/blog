
var documents = [{
    "id": 0,
    "url": "https://vitojph.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://vitojph.github.io/about/",
    "title": "About Me",
    "body": "WhoMy name’s Víctor Peinado and I’m an NLP practioner. Please notice here NLP stands for Natural Language Processing, a subfield ofArtificial Intelligence devote to make machines understand natural language. WhatI’m a language geek. I always dreamed of talking machines. I currently work as a Senior NLP/ML Engineer at Reply. ai. I also enjoy teaching stuff about Machine Learning, Deep Learning, and Natural Language Processing. I used to work at Minsait/INDRA, helping apply NLP and ML to AI products for different domains. And before that, I helped develop Google’s Natural Language products, teached Computacional Linguistics courses at UCM, and did some research on NLP and Multilingual Information Access at UNED’s NLP&amp;IR Group. In the free time, I love running, riding my bike, playing the guitar… "
    }, {
    "id": 2,
    "url": "https://vitojph.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://vitojph.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://vitojph.github.io/2020/03/10/2020-02-26-Apuntate_al_grupo_de_estudio_de_fastai.html",
    "title": "Apúntate al grupo de estudio de fast.ai",
    "body": "2020/03/10 - ¡El grupo de estudio de Fastai en Madrid sigue para adelante! #ML #DL Estamos buscando espacio donde poder reunirnos y visto el exitazo de la propuesta, necesitamos saber cuántos vamos a a ser. Por favor, asegúrate de entender cómo funciona el grupo de estudio, compruebaque cumples los requisitos mínimos y que te puedes comprometer durante ochosemanas y apúntate por favoraquí Y difunde donde creas que pueda resultar interesante. ¡Gracias a todos por el interés! "
    }, {
    "id": 5,
    "url": "https://vitojph.github.io/2020/03/10/2020-02-25-Grupo_de_estudio_de_fastai.html",
    "title": "Grupo de estudio local para fast.ai",
    "body": "2020/03/10 - Gente del mundillo #ML #DL #NLP, amigos todos:Estamos organizando en Madrid un grupo de estudio para hacer el curso de @fastdotai a distancia https://t. co/uDZ565jO5R¿Quién se apunta? &mdash; Víctor Peinado (@vitojph) February 25, 2020Los que estáis al tanto del mundillo Machine Learning, estoy seguro de que habéis oído hablar de fast. ai, de la formidable librería de Python para tareas de Deep Learning y la efervescente comunidad de usuarios que se ha formado alrededor. Y probablemente sabréis que este año se publica la v2 de la librería y que dentro de una semanas echa a andar un curso presencial en la Universidad de San Francisco. Como ir a SF no está al alcance de todos, un grupo de personas estamos organizando un grupo de estudio local en Madrid para hacer el curso a distancia. Organizarse como grupo local tiene varias ventajas: La gente de fast. ai nos daría acceso gratuito a vídeos y materiales, que podríamos revisar en directo o en los días posteriores, de manera que pudiéramos avanzar al mismo ritmo que la gente que asista en persona. También nos permitiría enviar preguntas y dudas al foro e interaccionar con ellos de manera casi directa. Aquí tenéis más detalles sobre los requisitos para estudiantes y organizadores, y sobre el funcionamiento general de estos grupos locales. El curso se celebra los martes, del 17 de marzo al 5 de mayo (en la madrugada europea). Nuestra idea inicial es no pegarnos el madrugón y juntarnos en algún sitio los jueves por la tarde, ver los vídeos, seguir las clases y resolver dudas, entre todos. ¿Quién más se apunta? "
    }, {
    "id": 6,
    "url": "https://vitojph.github.io/2020/03/10/2020-02-07-Casos_practicos_NLP_master-Kschool.html",
    "title": "Casos prácticos de NLP en el Máster de Kschool",
    "body": "2020/03/10 - Este fin de semana he vuelto a dar clase en el Máster de Inteligencia Artificial y Deep Learning de Kschool para las sesiones de casos prácticos de procesamiento del lenguaje natural. Cosas chulas de NLP 🤓 que hemos hecho esta semana en el máster de @kschoolcom &mdash; Víctor Peinado (@vitojph) March 7, 2020Hubo tiempo para hacer muchas cosas todo:    juguetear con modelos ya pre-entrenados para extraer tripletas de relacionesen tweets y noticias,     hacer fine tuning de BERT, DistilBERT y RoBERTa con colecciones de datos públicas,    trackear experimentos y compartir resultados en Weights &amp; Biases,  y cerrar el módulo de NLP haciendo aplicaciones sencillitas con Streamlit. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}