from flask import Flask, request, jsonify
from flask_cors import CORS

import pdfquery
app = Flask(__name__)
app.debug = True
CORS(app)
@app.route('/flask', methods=['POST'])
def index():
    data = {}
    if 'file' in request.files:
        pdf_file = request.files['file']
        pdf = pdfquery.PDFQuery(pdf_file)
        pdf.load()
        print("PDF Loaded Successfully")
        annotation_types = ['Summary','Civilian','Education','Assignments','ADDITIONAL SKILLS  CERTIFICATIONS', 'CULTURAL EXPERIENCES  TRAVEL', 'LanguageRow1',
	    'DescriptionRow1','NameRow1','NameRow2','NameRow3','NameRow4','PhoneRow1','PhoneRow2','PhoneRow3','PhoneRow4','EmailRow1','EmailRow2',
	    'EmailRow3','EmailRow4','Org Duty TitleRow1', 'Org Duty TitleRow2', 'Org Duty TitleRow3', 'Org Duty TitleRow4']
        for annotation_type in annotation_types:
            xpath_expression = f"//Annot[@T='{annotation_type}']/@V"
            annotation_data = pdf.tree.xpath(xpath_expression)
            if annotation_data:
                data[annotation_type] = annotation_data[0]
    print(data)
    newData = {}
    newData['summary'] = data['Summary']
    newData['civilian'] = data['Civilian']
    newData['education'] = data['Education']
    newData['assignments'] = data['Assignments']
    newData['skills_certs'] = data["ADDITIONAL SKILLS  CERTIFICATIONS"]
    newData['cultural'] = data['CULTURAL EXPERIENCES  TRAVEL']
    newData['languages'] = data['LanguageRow1']
    newData['lang_desc'] = data['DescriptionRow1']
    newData['ref1_name'] = data['NameRow1']
    newData['ref2_name'] = data['NameRow2']
    newData['ref3_name'] = data['NameRow3']
    newData['ref4_name'] = data['NameRow4']
    newData['ref1_org'] = data['Org Duty TitleRow1']
    newData['ref2_org'] = data['Org Duty TitleRow2']
    newData['ref3_org'] = data['Org Duty TitleRow3']
    newData['ref4_org'] = data['Org Duty TitleRow4']
    newData['ref1_email'] = data['EmailRow1']
    newData['ref2_email'] = data['EmailRow2']
    newData['ref3_email'] = data['EmailRow3']
    newData['ref4_email'] = data['EmailRow4']
    newData['ref1_phone'] = data['PhoneRow1']
    newData['ref2_phone'] = data['PhoneRow2']
    newData['ref3_phone'] = data['PhoneRow3']
    newData['ref4_phone'] = data['PhoneRow4']
    return newData

if __name__ == "__main__":
    app.run(port=5000, debug=True)

