import googletrans
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from langdetect import detect
from slugify import slugify

def generate_slug(title):
    # Initialize the translator
    trans = googletrans.Translator()

    if title == '':
        raise Exception('Title is Empty')
    
    if title is None:
        raise Exception('Title is Null')

    # Detect language
    lang = detect(title)

    # Translate title if it is in Korean
    if lang == "ko":
        translated = trans.translate(title, src='auto', dest='en')
        title = translated.text

    # Tokenize the title
    tokens = word_tokenize(title)

    # English stopwords set (add other languages if needed)
    stop_words = set(stopwords.words('english'))

    # Filter tokens to remove stopwords, non-alphanumeric characters, and lowercase them
    tokens = [slugify(token.lower()) for token in tokens if token.isalnum() and token.lower() not in stop_words]

    # return slug
    return ('-').join(tokens)

