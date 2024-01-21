## compute_input.py
from Dbias.text_debiasing import ;
from Dbias.bias_classification import;
from Dbias.bias_recognition import ;
from Dbias.bias_masking import;
import os
import pandas as pd
import nltk
from nltk.tokenize import sent_tokenize
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
nltk.download('punkt')
import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    print (lines_sum)

#start process
if __name__ == '__main__':
    main()
