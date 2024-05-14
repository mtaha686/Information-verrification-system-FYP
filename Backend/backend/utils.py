from datetime import datetime
from nltk.tokenize import word_tokenize
from PIL import Image
import pytesseract
import re
import nltk
import numpy as np
import cv2

nltk.download('punkt')
# nltk.download('stopwords')


def extract_data_from_image(image_path):
    image = Image.open(image_path)
    image_arr = np.array(image.convert('RGB'))
    gray_img_arr = cv2.cvtColor(image_arr, cv2.COLOR_BGR2GRAY)
    image = Image.fromarray(gray_img_arr)
    custom_config = r'-l eng --oem 3 --psm 4'
    extracted_text = pytesseract.image_to_string(image, config=custom_config)
    return extracted_text


def clean_and_tokenize(text):
    cleaned_text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    cleaned_text = re.sub(r'\b\w\b', '', cleaned_text)
    cleaned_text = cleaned_text.replace('|', '')
    cleaned_text = re.sub(r'[!@#$%^&*()_+\';:,<,>./?\\`~]', '', cleaned_text)
    tokens = word_tokenize(cleaned_text)

    filtered_tokens = [
        word.lower() for word in tokens]

    return filtered_tokens


def find_name(form_data, tokens):
    tokens = [item.lower() for item in tokens]
    name_tokens = form_data.lower().split()
    result = {}

    for value in name_tokens:
        if value in tokens:
            result[value] = True
        else:
            result[value] = False
    return result


def find_cnic_pattern(tokens):

    image_ = tokens.replace(" ", "")
    cleaned_text = re.sub(r'[a-zA-Z\s]', '', image_)
    cleaned_text = cleaned_text.replace('|', " ")
    cnic_pattern = re.compile(r'\b\d{5}-\d{7}-\d{1}\b')
    match = re.search(cnic_pattern, cleaned_text)
    return match.group() if match else None


def compare_cnic_number(form_data, tokens):
    id_card_text = find_cnic_pattern(tokens)
    if id_card_text == form_data:
        return True
    else:
        return False


def find_date_patterns(input_string):
    date_pattern = re.compile(r'\b\d{2}\.\d{2}\.\d{4}\b')
    matches = re.findall(date_pattern, input_string)
    return matches


def convert_date_format(input_date):
    input_datetime = datetime.strptime(input_date, '%Y-%m-%d')
    output_date = input_datetime.strftime('%d.%m.%Y')
    return output_date


def compare_dob(input_date, tokens):

    date_in_image = find_date_patterns(tokens)
    input_date = convert_date_format(input_date)
    for date in date_in_image:
        if input_date == date:
            return True
        else:
            return False


def compare_obtained_marks(obtained, ms_data):

    for index, data in enumerate(ms_data):
        if obtained == data:
            return True
            break
    return False


def compare_total_marks(total, ms_data):
    for index, data in enumerate(ms_data):
        if total == data:
            return True
            break
    return False


def compare_passingYear(passing_year, ms_data):
    for index, data in enumerate(ms_data):
        if passing_year == data:
            return True
            break
    return False


def compare_RollNo(r_no, ms_data):
    for index, data in enumerate(ms_data):
        if r_no == data:
            return True
            break
    return False


def compare_board(input_board, board_in_ms):
    tokens = [item.lower() for item in board_in_ms]
    input_board = re.sub(r'[!@#$%^&*()_+\';:,<,>./?\\`~]', '', input_board)
    name_tokens = input_board.lower().split()
    result = {}

    for value in name_tokens:
        if value in tokens:
            indices = [i for i, x in enumerate(tokens) if x == value]
            for index in indices:
                result[value] = value
        else:
            result[value] = "False"

    return result


def process_card_data(form_data, id_card_data, id_card_tokens,):
    name_match = find_name(form_data['name'], id_card_tokens)
    fname_match = find_name(form_data['father_name'], id_card_tokens)
    dob_match = compare_dob(form_data['dob'], id_card_data)
    cnic_match = compare_cnic_number(form_data['cnic'], id_card_data)

    result_dict = {}
    result_dict = {
        'name': all(name_match.values()),
        'fname': all(fname_match.values()),
        'dob': dob_match,
        'cinc': cnic_match,
    }
    return result_dict


def process_ssc_ms_data(form_data, ssc_tokens, numeric_values):
    name_match = find_name(form_data['name'], ssc_tokens)
    fname_match = find_name(form_data['father_name'], ssc_tokens)
    obtained_match = compare_obtained_marks(
        form_data['sscObtained'], numeric_values)
    total_match = compare_total_marks(form_data['sscTotal'], numeric_values)
    year_match = compare_passingYear(form_data['ssc_py'], numeric_values)
    roll_no_match = compare_RollNo(form_data['ssc_rno'], numeric_values)
    board_match = compare_board(form_data['ssc_board'], ssc_tokens)

    result_dict = {}
    result_dict = {
        'name': all(name_match.values()),
        'fname': all(fname_match.values()),
        'obtained': obtained_match,
        'total': total_match,
        'year': year_match,
        'roll_no': roll_no_match,
        'board': board_match,
    }

    return result_dict


def process_fsc_ms_data(form_data, fsc_tokens, numeric_values):
    name_match = find_name(form_data['name'], fsc_tokens)
    fname_match = find_name(form_data['father_name'], fsc_tokens)
    obtained_match = compare_obtained_marks(
        form_data['fscObtained'], numeric_values)
    total_match = compare_total_marks(form_data['fscTotal'], numeric_values)
    year_match = compare_passingYear(form_data['fsc_py'], numeric_values)
    roll_no_match = compare_RollNo(form_data['fsc_rno'], numeric_values)
    board_match = compare_board(form_data['fsc_board'], fsc_tokens)

    result_dict = {}
    result_dict = {
        'name': all(name_match.values()),
        'fname': all(fname_match.values()),
        'obtained': obtained_match,
        'total': total_match,
        'year': year_match,
        'roll_no': roll_no_match,
        'board': board_match,
    }
    return result_dict
